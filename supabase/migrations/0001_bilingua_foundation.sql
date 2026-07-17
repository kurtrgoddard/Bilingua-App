-- ============================================================================
-- Bilingua Quest — backend foundation
-- ----------------------------------------------------------------------------
-- Security model:
--   * Data lives in an isolated `bilingua` schema, NOT exposed to PostgREST.
--   * RLS is ON with zero policies => anon/authenticated keys touch nothing.
--   * The only callable surface is three SECURITY DEFINER functions in `public`,
--     prefixed `bq_`. EXECUTE is REVOKED from public/anon/authenticated and
--     GRANTED only to `service_role`, so ONLY the Edge Functions (which run with
--     the service role) can call them. The anon key can do nothing on its own.
--   * The operator report additionally verifies a secret key stored in
--     bilingua.config (set after deploy — see BACKEND.md).
-- ============================================================================

create schema if not exists bilingua;

-- ---- Tables (sealed) ------------------------------------------------------

create table if not exists bilingua.signups (
  id          uuid primary key default gen_random_uuid(),
  kind        text not null default 'waitlist'
              check (kind in ('waitlist','feedback','quest_proposal')),
  email       text,
  name        text,
  message     text,
  referred_by text,
  created_at  timestamptz not null default now()
);

create table if not exists bilingua.codes (
  code        text primary key,
  issued_to   text,
  channel     text,
  source      text not null default 'operator'
              check (source in ('operator','player','founding')),
  parent_code text references bilingua.codes(code) on delete set null,
  max_uses    int  not null default 1,
  uses        int  not null default 0,
  created_at  timestamptz not null default now()
);
create index if not exists codes_parent_idx on bilingua.codes(parent_code);

create table if not exists bilingua.redemptions (
  id          uuid primary key default gen_random_uuid(),
  code        text not null references bilingua.codes(code),
  player_name text,
  player_ref  text,
  redeemed_at timestamptz not null default now()
);
create index if not exists redemptions_code_idx on bilingua.redemptions(code);

create table if not exists bilingua.config (
  key        text primary key,
  value      text not null,
  updated_at timestamptz not null default now()
);
insert into bilingua.config (key, value)
values ('operator_key', 'SET-ME-AFTER-DEPLOY')
on conflict (key) do nothing;

alter table bilingua.signups     enable row level security;
alter table bilingua.codes       enable row level security;
alter table bilingua.redemptions enable row level security;
alter table bilingua.config      enable row level security;

-- ---- Internal helper: mint a pretty code in the game's grammar ------------
-- checksum over UPPER("WORD1-WORD2"): v=(v*31+charCode) mod 1e6; cs=10+(v mod 89)
-- => every minted code also passes the game's offline client validation.
create or replace function bilingua.mint_code(
  p_source text, p_parent text, p_issued_to text, p_channel text
) returns text
language plpgsql security definer set search_path = bilingua
as $$
declare
  words text[] := array[
    'VIOLET','WOLASTOQ','FOUGERE','ACADIE','STELLA','POUTINE','RIVIERE','PONT',
    'CAFE','VELO','HARVEST','FROSTIVAL','TINTAMARRE','MARIGOLD','CHICKADEE',
    'MOITIE','BRUME','HOMARD','SIROP','CANOT','LILAS','PICNIC','AURORE','SENTIER'];
  w1 text; w2 text; s text; v bigint; cs int; c text; i int; tries int := 0;
begin
  loop
    tries := tries + 1;
    w1 := words[1 + floor(random() * array_length(words,1))::int];
    w2 := words[1 + floor(random() * array_length(words,1))::int];
    if w1 = w2 then continue; end if;
    s := upper(w1 || '-' || w2);
    v := 0;
    for i in 1..length(s) loop
      v := (v * 31 + ascii(substr(s, i, 1))) % 1000000;
    end loop;
    cs := 10 + (v % 89);
    c := w1 || '-' || w2 || '-' || cs::text;
    begin
      insert into bilingua.codes(code, issued_to, channel, source, parent_code)
      values (c, p_issued_to, p_channel, coalesce(p_source,'operator'), p_parent);
      return c;
    exception when unique_violation then
      if tries > 400 then raise exception 'could not mint a unique code'; end if;
    end;
  end loop;
end;
$$;

-- ---- Public callable surface (service_role only) --------------------------

