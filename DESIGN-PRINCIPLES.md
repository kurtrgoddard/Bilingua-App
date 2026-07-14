# Design Principles — Ten Games, One Table

*Companion to [STRATEGY.md](STRATEGY.md), [GAME-BUILD-PLAN.md](GAME-BUILD-PLAN.md), [DESIGN-MAP-MODE.md](DESIGN-MAP-MODE.md), and [DESIGN-EXPEDITIONS.md](DESIGN-EXPEDITIONS.md). July 2026. This is the permanent version of the founder's brief: what the ten most magnetic games ever made know about human beings, and how Bilingua Quest uses each lesson without importing the poison it usually ships with.*

---

## Préambule — le retour volontaire

The games below are studied because they are the best in history at making people come back. Most of them achieve it, at least partly, through manufactured compulsion: punitive streaks, gacha odds, fear of falling behind, the itch engineered where a want should be. **We take the return and refuse the compulsion.** Bilingua Quest may only ever create *voluntary* return — the kind built on the three pillars the self-determination literature keeps confirming:

- **Autonomy.** You chose this; you can decline anything; every quest has a graceful exit. A game about permission cannot run on coercion without lying about itself.
- **Competence.** The smallest action visibly matters — one brave sentence moves something on screen and something in the city. Never grind, never volume-for-volume's-sake.
- **Relatedness.** Real people, at real tables, remember you. The game's deepest reward is being expected somewhere on Thursday.

Every mechanic in this document must pay rent to at least one pillar, and none may tax a player's anxiety to do it. This is STRATEGY.md's founding move — pay the embarrassment bill, not the improvement bill — applied to retention. Retention bought with anxiety is churn on a delay, and it would poison the one thing the brand actually is: warm permission.

Each principle below therefore carries a **poison refusé** — the dark pattern the source game ships with, named explicitly so nobody rediscovers it in a roadmap meeting two years from now and calls it growth.

And everything hangs on one fiction, small enough to whisper and big enough to build a city inside:

> **« Fredericton a perdu ses histoires. Chaque vraie conversation en français en restaure un morceau. »**

The town went quiet — twelve years of immersion ending in silence is the real statistic wearing a story costume. Every genuine French conversation a player has, in-game or across a real table, restores a piece of the city: a window relights, a stamp lands, a page of the Carnet comes home. The player is not a student. The player is a **restaurateur d'histoires**.

---

## 1. Pokémon GO — la vraie ville est le plateau

Pokémon GO's discovery was not AR; it was that putting the game board *outside* turns every walk into a session and every landmark into a trigger. The city does the marketing, forever, for free — and the game becomes a reason to be somewhere, which is the only thing a connection project actually needs.

**Poison refusé :** live person-locations (a stalking primitive — see DESIGN-MAP-MODE.md §1.3) and the heads-down zombie walk. Our board is real, but people on it are never pins, and the phone goes away when the human arrives (Principle 10).

**Déjà en jeu :**
- The tile map *is* Fredericton — real TomTom geometry, Queen/King/Brunswick, the river, both bridges, 18 real venues in true relative positions.
- The steam tunnels under downtown (v0.5 « Les Profondeurs ») are real Fredericton legend, entered by knowing the river's true name.
- v0.6's **Mission Secrète du Jour**: the same real-life micro-mission city-wide each day, honour system — the board is the actual town, and the game trusts you to have played.

**v1 (Supabase) :**
- Honest city-wide counters — "5,000 French interactions in Fredericton" — backed by mutual confirmations, never inflated. The honest-numbers rule is absolute; a padded counter is brand arsenic.
- The Rendez-vous board goes real: venue owners post their own conversation nights.

**v2 (NB) :**
- Moncton and Saint John as locked regions with the 50/50 EN/FR unlock bars; « quand Moncton se déverrouille » is the growth campaign.
- The printed passport stamped at real venues; the Destination-NB pitch — come play the game in person.

## 2. Duolingo — la plus petite action compte

