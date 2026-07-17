# Le Pivot — « La Table » / The Pivot: from game to platform

*July 2026. The decision record. Companion to [STRATEGY.md](STRATEGY.md),
[DESIGN-RENCONTRES.md](DESIGN-RENCONTRES.md), [DESIGN-ECONOMY.md](DESIGN-ECONOMY.md),
[BACKEND.md](BACKEND.md).*

## The decision

The goal never changed: **more people speaking French comfortably in New
Brunswick.** The vehicle changed. The SNES game (v0.6, ~2,800 lines of
hand-built town) is charming, but it is a *game*, and the product was always
the table. Kurt called it on 2026-07-17: pivot to a simple, gorgeous platform
that a stranger understands in three seconds.

**The product is a reserved table:** one willing francophone Hôte + 3–5
learners, a public venue, a fixed hour, a level-*welcome* (never a rank),
correction by consent. You reserve a seat at a table, never a person — nobody
gets rejected by a café.

**The promise, three seconds:** « Un·e francophone t'attend. Exprès. » —
*A francophone is waiting for you. On purpose. They will not switch to
English.*

## What moved where

| Asset | Decision |
|---|---|
| The game | **Kept, demoted.** Lives at `/play/` as the rehearsal room and brand artifact. Small card + footer link; never the hero again. |
| `site/index.html` | Rewritten as the platform's front door. |
| `site/rencontres.html` + `rendezvous.json` | Extended: the board now carries reserved tables (`format: "table-reservee"`) alongside the rituals. |
| `client/` + `vite.config.js` + root `package.json` | **Removed.** The dormant Replit-era React SPA had Profile and Messages pages — profiles and DMs are on the never-list (DESIGN-RENCONTRES §2.3). Wrong shape, build-step-dependent, zero shared design language. Git history preserves it. |
| Supabase backend | **Deployed** (see BACKEND.md): live waitlist, true single-use codes, referral tree, reserved tables with atomic seat counts. |

## The doctrine amendment (signed, not slipped in)

DESIGN-RENCONTRES §3 and MESURES refuse RSVPs and "X are going" counts.
That rule was written for the **open community board**, and it stands there
unchanged: **rituals remain RSVP-free and count-free forever.** The pivot
introduces a second format the doctrine already contains in embryo (the
Expedition is registered-in-advance by design): **la table réservée.**

- A reserved table shows **« places restantes : N »** — scarcity *remaining*,
  the logistics of a capped room — never attendee names, never a popularity
  count. The no-names rule is enforced in the database schema itself
  (`bq_list_tables` cannot return attendee data).
- A full table says **« complet »**, and never a padded number.
- The founding-Hôte cohort ships as « la première promotion — petite,
  exprès » with **no number published until Kurt commits one**; a published
  cap is a fixed honest number forever (the photographed-100 rule).

## The MrBeast rules this pivot runs on

From Kurt's uploaded production doc, translated to Bilingua:

1. **One goal.** Every page, form, and dollar serves brave French at real
   tables. Anything else is cut.
2. **The thumbnail test.** The hero must communicate the entire promise in
   three seconds, or it fails — no matter how pretty.
3. **Expectations match reality.** The page promises exactly what a table
   delivers. Honest numbers only, everywhere, forever.
4. **The critical component is hosts, not code.** Without willing
   francophones there is no product. Feasibility first: the public launch
   week does not start until **two real tables with real Hôtes** are on the
   board. Zero hosts after two weeks of recruiting = the honest « pas
   encore », recorded here.
5. **Creativity saves money.** The viral engine is hand-passed paper codes
   and true sell-outs, not ad spend.
6. **Simple. Simpler than that.** One product, one promise, one CTA.

## Phase gates

- **Phase 0 (now):** site live, Hôte recruitment page first. Kurt personally
  recruits 3 committed Hôtes (SANB, Centre communautaire Sainte-Anne,
  immersion teachers incl. retired). Kurt may co-host but doesn't count.
- **Phase 1:** first free table (4 seats), Kurt co-hosting with Hôte #1.
  Free pilot: first table free forever; the $5 / 65-20-15 rails are visible
  but OFF until 2–3 real tables prove the model (DESIGN-ECONOMY go-live
  checklist governs the flip).
- **Phase 2:** launch week per BUZZ.md — gated on two real tables.
- **Fixed numbers stay fixed:** 3 codes per member, the founding 100, the
  host cap once published.
