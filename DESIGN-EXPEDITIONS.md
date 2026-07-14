# Design: Les Expéditions — the Social Choreography Layer

*Companion to [STRATEGY.md](STRATEGY.md), [DESIGN-MAP-MODE.md](DESIGN-MAP-MODE.md), and [GAME-BUILD-PLAN.md](GAME-BUILD-PLAN.md). July 2026. This document absorbs and responds to an external design prompt ("Les Portes de Fred") and defines how Bilingua's real-world play works.*

---

## The improved prompt (round five, unified)

> **Fredericton is the game board, French is the magic system, and real human connection is the reward — but the choreography is the product.** Strangers must arrive safely, know instantly what to do, *need one another* to succeed, laugh within five minutes, and leave expecting to meet again. Parties of 3–6, never 1:1; every player holds a role and partial information; correction happens only by consent; failure is funny and recoverable; **French-first, never French-punitive.** The digital game is the town's trailer, training ground, and invitation system; the expeditions are the game itself; and everything — weather, seasons, secrets, ceremonies — exists to move one more sentence of brave French across a real table.

## Assessment of the external prompt

### Adopted — genuinely better than what we had

1. **Social choreography as the frame.** Our canon engineered *permission* (the L-plate, palettes, ceremonies) but under-specified the *sequence of a first gathering*. The external prompt names the missing craft: engineer arrival, instant clarity of what to do, mutual dependence, a laugh inside five minutes, and an expectation of return. This is now a design pillar.
2. **French as the mechanic, not the subject.** Points for communication succeeding, never for grammar. Partial information — one player has the map, another the clue, another the forbidden word — makes French *load-bearing*: the group literally cannot win without talking. This is task-based language teaching wearing a party hat, and it's correct.
3. **Groups of 3–6 as the standard experience.** Kurt endorsed this directly. It supersedes any 1:1-first instinct: safer (no stranger-pair dynamics), kinder to beginners (you may listen before speaking), funnier (comedy needs an audience), resilient (a no-show doesn't kill the event). 1:1 remains a *late* trust-ladder outcome between people who met in groups, not a product surface.
4. **The correction-consent system.** The best single idea in the document. Before playing, each person picks one of four: *Correct me whenever useful / Only when meaning breaks / Help me find words, don't correct / Tonight I just want to speak.* It converts the scariest unknown in language practice — when will I be corrected, and how — into a stated contract. Adopted everywhere: in the digital game (v0.4: NPCs honour it), on printed table cards in the kit, and in every future account profile.
5. **Failure funny and recoverable.** Rescue phrases, one permitted English sentence per location, mime tokens, "telephone a francophone." Extends our no-embarrassment physics into group play. Design law restated: **French-first, never French-punitive.**
6. **Roles, rotating.** Six roles (below). Rotation is the subtle genius: fluency must not become rank.
7. **Safety as game systems, not terms-of-service.** Check-in/check-out, minimum party size (4), approved public hubs, visible meeting *times* not live person-locations, discreet "leave the quest," alcohol-free variants, no unsolicited DMs ever. All consistent with DESIGN-MAP-MODE's trust ladder; now specified for physical events.
8. **Privacy & accessibility before the map.** The v0 game already collects *nothing* (no accounts, no analytics, localStorage only) — we are ahead of the prompt's demand. Its two standards are adopted as law: (a) if location features ever exist, collect only during an active quest, never store movement history (the OPC's Tim Hortons decision is the cautionary precedent — see LEGAL-ANALYSIS.md); (b) every expedition discloses distance, duration, terrain, step-free status, seating, washrooms, sensory intensity, indoor/outdoor — printed on the kit's route card.
9. **Post-gathering artifacts.** Every expedition ends with something beautiful and shareable that reveals no one's location or identity without consent: the expedition postcard (kit includes a blank; v1 generates them). The viral loop is *play → beautiful memory → share → "what is that?" → invitation.*
10. **The pilot discipline and its five metrics.** One exceptional 45-minute quest before any platform; measure only: registration→attendance rate, completion rate, French-speaking turns per person, consent-based connection exchanges, and 14-day return registration. These replace/absorb our 90-day test's single second-conversation metric.
11. **Wolastoqey knowledge: partnership, never props.** The river's name is used respectfully and acknowledged; no sacred stories, characters, or "collectible folklore" without a real community partnership, compensated and credited. Flagged as pre-launch work with the land acknowledgment now in product.
12. **The what-not-to-build list, canonized:** no swiping, no appearance-based profiles, no unrestricted DMs, no live person-maps, no public fluency rankings, no punitive streaks, no vocabulary quizzes as the core, no speed/distance leaderboards. (Also adopted: no popularity scores — reputation recognizes *conduct*: "arrived reliably," "welcomed beginners.")