Duolingo proved that a two-minute action, made consequential, beats a two-hour ambition every time: one lesson, one visible tick, done before doubt arrives. The under-sixty-second unit is the right atom for nervous learners, because courage comes in small denominations.

**Poison refusé :** the punitive streak — the mechanic that converts a habit into a hostage situation, and whose guilt-notification voice is the exact opposite of permission. Shame has never once made a nervous learner return.

**Déjà en jeu :**
- One encounter is under a minute — three phrase choices, warmth-scored, every outcome charming; the survival phrase always present; the stamp lands immediately.
- v0.6's **Flamme de Confiance** is the anti-Duolingo streak: it *dims* when you're away and *never dies*. Coming back always finds an ember. The flame models confidence honestly — it cools, it rekindles, it is never dead.

**v1 (Supabase) :**
- The flame syncs across devices; a long-dimmed flame triggers a warm letter from a character (Principle 9), never a guilt push.
- Friend-flames (Principle 5) inherit the same physics: dim, never dead.

**v2 (NB) :**
- The atom stays the atom province-wide: one confirmed real conversation moves a region's unlock bar one honest pixel. No action inflation, no XP-for-minutes, ever.

## 3. Sky: Children of the Light — la gentillesse comme mécanique

Sky made kindness the verb: you literally give light to strangers, and altruism *is* the progression system. Translated to a language town: **fluency is a responsibility, never a superiority.** The fluent player's power is the power to welcome — and welcoming is the only thing the game will ever publicly count about them.

**Poison refusé :** kindness as grind — daily-candle farming that turns generosity into a chore quota. Hôte seasons, caps, and emeritus states (DESIGN-MAP-MODE.md §2.4) exist precisely so no one's warmth gets strip-mined.

**Déjà en jeu :**
- Hôtes are starred, capped, ceremonial — status paid in honour, not rank; invitations flow *from* being named by one.
- Correction-consent (v0.4) makes kindness a stated contract, and NPCs already honour it — proof the promise is real before any human does.
- v0.6's **pin de l'Accueil**: using « Pouvez-vous répéter plus lentement ? » three times earns « Le courage de demander ». Asking for patience is a decorated act — the beginner is never a burden.

**v1 (Supabase) :**
- The **Hôte gratitude ledger** — welcomes given, learners shepherded, first-conversations hosted — is the *only* public stat a fluent speaker gets. Never fluency, never volume, never a score a learner could feel beneath.
- Hôtes and teachers pick the weekly conversation themes for expeditions: the fluent set the table, not the bar.

**v2 (NB) :**
- The gratitude ledger travels — an Hôte d'or from Fredericton is recognized in Moncton on arrival.
- The year-end honour (the Lieutenant-Governor-adjacent award from STRATEGY.md) is awarded for welcomes, on the public record.

## 4. Stardew Valley — construire une vie, réparation visible

Stardew's loop is restoration you can *see*: the ruined community centre repaired room by room by small daily acts, a valley that visibly becomes more alive because you showed up. The player isn't grinding; they're keeping a promise to a place. That is our core premise wearing overalls.

**Poison refusé :** none to speak of — Stardew is the rare clean source. The discipline to import instead: restoration must stay *finishable in visible chunks*. A bar that never fills is a treadmill with scenery.

**Déjà en jeu :**
- v0.6's **La Ville se Rallume**: every venue stamp visibly relights part of the city, with milestone glows at 5, 10, 18, and 26 stamps. The dark town at boot is the lost-stories premise made visible; the Passeport is the repair log.
- The Carnet de la Grande Jasette (v0.3) scatters the promise across animals, NPCs, and mini-games; the finale gathers everyone at the gazebo and points at the door.

**v1 (Supabase) :**
- Restoration goes collective: the city relights from *everyone's* confirmed conversations, and the shared counter is the community-centre bulletin, honest to the digit.
- Guild venue-restoration bars (Principle 6) make the same promise at table scale.

