// bq-report — the operator dashboard's data source. Requires the secret
// operator key in the `x-op-key` header (verified inside the DB function).
// Returns the live picture: counts, signups, codes with holders, the access
// list, and the referral edges.
import { createClient } from "jsr:@supabase/supabase-js@2";
const cors: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-op-key",
};
function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  // Accept the key from the header (GET) or the JSON body (POST).
  let key = req.headers.get("x-op-key") ?? "";
  if (!key && req.method === "POST") {
    try { key = String((await req.json())?.key ?? ""); } catch { /* ignore */ }
  }
  if (!key) return json({ ok: false, reason: "unauthorized" }, 401);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  const { data, error } = await supabase.rpc("bq_operator_report", { p_key: key });
  if (error) return json({ ok: false, reason: "server" }, 500);
  if (!data || (data as { ok?: boolean }).ok !== true) {
    return json({ ok: false, reason: "unauthorized" }, 401);
  }
  return json(data);
});
