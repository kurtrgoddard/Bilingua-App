-- ============================================================================
-- Bilingua — La Table: reserved tables + seat reservations.  (APPLIED 2026-07-17)
-- Same security model as 0001: sealed tables, service-role-only callable surface.
-- Doctrine enforced in schema: the list function returns seat COUNTS only,
-- never attendee names (DESIGN-RENCONTRES: you reserve a table, not a person).
-- ============================================================================

create table if not exists bilingua.tables (
  id            text primary key,               -- slug, e.g. 'table-2026-07-24-cedar'
  date_at       date not null,
  heure         text not null,                  -- '18h00'
  lieu          text not null,                  -- public venue name only
  quartier      text,
  titre_fr      text not null,
  titre_en      text not null,
  niveau        text not null default 'tous',   -- welcome-badge, never a rank
  hote_prenom   text not null,                  -- first name + star; never more
  places        int  not null check (places between 3 and 6),
  places_prises int  not null default 0,
  statut        text not null default 'ouverte'
                check (statut in ('ouverte','complet','annulee','passee')),
  notes_fr      text,
  notes_en      text,
  created_at    timestamptz not null default now()
);

create table if not exists bilingua.rsvps (
  id          uuid primary key default gen_random_uuid(),
  table_id    text not null references bilingua.tables(id),
  name        text not null,
  email       text not null,
  parcours    text,                              -- voluntary self-ID, four answers incl. « je préfère ne pas dire »
  invite_code text,
  status      text not null default 'confirmee' check (status in ('confirmee','annulee')),
  created_at  timestamptz not null default now()
);
create index if not exists rsvps_table_idx on bilingua.rsvps(table_id);
create unique index if not exists rsvps_one_seat_per_email
  on bilingua.rsvps(table_id, lower(email)) where status = 'confirmee';

alter table bilingua.tables enable row level security;
alter table bilingua.rsvps  enable row level security;

-- Public list: upcoming tables with seats REMAINING only. No attendee data, ever.
create or replace function public.bq_list_tables()
returns jsonb
language sql security definer set search_path = bilingua, public
as $$
  select coalesce(jsonb_agg(to_jsonb(t) order by t.date_at, t.heure), '[]'::jsonb)
  from (
    select id, date_at, heure, lieu, quartier, titre_fr, titre_en, niveau,
           hote_prenom, places,
           greatest(places - places_prises, 0) as places_restantes,
           statut, notes_fr, notes_en
    from bilingua.tables
    where statut in ('ouverte','complet')
      and date_at >= current_date
  ) t
$$;

-- Atomic reservation: lock the table row, verify space, one seat per email.
create or replace function public.bq_reserve(
  p_table_id text, p_name text, p_email text, p_parcours text, p_invite_code text
) returns jsonb
language plpgsql security definer set search_path = bilingua, public
as $$
declare t bilingua.tables%rowtype; remaining int;
begin
  if btrim(coalesce(p_name,'')) = '' or btrim(coalesce(p_email,'')) = '' then
    return jsonb_build_object('ok', false, 'reason', 'missing');
  end if;
  select * into t from bilingua.tables where id = p_table_id for update;
  if not found or t.statut in ('annulee','passee') then
    return jsonb_build_object('ok', false, 'reason', 'unknown');
  end if;
  if t.statut = 'complet' or t.places_prises >= t.places then
    return jsonb_build_object('ok', false, 'reason', 'complet');
  end if;
  begin
    insert into bilingua.rsvps(table_id, name, email, parcours, invite_code)
    values (p_table_id, btrim(p_name), lower(btrim(p_email)),
            nullif(btrim(coalesce(p_parcours,'')),''), nullif(upper(btrim(coalesce(p_invite_code,''))),''));
  exception when unique_violation then
    return jsonb_build_object('ok', false, 'reason', 'deja');
  end;
  update bilingua.tables
     set places_prises = places_prises + 1,
         statut = case when places_prises + 1 >= places then 'complet' else statut end
   where id = p_table_id
   returning greatest(places - places_prises, 0) into remaining;
  return jsonb_build_object('ok', true, 'table_id', p_table_id, 'places_restantes', remaining);
end;
$$;

revoke all on function public.bq_list_tables()                                     from public;
revoke all on function public.bq_reserve(text,text,text,text,text)                 from public;
grant execute on function public.bq_list_tables()                                  to service_role;
grant execute on function public.bq_reserve(text,text,text,text,text)              to service_role;