**v2 (NB) :**
- Dark cities on the province map, each waiting on its own 50/50 bar. « La ville se rallume » becomes « la province se rallume » — the premise *is* the expansion mechanic.

## 5. Among Us — les gens sont le contenu

Among Us shipped almost no content and became a phenomenon, because the other players *were* the content — every session unrepeatable because the humans in it were. Our equivalent: the conversation across the table is the level design. The game's job is choreography — arrival, clarity, mutual dependence, a laugh inside five minutes (DESIGN-EXPEDITIONS.md).

**Poison refusé :** deception as the core verb, and open channels as the default. Our people-content runs on trust mechanics, not suspicion mechanics, and no channel opens below the trust ladder's rungs.

**Déjà en jeu :**
- Expedition roles run on partial information — Guide, Archiviste, Diplomate, Observateur·rice, Trouble-fête, Gardien·ne des mots — so the group literally cannot win without talking.
- v0.6's **Quête à Deux / Serment du Pont**: two people verify each other's real-world quest offline via deterministic name+date codes — no server, no chat, just two humans keeping a small oath on a bridge.

**v1 (Supabase) :**
- **Friend-flames**: two flames stoked only by actually meeting — a relationship rendered as shared warmth, never as a streak-pressure dyad or a leaderboard pair.
- The invite chain (« qui t'a invité·e ? », recorded since v0.2) matures into the trust graph that seeds matching.

**v2 (NB) :**
- Inter-city quêtes à deux: a Fredericton player and a Moncton player complete a paired mission the same day, sight unseen, verified by the same offline code ritual.

## 6. Clash of Clans — l'effort individuel renforce un groupe nommé

Clash discovered that people will do for a *named clan* what they would never do for themselves: the donation, the 6 a.m. war attack, the not-wanting-to-let-them-down. Strip the war, keep the structure: individual effort, visibly deposited into a small group with a name and a home address.

**Poison refusé :** inter-group war and league rankings — the machinery that turns belonging into anxiety and teammates into supervisors. Tables are homes, not teams in a league. No table-vs-table standings, ever.

**Déjà en jeu (in embryo) :**
- The invitation economy already makes every player someone's guest; per-venue quests already attach effort to a named place (Jonnie Java, the Boyce, Dolan's).
- v0.6's Rendez-vous du Jeudi gives one named place a recurring congregation to belong to.

**v1 (Supabase) :**
- Real named guilds anchored to real venues — **« La Table de Jonnie Java »** — each with a venue-restoration bar visible to its members: *your* conversation this week moved *our* table's bar.
- Membership small, named, joinable by invitation or by showing up Thursday; conduct-reputation only ("arrived reliably," "welcomed beginners").

**v2 (NB) :**
- Tables federate by city; a city's relighting is the sum of its tables. The only rivalry permitted is the civic one already in STRATEGY.md — Moncton vs. Fredericton unlock bars, printable in a newspaper.

## 7. Fortnite — le jeu comme lieu culturel

Fortnite's deepest trick wasn't the battle royale; it was becoming a *venue* — the Travis Scott concert, the map event that happened once, live, and never again. "You had to be there" is the strongest sentence in social gaming, because it converts a game into a place where culture happens. Ours has an address and a postal code.

**Poison refusé :** FOMO-priced scarcity — the rotating item shop that monetizes the fear of missing out. Our scarcity is *temporal and real* (Thursday actually ends at 20h; the Grande Quête really is one night) and never costs money or punishes absence with loss.

**Déjà en jeu :**
- v0.6's **Rendez-vous du Jeudi**: Dolan's Pub, Thursdays 18h–20h, real moitié-moitié tables — the venue glows in-game with a live countdown. The game is the trailer; Thursday is the show. It happens whether you come or not, which is precisely why you come.

**v1 (Supabase) :**
- The monthly **Grande Quête**: one night, one in-game happening synchronized with the real gathering, gone by morning — the town's shared "you had to be there."
- RSVP from inside the game; the plain-HTML event page keeps the non-game path open (accessibility law, LEGAL-ANALYSIS.md).

