# Le Manuel de la Régie — Operating Bilingua Quest

*Companion to [DESIGN-PRINCIPLES.md](DESIGN-PRINCIPLES.md), [DESIGN-EXPEDITIONS.md](DESIGN-EXPEDITIONS.md), [DESIGN-ECONOMY.md](DESIGN-ECONOMY.md), and [DEPLOY-SITE.md](DEPLOY-SITE.md). July 2026. This is the operator's manual: how one person runs the town without breaking any of its promises. The design documents say what the game is; this one says what Kurt does on a Tuesday.*

The whole manual obeys the same law as the game: **no tracking, honest numbers, warm permission.** If a procedure below ever conflicts with a garde-fou in DESIGN-PRINCIPLES.md, the garde-fou wins and this file gets edited.

---

## 1. La carte du royaume — every moving part, and where it lives

| Pièce | Where it lives | What to know |
|---|---|---|
| **bilingua.app** (canonical) | GitHub Pages, serving the `gh-pages` branch | Auto-synced from `site/` on every push to `main` by `.github/workflows/pages.yml`. The domain is claimed by `site/CNAME`; DNS lives at Squarespace. Nothing to click — pushing is deploying. |
| **Netlify mirror** | https://bilingua-quest.netlify.app | Deployed by `.github/workflows/netlify.yml` on every push to `main` — but only once the `NETLIFY_AUTH_TOKEN` repo secret exists; until then the job skips harmlessly. Site ID `2e4f2cb4-2285-4201-8a39-b12c43310fa1`. |
| **Netlify Forms** | Netlify dashboard → bilingua-quest → Forms | The `waitlist`, `feedback`, and `proposer` forms are captured *only* on the Netlify host. Turn on email notifications so submissions reach the inbox. |
| **Forms fallback** | `site/index.html` + `site/proposer.html` | On any hostname that isn't `*.netlify.app`, form submits open a pre-filled email to kurtrgoddard@gmail.com. Nothing is lost, but it arrives as ordinary email — see the daily rhythm below. |
| **The game** | `game/index.html` (source) → `site/play/index.html` (deployed copy) | One file, no dependencies, no backend. When the game changes, copy it to `site/play/` or the live site won't. |
| **Player saves** | Each player's browser, `localStorage` | Not on any server. See Support §4 before promising anyone anything. |
| **Les deux workflows** | `.github/workflows/pages.yml`, `.github/workflows/netlify.yml` | Pages keeps `gh-pages` in sync; Netlify mirrors `site/`. Both trigger on `site/**` changes and can be run by hand from the Actions tab. |
| **Stripe (test mode)** | `site/billets.html` + DESIGN-ECONOMY.md | Three test payment links (seat / Carnet de dix / café suspendu) on the "NextRound" account, `livemode: false`. No real money can move. Go-live checklist is in DESIGN-ECONOMY.md — don't freelance it. |
| **L'Atelier** (unlisted) | `/atelier.html` | The invitation printing room. Unlinked, `noindex, nofollow`. Generates valid coaster cards, 12 to a batch. |
| **La Régie** (unlisted) | `/regie.html` | The operator panel — see §8. Same unlisted pattern as the atelier. |
| **Le calendrier** | `site/rendezvous.json` | The real-events data (Thursday ritual + upcoming gatherings). Edit, push, done. |

---

## 2. Le rythme — daily, weekly, monthly, seasonal

### Chaque jour (2 minutes, honestly 2)

1. **Inbox** — anything at kurtrgoddard@gmail.com with a "Bilingua Quest" subject is a form fallback (waitlist, feedback, or a proposed quest). Reply within a day; these people typed into a pixel-art website and pressed send — that took courage.
2. **Netlify → Forms** — glance at new submissions (or let the email notification do the glancing).

That's the whole job. If nothing arrived, nothing is wrong; the town is quiet, not broken.

### Chaque jeudi — le rituel (the condensed choreography)

The full choreography is DESIGN-EXPEDITIONS.md; this is the pocket version for Dolan's, 18h–20h.

**Before (Wednesday night or Thursday afternoon):**
- Check `site/rendezvous.json` says what's actually happening. If it doesn't, fix and push.
- Print what's needed: role cards, the four correction-consent cards per table, rescue-phrase slips.
- **Code stock check:** if you're carrying fewer than ~a dozen invitation coasters, print a fresh batch at `/atelier.html` — and *photograph the sheet before cutting* (that's how the founding-100 count stays an honest number), then add a line to the regie batch log (§3).