create or replace function public.bq_add_signup(
  p_kind text, p_email text, p_name text, p_message text, p_referred_by text
) returns jsonb
language plpgsql security definer set search_path = bilingua, public
as $$
declare new_id uuid;
begin
  if p_kind is null or p_kind not in ('waitlist','feedback','quest_proposal') then
    p_kind := 'waitlist';
  end if;
  insert into bilingua.signups(kind, email, name, message, referred_by)
  values (p_kind, nullif(btrim(p_email),''), nullif(btrim(p_name),''),
          nullif(btrim(p_message),''), nullif(btrim(upper(p_referred_by)),''))
  returning id into new_id;
  return jsonb_build_object('ok', true, 'id', new_id);
end;
$$;

create or replace function public.bq_redeem(
  p_code text, p_name text, p_ref text
) returns jsonb
language plpgsql security definer set search_path = bilingua, public
as $$
declare rec bilingua.codes%rowtype; child text[] := array[]::text[]; i int;
begin
  p_code := upper(btrim(p_code));
  select * into rec from bilingua.codes where code = p_code for update;
  if not found then return jsonb_build_object('ok', false, 'reason', 'unknown'); end if;
  if rec.uses >= rec.max_uses then return jsonb_build_object('ok', false, 'reason', 'used'); end if;
  update bilingua.codes set uses = uses + 1 where code = p_code;
  insert into bilingua.redemptions(code, player_name, player_ref)
  values (p_code, nullif(btrim(p_name),''), nullif(btrim(p_ref),''));
  for i in 1..3 loop
    child := array_append(child, bilingua.mint_code('player', p_code, null, null));
  end loop;
  return jsonb_build_object('ok', true, 'code', p_code, 'childCodes', to_jsonb(child));
end;
$$;

-- Operator dashboard: verify the secret key, then return the live picture.
create or replace function public.bq_operator_report(p_key text)
returns jsonb
language plpgsql security definer set search_path = bilingua, public
as $$
declare stored text; result jsonb;
begin
  select value into stored from bilingua.config where key = 'operator_key';
  if stored is null or stored = 'SET-ME-AFTER-DEPLOY' or p_key is null or p_key <> stored then
    return jsonb_build_object('ok', false, 'reason', 'unauthorized');
  end if;
  result := jsonb_build_object(
    'ok', true,
    'counts', jsonb_build_object(
      'waitlist',  (select count(*) from bilingua.signups where kind='waitlist'),
      'feedback',  (select count(*) from bilingua.signups where kind='feedback'),
      'proposals', (select count(*) from bilingua.signups where kind='quest_proposal'),
      'codes',     (select count(*) from bilingua.codes),
      'redeemed',  (select count(*) from bilingua.codes where uses >= max_uses and source <> 'founding'),
      'members',   (select count(*) from bilingua.redemptions)
    ),
    'signups', (select coalesce(jsonb_agg(to_jsonb(s)), '[]'::jsonb)
                from (select kind, email, name, message, referred_by, created_at
                      from bilingua.signups order by created_at desc limit 500) s),
    'codes',   (select coalesce(jsonb_agg(to_jsonb(c)), '[]'::jsonb)
                from (select code, issued_to, channel, source, parent_code, uses, max_uses, created_at
                      from bilingua.codes order by created_at desc limit 1000) c),
    'members', (select coalesce(jsonb_agg(to_jsonb(r)), '[]'::jsonb)
                from (select code, player_name, redeemed_at
                      from bilingua.redemptions order by redeemed_at desc limit 500) r)
  );
  return result;
end;
$$;

-- Lock the callable surface to the service role only.
revoke all on function public.bq_add_signup(text,text,text,text,text)     from public;
revoke all on function public.bq_redeem(text,text,text)                    from public;
revoke all on function public.bq_operator_report(text)                     from public;
grant execute on function public.bq_add_signup(text,text,text,text,text)   to service_role;
grant execute on function public.bq_redeem(text,text,text)                 to service_role;
grant execute on function public.bq_operator_report(text)                  to service_role;

-- ---- Seed: the founding demo code (reusable so it always works as a demo) --
insert into bilingua.codes (code, issued_to, channel, source, max_uses)
values ('STELLA-WOLASTOQ-11', 'Demo / testing', 'built-in demo code', 'founding', 1000000)
on conflict (code) do nothing;
