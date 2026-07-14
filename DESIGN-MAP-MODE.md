# Design: Downtown Fredericton — the Explorable Map Mode

*Companion to [STRATEGY.md](STRATEGY.md). July 2026. A design document, not a build plan — the build decision comes after reading the [evaluation](#4-evaluation-against-the-current-plan).*

---

## The concept in one paragraph

A cozy top-down world — Harvest Moon register, not combat — called **Downtown Fredericton**: a fictionalized, affectionate composite of the real thing. Each shop on the street is a themed conversation venue: the **Café** teaches ordering and small talk, the **Librairie** teaches opinions and disagreement, the **Marché** teaches numbers and bargaining. Walking into a shop matchmakes you — with a human partner at your level if one's available, or with the AI shopkeeper if not. Every conversation inside is structured, bilingual, and split down the middle: half in French, half in English. The map is not a game you win. It's a town you slowly earn the right to walk around in — in your second language.

Why this fits the strategy rather than fighting it: STRATEGY.md's thesis is that Bilingua's product is *permission*, not education — the L-plate, the moitié-moitié, the reduction of worst-case social risk. **An avatar is the ultimate L-plate.** Nobody's real face reddens in a pixel café. The map mode is the permission structure, digitized: a place where speaking badly is not just safe but *the point of the game*.

---

## 1. The safety model (designed first, on purpose)

Safety is not a feature layer here; it is the matchmaking architecture. The design principle, inherited from STRATEGY.md's variance-reduction reframe: **make the worst possible interaction structurally impossible, not just reportable.**

### 1.1 The trust ladder

Communication capability is earned in rungs. Nobody starts with an open channel.

| Rung | Unlocked by | What you can do | What you cannot do |
|---|---|---|---|
| **L0 — Villager** | Signup + 18+ attestation | Walk the map, watch venue activity, play solo AI scenarios | Contact any human |
| **L1 — Regular** (default for human play) | Completing the tutorial scenario with the AI shopkeeper | Structured scenarios with humans, composed **only from phrase palettes** | Free-type anything; exchange any contact info |
| **L2 — Familiar face** | **3 completed structured exchanges with the *same* partner**, both confirming each one | Guided free-text *inside* scenarios (short, filtered, slot-bounded) | DMs; anything outside a scenario |
| **L3 — Friend** *(post-MVP, deferred)* | Sustained L2 history + mutual opt-in | Free chat; the real-world meetup bridge (inherits the 2025 build's public-venue protocol, meetup proposals, safety tips) | — |

The N=3 rule does the quiet work: ghosting, dating-drift, and grooming all depend on *fast escalation to a private channel* — the documented failure mode of every big exchange app (HelloTalk's "you match, chat for two days, then they stop replying" is the benign version). Three structured, scheduled, mutually-confirmed exchanges is a pace a predator finds useless and a shy learner finds comfortable. Escalation is also **per-pair**, not per-account: being L2 with Marie-Claude gives you nothing with anyone else.

### 1.2 Phrase palettes: the safety mechanism disguised as pedagogy

At L1, every utterance is composed from the venue's **phrase palette**: curated bilingual phrase sets with constrained fill-slots.

> **Café palette, learner turn (FR half):**
> « Je voudrais ___, s'il vous plaît. » — slots: *un café au lait · un thé · un chocolat chaud…*
> « C'est ma première fois ici. » · « Qu'est-ce que vous recommandez ? » · « Pouvez-vous répéter plus lentement ? »

Three properties make the palette the load-bearing safety wall:

- **PII is unsayable.** Palettes contain no phrases for arranging contact ("meet me at," "my number is," "add me on"); free slots accept only items from venue vocabulary lists — no digits, no @-handles, no URLs. At L2, the short free-text slots pass a filter (regex for digits/handles/addresses + a small-model check for solicitation and harassment patterns). Safety isn't moderating what was said; it's constraining what is *sayable*.
- **Reports are cheap to adjudicate.** A transcript that is 90% canonical phrases makes the deviant 10% jump out. Moderation of structured exchanges scales in a way moderation of open chat never does — which matters enormously for a grant-funded project with no trust-and-safety department.
- **The palette is also the lesson.** "Pouvez-vous répéter plus lentement ?" is simultaneously a safety rail, a survival phrase, and — per the strategy's L-plate logic — a *scripted way to admit you're struggling without losing face*. The apology-for-existing that shy learners improvise badly is pre-written for them, in good French.

### 1.3 The map is not a map

**No real locations tied to real people — structurally, not as policy.**

- Downtown Fredericton is a **fictionalized composite**. Venues are *types* (a café, a bookstore, a market), drawn with local affection but not addressable. If real partner businesses later license a storefront skin (a nice sponsorship product), the skin changes the art, never the data: no hours, no addresses, no implication that anyone is physically there.
- **Matchmaking is by level, language direction, and availability — never proximity.** There is no geolocation permission in the app at all in v1. Nothing to leak.
- **Presence is anonymous and aggregate only.** A venue shows "🇫🇷 2 · 🇬🇧 3 practicing here," never who. "X is in the café right now" is a stalking primitive and does not exist. Partner identity is revealed only at match time, only as avatar + display name + level.
- **Identity is avatar-only at every rung below L3**: chosen display name, level badge, language flags. No photos, no real names, no age display, no linked socials. (PIPEDA posture carries over from the 2025 build: minimal collection, consent-stamped, deletion on request.)

### 1.4 Population policy

- **18+ at launch**, attested at signup. This is the deferral that makes v1's safety model tractable: no minors means no minor-adult contact surface while the trust ladder proves itself.
- Flagged now for later: if schools become a channel (a plausible grant-funded direction given NB's immersion politics), minors get a **fully separate, educator-supervised instance** — separate matchmaking pool, separate infrastructure, no cross-pool visibility. Never a mixed pool with controls; separate worlds.
- **Report and block on every surface** — every scenario turn, every match card. Blocking is silent and bilateral: you simply never see each other in matchmaking again, and neither is told. Reports auto-attach the structured transcript.
- **Hôtes are vetted humans, not just accounts**: the volunteer francophone role (see economy) requires a short onboarding conversation with the project — which the capped, honour-framed design makes natural rather than bureaucratic.

---

## 2. The bilingual economy

The design problem: the two sides of this exchange want different things, so paying them in one currency flattens the difference and kills it. STRATEGY.md's reframe 6 (pay the supply side in status, not coffee) becomes literal game design here.

### 2.1 Two currencies, deliberately asymmetric

**Francophone volunteers — Hôtes — earn *status*.** Non-spendable, visible, scarce:

- **Titles** that render on the avatar and match card: *Hôte* → *Hôte d'argent* → *Hôte d'or*, per venue.
- **Collectibles** with Acadian and NB flavour — pins rendered on the avatar: the Stella, a fiddlehead, a lighthouse, a violet (the provincial flower), a tiny covered bridge. Earned for milestones (first learner shepherded through a full venue tier; ten completed quests; hosting during three market hours).
- **Storefront plaques**: the Café's façade on everyone's map shows its current Hôtes d'or by display name. The town itself remembers you. This is the game-world version of the strategy's "name on the café wall."
- **A cap.** Each venue holds a limited number of active Hôte seats per season. A cap on a volunteer role is absurd by logic and perfect by psycho-logic: scarcity converts a favour into a title, and a waitlist converts recruitment into demand.

**Anglophone learners earn *progress*.** Spendable only on more of the game:

- **Shop-unlock progress**: completed conversations fill a venue's tier meter — Café tier 1 (ordering) → tier 2 (small talk with a regular) → tier 3 (complaining politely that they got your order wrong — the true endgame of Canadian French).
- **Map expansion**: finishing venue tiers opens new districts — the Green, Officers' Square, the Boyce Farmers Market on Saturdays — each with new venues and palettes. The 2025 region-unlock mechanic reborn at street scale.
- **No XP for volume, only for completion.** The unit of progress is the completed conversation (both parties confirm), never minutes-in-app. The KPI argument from STRATEGY.md, enforced by the economy.

Nothing in either currency is tradeable, giftable, or purchasable. The moment status can be bought or farmed, it stops being status.

### 2.2 Conversation quests: the 50/50 bar at the individual level

A **quest** is a themed structured exchange that requires **one learner and one Hôte** and completes only when both confirm:

- *Café:* order for two, handle a follow-up question, survive the upsell.
- *Librairie:* recommend a book you love; defend it against one polite objection.
- *Marché:* buy three items, get the total, talk them down on one (bargaining is licensed rudeness — superb anxiety exposure therapy).

Every quest runs on the **moitié-moitié turn engine**: the scenario alternates language halves, so the Hôte spends half of every quest as the learner (most NB francophone volunteers genuinely want polished professional English — the trade is real, per STRATEGY.md reframe 3). Symmetric vulnerability is enforced by the clock, not requested by the copy.

The pairing requirement is the region-unlock 50/50 bar, miniaturized: **nothing in the economy moves without one of each community at the table.** A learner cannot grind quests alone (AI scenarios give practice and tier-1 progress, but quest completions — the currency of map expansion — require a human Hôte). An Hôte cannot accumulate status without actually shepherding learners.

### 2.3 The graduation flywheel, in-game

Completing a venue's full learner tier unlocks **host mode** for that venue's English-side scenarios: the anglophone who finished the Café in French can now sit the counter for francophones learning English. Yesterday's demand becomes tomorrow's supply, and the map gets a second population of hosts without recruiting a soul. (The reverse quests already exist — they're the same scenarios with the language halves swapped.)

### 2.4 Anti-farming and anti-burnout

- **Daily quest caps** (both roles) — scarcity protects meaning and prevents the "I did 30 exchanges today" grind that hollows out reciprocal systems.
- **Mutual confirmation** on every completion — no unilateral farming.
- **Hôte seasons**: status is per-season with graceful emeritus states, so a volunteer can step back without losing face — the timebanking literature's burnout warning, designed for rather than hoped away.

---

## 3. The MVP cut: a themed lobby, not a game engine

The discipline: **the map is theater; the scenario engine is the product.** Everything below is scoped so the game-feel comes from art direction and one good interaction, not from engine work.

**A necessary honesty first** (repo reality): the "existing matching system" to reuse is a *data model and a set of design decisions*, not running code. The 2025 export has no backend; the matcher and MatchesPage were never committed. What genuinely carries over: the quiz schema (`proficiencyLevel`, `speakingConfidence` down to "very-low," `writingLevel`, `readingLevel`, `availableTime`, `practiceFrequency` — `client/src/pages/QuizPage.tsx`), the PIPEDA consent flow (`SignupPage.tsx`), the report-dialog and translation-toggle designs (`MessagesPage.tsx`), and the region-unlock logic (`RegionPage.tsx`). The MVP assumes a minimal fresh backend (Supabase-class: auth, profiles, quiz table, matchmaking queue, scenario session state, trust-ladder counters) under a new client.

### What v1 is

1. **One illustrated street scene** — a single SVG/Canvas painting of the block with three clickable buildings (Café, Librairie, Marché) and ambient life (a cat, smoke from a chimney, seasonal dressing). No tiles, no camera, no collision. A wandering player avatar is a v1.5 cosmetic (CSS motion along fixed paths); clicking a door is the whole traversal model.
2. **One scenario engine, three data packs.** The real build: a turn-based bilingual exchange component — phrase palette on your turn, the **moitié-moitié timer** visibly splitting the session's language halves, a "répétez plus lentement" button always on screen. Venues differ only in data: palette sets, quest definitions, shopkeeper art. Adding venue #4 is content work, not code work.
3. **AI NPC shopkeepers as the liquidity floor.** Enter a venue with no human available and the shopkeeper runs the same scenario — this is STRATEGY.md's "AI warm-up" made diegetic (rehearse with the robot barista; perform with the human), and it solves the empty-room problem that kills thin marketplaces: the town is *never* empty, so the app is useful from user #1.
4. **Market hours: batched human liquidity.** Human matchmaking concentrates into scheduled windows — Tuesday 7–8pm the Café is "open" — rather than evaporating across the week. This is the strategy's Bilingua Nights, held online; the map shows opening hours on shop doors, which players read as cozy worldbuilding rather than what it is: a liquidity batching mechanism.
5. **Matchmaking keys off the 2025 quiz** — language direction, `speakingConfidence` (match on confidence, not just competence — the strategy's promoted hero feature), venue tier.

### What v1 is not

Three venues, Fredericton only. Text only (voice is the most-wanted v2 feature and the wrongest thing to build first). No L3, no DMs, no real-world bridge, no geolocation, no minors, no photos. No tile engine, no multiplayer presence on the street, no inventory beyond pins. EN↔FR both directions from day one (host mode makes this nearly free).

---

## 4. Evaluation against the current plan

What this design does to [STRATEGY.md](STRATEGY.md), honestly.

### What it replaces

- **The open-ended chat core loop — fully, and good riddance.** STRATEGY.md already said "invert it"; map mode finishes the job. There is no open chat below L3. Structured scenarios are the stronger answer to ghosting, dating-drift, and moderation cost all at once.
- **The browse-profiles matching model.** The missing 2025 MatchesPage imagined browsing people. In map mode, *venues are the matchmaker*: you choose a context and a level, and the town brings you a partner. Choosing a place is psychologically lighter than choosing a person — nobody gets rejected by a café.
- **The abstract RegionsPage.** The map is its direct evolution — same unlock logic, same 50/50 structure, now with art direction and an economy attached.
- **The standalone "AI warm-up" feature.** Now diegetic: NPC shopkeepers. Same function (rehearsal at zero stakes), better fiction, plus a second job as cold-start liquidity.

### What it defers

- **The real-world meetup bridge** — the strategy's café tables, coasters, and public-venue protocol move to L3, post-MVP, along with their liability questions. The coaster survives as *iconography* (and as the collectible art style) until then.
- **Other cities** (the map expansion mechanic is the growth story: "when Moncton unlocks" is a better headline than a second city at launch), **voice**, and the **minors/schools channel** with its separate-instance requirement.

### What it keeps intact

- **The permission-structure thesis — strengthened.** The avatar is the ultimate L-plate; the palette is the ultimate script; the town is the ultimate alibi. Map mode is STRATEGY.md's psychology wearing pixel art.
- **The moitié-moitié** as the core ritual (now enforced by a timer), the **Hôte status economy** (now with collectible pins and storefront plaques), the **confidence-first matching**, the **safety-first posture**, and the **gift-first funding story** — arguably improved: "a cozy game where anglophone and francophone New Brunswickers practice together" is a *more* fundable sentence at Canadian Heritage's Appreciation-and-Rapprochement desk than a matching app, and a more coverable one for CBC.

### The tension, named

STRATEGY.md argued **events before code** — prove the ritual with three coffee nights before rebuilding anything. Map mode is code. The honest resolution: the AI-NPC floor changes the math *for the online product* — the app is now useful at zero liquidity, so "software will launch to an empty room" (the core argument for events-first) no longer fully applies to it. But the 90-day physical test remains the cheapest possible truth about whether *humans in Fredericton actually want this*, and its coasters, cafés and Hôtes are the map's future L3 content. **Recommendation: parallel tracks.** Run the physical pilot as designed; treat map mode as the digital pilot whose v1 (below) is small enough to build alongside it. The two share everything that matters: the ritual, the economy, the brand, the grant narrative.

### The smallest shippable version

**One venue.** The Café, alone on the street (the other two buildings visible but shuttered — "opening soon" is worldbuilding *and* roadmap). One scenario: ordering, tier 1, phrase-palette only, moitié-moitié timer on. AI shopkeeper (**Réjean**, obviously) available always; **one weekly market hour** where matchmaking goes human, seeded by personally-invited founding Hôtes. Signup, 18+ attestation, the 2025 quiz, L0→L1 tutorial, report/block. Nothing else — no quests, no pins, no map expansion, no L2. It is one screen, one interaction, both languages, and it already delivers the entire thesis: a place where your bad French is expected, scripted, time-boxed, and half of somebody else's bad English.

---

## Interactive mock

A clickable mock of the street scene, venue cards, palette exchange, trust ladder, and quest panel lives at [`design/map-mode-mock.html`](design/map-mode-mock.html) (self-contained HTML — open in any browser).
