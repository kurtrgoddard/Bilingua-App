-- ============================================================================
-- Grant hardening.  (APPLIED 2026-07-17, after the security advisor flagged it)
-- ----------------------------------------------------------------------------
-- Supabase default privileges grant EXECUTE on new public-schema functions to
-- anon/authenticated DIRECTLY, so 0001/0002's `revoke ... from public` alone
-- left the bq_* RPCs callable via /rest/v1/rpc without the service role.
-- Verified after applying: anon=false, authenticated=false, service_role=true
-- for every bq_* function.
-- ============================================================================

revoke all on function public.bq_add_signup(text,text,text,text,text) from anon, authenticated;
revoke all on function public.bq_redeem(text,text,text) from anon, authenticated;
revoke all on function public.bq_operator_report(text) from anon, authenticated;
revoke all on function public.bq_list_tables() from anon, authenticated;
revoke all on function public.bq_reserve(text,text,text,text,text) from anon, authenticated;
alter default privileges in schema public revoke execute on functions from anon, authenticated;
