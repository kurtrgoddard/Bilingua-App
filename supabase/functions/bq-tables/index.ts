// bq-tables — the Tables board API. GET: upcoming tables with seats-remaining
// ONLY (never attendee data — the doctrine, enforced twice: here and in SQL).
// POST: reserve one seat {table_id, name, email, parcours?, invite_code?}.
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

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  if (req.method === "GET") {
    const { data, error } = await supabase.rpc("bq_list_tables");
    if (error) return json({ ok: false, reason: "server" }, 500);
    return json({ ok: true, tables: data });
  }

  if (req.method === "POST") {
    let body: Record<string, unknown>;
    try { body = await req.json(); } catch { return json({ ok: false, reason: "bad-json" }, 400); }
    const table_id = String(body.table_id ?? "").slice(0, 80);
    const name = String(body.name ?? "").slice(0, 200);
    const email = String(body.email ?? "").slice(0, 320);
    const parcours = String(body.parcours ?? "").slice(0, 40);
    const invite_code = String(body.invite_code ?? "").slice(0, 60);
    if (!table_id || !name || !email) return json({ ok: false, reason: "missing" }, 400);
    const { data, error } = await supabase.rpc("bq_reserve", {
      p_table_id: table_id, p_name: name, p_email: email, p_parcours: parcours, p_invite_code: invite_code,
    });
    if (error) return json({ ok: false, reason: "server" }, 500);
    return json(data);
  }

  return json({ ok: false, reason: "method" }, 405);
});