**During:**
- Check-in with you as host; nobody plays anonymous.
- Consent cards face-up before anything else. « Ce soir, je veux juste écouter » is honoured absolutely.
- Roles drawn, partial information distributed, the party needs each other by design.
- A laugh inside five minutes is your job, not luck. The Rebond cheer for every recovery.
- Closing ritual: funniest phrase of the night read aloud, onto the postcard. Vote on the next gathering *before* anyone leaves. Check-out.

**After (10 minutes, same night):**
- Tally the only five numbers: registration→attendance, completion, rough French turns per person, consent-based contact exchanges, 14-day re-registration. Nothing about individuals beyond attendance.
- Note any sentence a player said that belongs in §5's qualitative gates.

### Chaque mois

- **Le 2 du mois, 20h02–21h02 (Atlantique)** — l'Heure Miroir. *Placeholder until the ENTRE layer ships (v0.7):* once it does, verify the month's clock-gated content renders correctly **before** the 2nd — open the game with the system clock set forward and watch it. The mirror hour is a promise with a timestamp; a broken one is a broken promise.
- **Deploy health glance (5 min):** Actions tab — both workflows green on the latest push. Load https://bilingua.app/play/ and check the padlock (cert renews itself, but the glance is free). Load the Netlify mirror. Done.

### Chaque saison

- **La Couture** — the canonization of player moments (DESIGN-ENTRE.md §6.2, once ENTRE is live): the Conseil reviews « Proposer une Mémoire » submissions; **cap 12 per season, floor 0 — never padded.** If only seven moments deserve the city, seven get sewn in. Every canonized moment ships with its permanent byline; every rejection ships with a reason and an invitation to resubmit.
- **Finale ops** — the season finale is a real event with real logistics (DESIGN-ENTRE.md §5.3): venue bookings, accessibility block published in advance, paper ballots, hosts briefed, alcohol-free path in rotation. Start venue conversations six weeks out. It is a bigger Thursday, not a different religion — same check-in/check-out, same consent cards, same five metrics.

---

## 3. Les codes — issuance, mechanics, and what they can't do

### Issuance policy (the founding-100 honesty)

- Codes are printed at `/atelier.html` as coaster cards, batches of up to 100.
- **Photograph every printed sheet before cutting.** The photo is the audit trail: "the founding 100" is a claim about physical objects, and the photos are how it stays true.
- **Log every batch** in the regie CSV — one line per print run: `date, count, occasion, photo filename, notes`. The Régie panel (§8) builds the line for you; keep the ledger wherever your photos live. Batches issued must always reconcile against photographed sheets — that's the whole point.
- Hôtes first, always. Every new citizen who enters gets 3 codes of their own to give — that's the invitation economy, and it means you are never the only person handing out keys.

### How codes actually work (read this before promising anything)

A code is `WORD-WORD-NN`: two distinct words from the 24-word `INVITE_WORDS` list, plus a two-digit checksum — `inviteChecksum` hashes the pair (`v = v*31 + charCode, mod 1e6`) and takes `10 + (v % 89)` (`game/index.html` ~lines 280–292). Validation is **entirely client-side**, in the player's browser.

The honest implications:

- **Any** valid word-pair-plus-checksum works. There are only 24×23 = 552 possible codes, and the word list and math are in public source. The code is **a ritual, not a lock** — it gates the ceremony of entry, not the ability to enter.
- **A code can never be revoked.** Once it exists, it works forever, everywhere, for everyone who types it.
- Therefore: never market the codes as security, never promise "this code only works once," and never build anything that depends on a code being secret. The scarcity that's real is the *printed object* and the *name attached to it* (see §4, "someone shared a code publicly").
- **v1 fixes this properly:** server-side redemption (Supabase) with real one-time-use tracking. Until then, the ritual carries the weight — and it does, because the ritual was always the point.

### QR deep-links

The game accepts `?code=WORD-WORD-NN` (and `#code=…`, because some QR scanners mangle query strings) and pre-fills the invitation gate; the code is stripped from the visible URL immediately so screenshots don't leak invitations (`game/index.html` ~lines 316–327). So a QR on a coaster can point at `https://bilingua.app/play/?code=FOUGERE-VELO-69` and the recipient lands one tap from the town.

---

## 4. Le support — the playbook for real cases

### « J'ai perdu ma sauvegarde »