**v2 (NB) :**
- The annual Grande Jasette as the province's event — the real-world finale the game's ending points at, staged in a different city each year, Fête nationale de l'Acadie adjacent.

## 8. Roblox — les joueurs deviennent auteurs

Roblox's engine is authorship: players stay because they build, and builders bring their audiences with them. A civic game about restoring a city's stories should obviously let the citizens write some — the town's memory belongs to the town.

**Poison refusé :** the exploitative creator economy — unpaid labour laundered as opportunity, and unreviewed user content shipped to strangers. Every quest is editorially reviewed for French quality and safety; every author is credited permanently; the moment creation is a job, it is a *paid* one.

**Déjà en jeu :**
- v0.6's **Proposer une Quête**: a Netlify submission form and *permanent author credits* in-game — seeded tonight with two founding-Hôte credits, so the first player to submit sees real names already on the wall. Authorship starts as a gift with a byline.

**v1 (Supabase) :**
- The creator pipeline: submission → French-quality and safety review → live in-game quest with a permanent byline. Review is editorial, not gatekeeping theatre — every rejection carries a reason and an invitation to resubmit.
- Hôte- and teacher-authored expedition themes (Principle 3) flow through the same credited pipeline.

**v2 (NB) :**
- Paid Acadian storyteller partners: creators from the communities whose language this is are *commissioned*, credited, and compensated — per the principle already in canon for Wolastoqey knowledge: partnership, never props.

## 9. Genshin Impact — l'attachement au lieu et aux personnages (sans gacha, jamais)

Genshin's world earns real love — regions with musical identities, characters players genuinely miss when away — and then monetizes that love through randomized gambling. We take the lesson whole and refuse the business model whole: **attachment is sacred; NO gacha, no loot boxes, no randomized anything-for-money, no banner, no pity counter, ever.** Love is not a slot machine's lever.

**Déjà en jeu :**
- The town is drawn with affection for the real one: the green walking bridge, market Saturdays, FROSTival snow, the chocolatine-war twins, the deer in the Devon woods that approach only the patient.
- **Alderic**, keeper of the steam tunnels (v0.5), who opens the old grate for whoever knows the river's true name — the first character built to be missed.

**v1 (Supabase) :**
- Episodic **letters from recurring characters**: Alderic writes when the river ice breaks up; the Boyce criers write in fiddlehead season; a long-dimmed flame earns a gentle note, not a notification. Characters remember your name and your last brave sentence.
- Letters arrive on the *world's* schedule (seasons, festivals, thaw), never on a re-engagement algorithm's.

**v2 (NB) :**
- Each city gets its own cast and register — Moncton's Chiac has its own keeper; Saint John's harbour has its own crier — so expansion means new *people to miss*, not new content to consume.

## 10. Pikmin Bloom — l'app accompagne la vie

Pikmin Bloom's quiet genius: it doesn't ask for your attention, it decorates what you were already doing — the walk happens, and flowers bloom behind you. Our version is stricter, because our real event is a conversation: **the phone goes away during the conversation.** The app's job is before (courage) and after (memory) — never during.

**Poison refusé :** the attention tax — any mechanic that pulls eyes to the screen while a human is talking. The app's proudest state is face-down on the table. If a feature competes with the conversation, the conversation wins and the feature is cut.

**Déjà en jeu :**
- The Mission Secrète is completed out in the world with the phone pocketed, honour system — the game asks afterward, and believes you.
- v0.6's **Carte Postale**: a shareable canvas postcard carrying the player's last *real* French phrase. The walk happened; here is the flower.

**v1 (Supabase) :**
- Expedition **companion mode**: check in at the hub, the screen goes deliberately dark for the duration, and the postcard generates itself at check-out. Presence measured in exactly two taps.

**v2 (NB) :**
- The printed passport is companion mode with no battery at all — the real stamp at the real counter, acknowledged by the game later, on your word.

---

