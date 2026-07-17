// bq-redeem — atomically redeem an invitation code (true single use) and
// return the 3 child codes the new member can pass on. Public.
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
  if (req.method !== "POST") return json({ ok: false, reason: "method" }, 405);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ ok: false, reason: "bad-json" }, 400); }

  const code = String(body.code ?? "").slice(0, 60).toUpperCase().trim();
  const name = String(body.name ?? "").slice(0, 200);
  const ref = String(body.ref ?? "").slice(0, 80);
  if (!code) return json({ ok: false, reason: "empty" }, 400);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  const { data, error } = await supabase.rpc("bq_redeem", {
    p_code: code, p_name: name, p_ref: ref,
  });
  if (error) return json({ ok: false, reason: "server" }, 500);
  return json(data);
});
