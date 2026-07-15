# Bilingua Quest — the backend (`getnextround` Supabase project)

This turns the operator panel into a real control room: a live waitlist, true
**single-use** invitation codes, a who-invited-whom **referral tree**, and an
**access list** of who's redeemed. It is deliberately small and sealed.

> **Status: authored, not yet deployed.** The database migration and Edge
> Functions in this repo are ready to apply, but the session that wrote them
> could not reach the Supabase write API (a sandbox egress + tool-permission
> limitation, not a code problem). Apply them with the steps below — from the
> Supabase dashboard SQL editor or the CLI — and nothing on the live site
> changes until the "go-live" wiring (last section) is merged.

## Where it lives

- **Project:** `getnextround` (`tgzouzrqaqpjyqjbveaz`), org *Throughput Labs*,
  region `ca-central-1`. Chosen because it matches your NextRound Stripe
  account and was empty — no new $10/mo project, no collision.
- **Region note:** Canadian data residency (ca-central-1) is a genuine plus for
  a PIPEDA posture.

## Security model (why this is safe)

- All data lives in an isolated **`bilingua`** schema that is **not exposed** to
  the public API. Row-level security is **on** with **zero policies**, so the
  anon/`authenticated` keys can touch nothing directly.
- The only callable surface is three `SECURITY DEFINER` functions in `public`,
  prefixed `bq_`. `EXECUTE` is **revoked from everyone** and granted **only to
  `service_role`** — so only the Edge Functions (which run server-side with the
  service role) can call them. A leaked anon key does nothing.
- The operator report additionally checks a **secret key** stored in
  `bilingua.config`. Set it after deploy (below); rotate it any time with one
  SQL statement.

## Files

- `supabase/migrations/0001_bilingua_foundation.sql` — schema, RLS, the code
  grammar (matches the game's checksum, so DB-minted codes still pass the game's
  offline check), and the three `bq_*` functions.
- `supabase/functions/bq-waitlist/` — POST a signup/feedback/proposal. Public.
- `supabase/functions/bq-redeem/` — POST `{code,name,ref}`; atomic single-use
  redemption; returns 3 child codes (the referral edge). Public.
- `supabase/functions/bq-report/` — GET/POST with `x-op-key`; the dashboard's
  data. Secret-gated.

## Deploy (about five minutes)

**1. Apply the migration.** Easiest: Supabase dashboard → project
`getnextround` → SQL Editor → paste the contents of
`supabase/migrations/0001_bilingua_foundation.sql` → Run.
Or with the CLI: `supabase link --project-ref tgzouzrqaqpjyqjbveaz && supabase db push`.

**2. Set the operator key.** In the SQL editor, run (use the key I gave you in
chat, or generate your own long random string):
```sql
update bilingua.config set value = 'YOUR-LONG-RANDOM-KEY', updated_at = now()
where key = 'operator_key';
```
Keep that key private — it unlocks the dashboard. To rotate later, run the same
statement with a new value.

**3. Deploy the functions.** CLI:
`supabase functions deploy bq-waitlist bq-redeem bq-report --no-verify-jwt`
(`--no-verify-jwt` because these are meant to be called from the browser with
the anon key; the real gates are the service-role grant and, for the report,
the op-key.)

**4. Note the base URL.** `https://tgzouzrqaqpjyqjbveaz.functions.supabase.co`
(or `.../functions/v1/<name>`). The frontend go-live wiring needs it plus the
project's **anon/publishable key** (safe to embed — it's designed to be public).

## Go-live: wiring the frontend (the last, atomic step)

This is intentionally **not done yet**, because it changes a live site and must
land together with an honest privacy update:

1. **Site waitlist** → POST to `bq-waitlist`, with the current Netlify-form /
   email behaviour kept as a fallback if the call fails.
2. **Game code gate** → POST to `bq-redeem` for true single-use validation,
   falling back to today's offline checksum if the backend is unreachable
   (so the game never hard-breaks on a flaky network).
3. **Operator panel** → add a "live mode": paste the op-key once (stored in your
   browser), and the counts/tables fill from `bq-report`. The private local
   ledger stays as the offline fallback.
4. **Privacy & terms rewrite (required).** The published pages currently promise
   "*No account. No tracking.*" Once signups/redemptions are stored, that must
   change to the truth: what's collected (email, name, referral link, redemption
   record), why, where (Supabase, Canada), how long, and how to request deletion
   (PIPEDA). **Do not turn on collection without shipping this in the same PR.**

Until step 4 ships, the live site collects nothing new and the privacy promise
stays true.