Be honest first: **v0 saves live in `localStorage` of one browser on one device.** Cleared browser data, private-browsing session, new phone — the save is gone and nothing can recover it. There is no account, because we promised no accounts.

Then be warm: offer a fresh founding code and the Accueil framing — the flame dims, it never dies; coming back always finds an ember. The stamps were the record, not the thing. The confidence, the sentences spoken at real tables — those weren't in the save file. Ten minutes of play rebuilds the passport; the town remembers them even when the browser doesn't.

### Duo-code mismatch (le Serment du Pont)

Two players' codes don't match at the bridge. The Régie panel has the calculator — it runs the exact `duoCode` math from the game (name uppercased, NFD-normalized, accents stripped; hashed with the date). The usual culprits:

- Different date (one player did their side after midnight).
- Different name string — "Véro" in one phone, "Veronique" in the other. The code is deterministic on the *exact* name typed.
- One player on an old cached game version.

Recompute both sides in the calculator, find the divergence, and say so plainly. And remember the design truth: the oath is between two humans on a bridge; the code is the confetti. A mismatch never voids the serment.

### « Quelqu'un a posté un code publiquement »

Do nothing dramatic — you can't revoke it anyway (§3), and panicking would misunderstand our own design. **Codes are not the scarce thing; lineage is.** The invite chain (« qui t'a invité·e ? ») is recorded in the Passeport; an invitation's value is the name of the person who spent it on you. A code floating on the internet grants entry but no lineage — the person arrives uninvited to a town where everyone else was chosen by someone. If it happens at scale, that's simply the signal that v1's server-side redemption has become due (§6).

### Safety report from an encounter

Take every report seriously, immediately, personally. This is the one place where "solo founder" means *more* care, not less.

1. **Listen and thank.** Believe the reporter. Write down what happened, when, where, who — that night, while it's fresh.
2. **Act on attendance** — it's the lever we actually hold. The person complained about is not welcomed at future gatherings: no check-in, no roles, no table. Events are hosted, check-in/check-out, minimum party of four, public places, 18+ — the DESIGN-EXPEDITIONS safety systems exist exactly so that exclusion from events is a real consequence.
3. **Involve authorities when it's beyond us.** Anything involving assault, threats, minors, or a crime is a police matter, not a community-management matter. Say so to the reporter, support them in reporting, and don't play investigator.
4. **Never bury it.** A pattern (two reports about the same person) is disqualifying regardless of how good their French is or how many beginners they've welcomed.

### Venue owner asks for changes

The site already makes the promise: venues appear *with affection and without affiliation*, and owners who want anything changed only have to say the word. So keep the word: **respond within 48 hours**, make the change the same day it's agreed (edit, push, auto-deploy), and treat the conversation as the start of a partnership — the venue rendez-vous boards (v1) will need exactly these relationships.

---

## 5. Les chiffres honnêtes — measuring without tracking

We promised players "no accounts, no tracking," so everything we count is counted **outside the game**, in the real world or on operator surfaces:

- **Netlify form counts** — waitlist size, feedback volume, quest proposals. (Plus the mailto fallbacks in the inbox; count both, they're one funnel split across two hosts.)
- **Code batches issued vs. photographed sheets** — the reconciliation from §3. If these two numbers ever disagree, stop printing until they don't.
- **Expedition attendance** — the five pilot metrics (DESIGN-EXPEDITIONS.md): registration→attendance %, completion %, French turns per person, consent-based contact exchanges, 14-day return. Host-tallied, on paper, nothing about individuals beyond attendance.
- **The four cult-classic sentences** — the qualitative gates. Listen for them at real tables; each one heard unprompted is worth more than any dashboard:
  1. « I met someone interesting. »
  2. « I need to know what happens to this object. »
  3. « My version of the story is different from yours. »
  4. « You should come with me next Thursday. »

**Explicitly forbidden, forever:** analytics or tracking scripts on any player-facing page (the game, the site, the postcards — all of it), and inflating any counter anywhere. One padded number poisons the brand; the site literally promises otherwise. If a metric can't be gathered honestly without surveillance, we live without the metric.

---

## 6. La croissance — the ladder, and when each rung fires

The ladder, in order — each rung is climbed only when the previous one is bearing weight:

1. **The founding 100.** Printed, photographed, hand-delivered, Hôtes first. This rung is climbed by shoe leather.
2. **Word-of-mouth via the invitation economy.** Every named citizen gets 3 codes; the loop (quest → meeting → keepsake → « c'est quoi, ça ? » → invitation) does the work. Your job here is only to keep Thursdays excellent and coasters in circulation.
3. **Press + city partnerships.** The site already promises venue owners a rendez-vous board of their own — when a second venue *asks* for one, this rung has fired. The story writes itself ("an SNES game where you walk around actual Fredericton practicing French, and the coffee is real"); pitch it only once there are regulars to photograph.
4. **New-city seeding (v2).** Moncton and Saint John as locked regions; « quand Moncton se déverrouille » is the campaign. Not before v1 infrastructure exists.

**Upgrade triggers — concrete, so future-Kurt doesn't have to re-decide under adrenaline:**

| Trigger (whichever fires first) | Upgrade |
|---|---|
| The pilot clears its bar (≥60% completion, ≥25% 14-day return) **or** a sustained core of weekly regulars (roughly 8+ returning players across 4 consecutive Thursdays) **or** the first event that should charge real money | **Stripe live mode** — run the DESIGN-ECONOMY go-live checklist *in order* (lawyer sign-off first, then live links, then `site/billets.html` URLs). Never skip step 1. |
| A publicly leaked code circulating at scale, **or** any feature needing shared world state (honest city counters, guilds, letters), **or** real Hôte applications | **Supabase v1** — real auth, server-side one-time code redemption, honest aggregate counters. These three needs arrive together by design; build once. |
| A second city's worth of demand (people driving in from Moncton for Thursdays) | **v2 seeding** — per GAME-BUILD-PLAN.md, and not a day sooner. |

---

## 7. Les limites connues — the honest list

Written down so nobody (including Kurt at 1 a.m.) rediscovers one of these and mistakes it for an emergency. They are all *known, accepted, and scheduled*.

1. **Obscurity is not auth.** `/atelier.html` and `/regie.html` are unlinked and noindexed, nothing more. Anyone with the URL can open them. This is acceptable **only** because neither page holds a secret (§8) — and that rule is load-bearing.
2. **Codes cannot be revoked.** Client-side checksum, 552 possible codes, public math. Ritual, not lock. v1 fixes it server-side.
3. **No shared world state.** Every player's town relights alone; counters are local; "the whole city has the same mission" is true by shared math, not by a server. Honest aggregate numbers wait for v1.
4. **localStorage is fragile.** Saves die with browser data. No recovery exists, and support says so plainly (§4).
5. **Form capture is split across two hosts.** Netlify captures to a dashboard; every other host falls back to mailto. One funnel, two inboxes — count both or undercount.
6. **Bus factor: one.** The mitigations: *everything lives in git* — the game, the site, the workflows, the design canon, this manual. The repo is the backup and the succession plan. Batch photos and the regie CSV are the only operator artifacts outside it; keep them somewhere a second person could find.

---

## 8. La Régie — the operator panel

`/regie.html` is the unlisted operator panel — the atelier's sibling, same pattern (unlinked, `noindex, nofollow`), for the daily and Thursday jobs instead of printing.

**What each section does:**

- **Vérificateur de code** — paste any invitation code, see instantly whether it validates, using the exact `inviteChecksum`/`validateInvite` math from the game. For the "is this coaster smudged or wrong?" moment at a real table.
- **Calculateur du Serment** (duo-code) — enter a name and a date, get the code the game would produce (exact `duoCode` replica: NFD-normalize, strip accents, uppercase, date-hash). The §4 mismatch playbook runs on this.
- **Mission du jour** — shows today's (and any date's) Mission Secrète via the game's `dailyMission` date-hash, so the host knows what the whole city was dared to do before walking into Dolan's.
- **Lien QR / deep-link** — builds `https://bilingua.app/play/?code=…` links for coaster QR codes (§3).
- **Journal des lots** — assembles the regie CSV line for a print batch (`date, count, occasion, photo, notes`) ready to copy into the ledger, keeping issued-vs-photographed reconcilable.

**The one rule, non-negotiable: la Régie must never hold a secret.** No credentials, no player data, no API keys, no hidden state — nothing that would make the page dangerous if the URL leaked. Everything it computes is math already public in the game's source; the page is a convenience, not a vault. The day the panel needs anything secret (real redemption tracking, attendance records, payouts), that feature does not go here — it goes behind **real authentication in v1**, which is where the whole panel moves anyway.

---

*Le jeu est la porte. La table est la maison. La régie, c'est juste les clés bien rangées.*