## La table des composantes essentielles

Every durable game ships these ten components. Ours, and where each stands:

| Composante | Chez nous | Statut |
|---|---|---|
| **Identity fantasy** | Restaurateur·rice des histoires de Fredericton; the avatar as L-plate | Shipped (v0) |
| **<60s core loop** | One warmth-scored encounter → one stamp; no failure state exists | Shipped (v0) |
| **Three time layers** | Daily Mission Secrète · weekly Rendez-vous du Jeudi · monthly Grande Quête | Daily + weekly **v0.6 tonight**; monthly v1 |
| **Visible progress** | La Ville se Rallume (5/10/18/26); Passeport; Carnet pages | **v0.6 tonight** |
| **Social interdependence** | Quête à Deux; expedition partial-information roles; guild restoration bars | **v0.6 tonight**; guilds v1 |
| **Ritual & simultaneity** | Same secret mission city-wide; Thursday glow + countdown; one-night happenings | **v0.6 tonight**; happenings v1 |
| **Shareable evidence** | Carte Postale with your last real French phrase; expedition postcards | **v0.6 tonight** |
| **Local scarcity** | Invitation economy (3 codes, the founding 100); capped Hôte seats | Shipped (v0.2) |
| **Player authorship** | Proposer une Quête + permanent bylines; creator pipeline; paid partners | **v0.6 tonight**; pipeline v1; partners v2 |
| **Trust & graceful failure** | No-fail conversations; correction-consent; Flamme that dims but never dies; the Rebond cheer | Shipped + **v0.6 tonight** |

---

## Garde-fous (non négociables)

The what-not-to-build list (DESIGN-EXPEDITIONS.md) plus this document's refusals, restated as law:

1. **No ranking by French ability, ever** — and no ranking by popularity. Reputation recognizes conduct only ("arrived reliably," "welcomed beginners").
2. **No punitive streaks.** The flame dims; it never dies; its dimming is never messaged as guilt.
3. **No pay-to-win, no gacha,** no loot boxes, no purchasable status of any kind. Nothing in either currency is tradeable, giftable, or buyable.
4. **Honest numbers only.** Every counter, bar, and scarcity figure on screen is true. One fake "2 spots left" poisons the entire warm-permission brand.
5. **18+**, attested, until the fully separate educator-supervised instance exists (DESIGN-MAP-MODE.md §1.4). Never a mixed pool with controls; separate worlds.
6. **Public places only** for all real-world play; check-in/check-out with a host; minimum party sizes; visible meeting *times*, never live person-locations.
7. **No penalty for declining conversation.** Every quest has a graceful exit; « ce soir, je veux juste écouter » is always a legal move, honoured absolutely.
8. **Accessibility information on every event** — distance, duration, terrain, step-free status, seating, washrooms, sensory intensity, indoor/outdoor — plus a plain-HTML path to every real-world listing.
9. **The beginner is never a burden.** The Accueil economy decorates asking for patience; the gratitude ledger decorates giving it. Both sides of the switch, disarmed by design.

---

## La boucle virale, dessinée en texte

```
  quest → you need another person → meet in a public place
     ↑                                        ↓
  they join                        memorable real interaction
     ↑                                        ↓
  « c'est quoi, ça ? » ← share ← collectible / story / postcard
```

One turn of the wheel: a quest requires a second human; the meeting happens somewhere public and choreographed; it produces something worth keeping — a stamp, a relit window, a postcard carrying a real sentence; the keepsake is beautiful enough to share; the share provokes the question; the question is answered with an invitation.

**And the invitation must benefit the inviter — already true today:** being named by an Hôte grants three codes of your own; the invite chain (« qui t'a invité·e ? ») is recorded in the Passeport; every invitation spent is social proof with the giver's name attached. Nothing about the loop is extractive — each hop is a gift someone was glad to make — which is why it can afford to be honest at every station. The loop spreads exactly the way confidence does: person to person, by recognition.

*Le jeu est la porte. La table est la maison.*