### Already ours (the prompt independently converged)

- "Guild Guides" ≈ **Hôtes** — ours are stronger: capped, ceremonial, named on venue façades, the source of invitations and level-namings.
- The fictional layer over the city ≈ **Le Carnet de la Grande Jasette**, districts, seasonal chapters.
- Citywide shared objectives ≈ our region-unlock bars ("when Moncton unlocks…"), now extended with a Fredericton progress bar for expeditions ("5,000 French interactions" style goals — v1, honest numbers only).
- Scheduled rituals ≈ market hours / Bilingua Nights; now formalized: **weekly beginner expedition (Wednesdays), monthly Grande Quête, annual finale** (the real-world Grande Jasette, mirroring the game's ending).

### One respectful disagreement

The prompt says virality will come from "visible rituals, not referral codes." For a generic app, true. For us it's a false dichotomy: **our codes are not referral codes — they are ritual objects.** Printed like coasters, finite and honest (the founding 100), handed person-to-person, *earned only by being named by an Hôte*. The invitation is the portable form of the ritual. Both stay; each strengthens the other.

### Deferred (with reasons)

- **The mobile GPS platform** — the prompt's own conclusion: build one exceptional quest first. Our pilot runs on paper, humans, and the printable kit ([site/expedition.html](site/expedition.html)).
- **Neighbourhood guilds, creator marketplaces, story packs** — v2+, after the pilot proves the loop; creators (Acadian storytellers, artists, francophone youth) must be *paid or credited partners*, per the prompt's own warning about treating native speakers as free tutors.

## The expedition system (as designed)

**The core loop (45 minutes, parties of 3–6, minimum 4 to start):**
1. Register for an expedition by time, accessibility, and comfort level (beginner / mixed / advanced; alcohol-free variants marked).
2. Meet at an approved public hub (Officers' Square gazebo is Hub #1) — group check-in with the host.
3. Draw a **role card**, receive your 3 rescue phrases and your **secret playful objective**; set your **correction-consent card** face-up on arrival.
4. Three locations, three cooperative challenges — each solvable only by combining the party's partial information, in French.
5. Finish at a partner café/pub (the venue knows you're coming); the host runs the closing ritual: the funniest phrase of the night is read aloud and inscribed on the expedition postcard.
6. Vote on the next expedition *before* separating; check-out with the host.

**The six roles (rotate every expedition):**
| Role | Holds | Secret flavour |
|---|---|---|
| **Le Guide** | the route map (only they know where location 2 is) | must never point — only describe, in French |
| **L'Archiviste** | the historical clue cards | one clue is deliberately absurd; they must sell it straight |
| **Le/La Diplomate** | the only one allowed to address venue staff/strangers | must secure one small thing (a napkin, a recommendation) |
| **L'Observateur·rice** | the spotting card (details the group must find) | one item on their card doesn't exist; the group must talk them down |
| **Le/La Trouble-fête** | a complication card to deploy once ("everyone speaks in questions for 2 minutes") | timing is theirs alone |
| **Le/La Gardien·ne des mots** | the group's 3 emergency phrases + the single permitted English sentence | decides when the English sentence is spent — guard it like a potion |

**Correction-consent (the four cards):** ✅ *Corrige-moi souvent* · ⚖️ *Seulement si on ne se comprend pas* · 🧭 *Aide-moi à trouver les mots, sans corriger* · 🕊️ *Ce soir, je veux juste parler.* Face-up on the table, changeable any time, honoured absolutely.

**Rescue mechanics:** each player's 3 rescue phrases; the party's one English sentence; the mime token (30 seconds of gesture, always legal); « Téléphone à un·e francophone » card (the host counts as one). Getting unstuck earns the *Rebond* cheer — recovery is celebrated harder than fluency.

**Measurement (the only five numbers):** registration→attendance %, completion %, French turns per person (host tallies, roughly), consent-based contact exchanges, 14-day re-registration %. Nothing else is tracked; nothing is tracked *about individuals* beyond attendance.

**The pilot:** 4 weeks, one hosted expedition per week, 30 adults total, downtown route (kit v1), beginner-weighted, one alcohol-free ending in rotation. Success threshold to proceed to v1 software: ≥60% completion, ≥25% 14-day return.

## How the digital game serves this (v0.4)

The game becomes the expedition's trailer and training ground: the **Expédition board** (gazebo + title screen) explains real-world play and links the kit; **correction-consent** debuts digitally (NPCs honour it — proof the promise is real); seasons/weather make the town feel like the real one outside the window; and the finale still says the quiet part loudly: *the sequel happens at a real table.*
