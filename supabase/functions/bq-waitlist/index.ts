// bq-waitlist — capture a signup, feedback note, or quest proposal.
// Public. Uses the service role (server-side only) to call bq_add_signup.
import { createClient } from "jsr:@supabase/supabase-js@2";
import { cors, json } from "../_shared/cors.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ ok: false, reason: "method" }, 405);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ ok: false, reason: "bad-json" }, 400); }

  const email = String(body.email ?? "").slice(0, 320);
  const name = String(body.name ?? "").slice(0, 200);
  const message = String(body.message ?? "").slice(0, 4000);
  const kind = String(body.kind ?? "waitlist");
  const referred_by = String(body.referred_by ?? "").slice(0, 60);

  // A signup with nothing in it is noise.
  if (!email && !message && !name) return json({ ok: false, reason: "empty" }, 400);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  const { data, error } = await supabase.rpc("bq_add_signup", {
    p_kind: kind, p_email: email, p_name: name, p_message: message, p_referred_by: referred_by,
  });
  if (error) return json({ ok: false, reason: "server", detail: error.message }, 500);
  return json(data);
});
