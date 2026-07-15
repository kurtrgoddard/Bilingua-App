# Design: Les Rencontres — the Connection Layer

*Companion to [STRATEGY.md](STRATEGY.md), [DESIGN-PRINCIPLES.md](DESIGN-PRINCIPLES.md), [DESIGN-MAP-MODE.md](DESIGN-MAP-MODE.md), and [DESIGN-EXPEDITIONS.md](DESIGN-EXPEDITIONS.md). July 2026. The question this document owns: **comment deux inconnus se trouvent** — how two strangers who both want the same brave conversation actually find each other's table. Everything else in canon assumes this happens; this is the design for making it happen without betraying a single garde-fou.*

> **« Le jeu est la porte. La table est la maison. Ce document est le corridor. »**

---

## 1. La vérité actuelle

v0.6 has **no live layer, on purpose.** No accounts, no server, no chat, no presence. Two strangers currently find each other through exactly four mechanisms, all of them **ritual simultaneity** — the game tells everyone the same time and place, and the finding takes care of itself:

- **Le Rendez-vous du Jeudi** — Dolan's Pub, Thursdays 18h–20h; the venue glows in-game with a countdown. You don't find a person; you find a table that exists whether you come or not.
- **La Mission Secrète du Jour** — the same real-life micro-mission city-wide each day, honour system. Two players who cross paths mid-mission recognize each other the way early geocachers did: by the look.
- **Les Expéditions** — hosted parties of 3–6, registered in advance, choreographed arrival (DESIGN-EXPEDITIONS). The host is the matchmaker.
- **La Quête à Deux / le Serment du Pont** — deterministic name+date codes verified in person. It doesn't *find* you a partner; it proves you met the one you brought.

Plus the invitation economy underneath all four: three codes each, hand-passed, « qui t'a invité·e ? » recorded. Every player arrives already connected to one human.

**Why this was right for launch.** Three reasons, in canon order:

- *Safety.* With zero backend there is nothing to moderate, nothing to leak, and no contact surface for the failure modes the trust ladder exists to prevent. The safest DM system is the one that does not exist.
- *Honesty.* A chat room with eleven players is a ghost town, and a ghost town says "this is dead" louder than any counter can say "this is alive." Ritual simultaneity is the only social architecture that works at N=11, because a ritual is not embarrassed by small attendance — Thursday happens regardless.
- *Zero backend.* GitHub Pages holds no state, and the Serment du Pont pattern proved we didn't need state to make two humans keep a small oath on a bridge.

**Why it is no longer sufficient.** The person who misses Thursday has no thread to pull until next Thursday. The player in a café on a Sunday afternoon — French warmed up, courage briefly available — has nowhere to point it. The game's entire psychology turns on the *moment* of willingness to communicate (STRATEGY.md's MacIntyre argument), and we currently waste every such moment that falls outside a ritual window. Worse: players are already planning meetups anyway, in group texts we can't see and didn't design for safety. When your players build the missing feature themselves, the feature is validated and you are late. The gap, named precisely: **there is no way to announce a planned table, and no way to discover one.**

---

## 2. La doctrine

Connection principles, each one load-bearing. Any future rencontres feature that violates one of these is cut, whatever its engagement numbers promise.

1. **Rituals over feeds.** A time and a place beat a chat room, always. Feeds require constant content to feel alive; rituals require only a clock. Every connection surface we build is shaped like an event, never like a stream — the unit is *a table at 18h*, not *a message at any time*.
2. **Public places only, structurally.** The board cannot express a private address. Locations come from the game's real-venue list and approved public hubs; residential addresses are refused at curation and, in v1, unexpressable by schema. This is garde-fou #6 enforced by architecture, not by moderation.
3. **No profiles, no photos, no swiping — ever.** This is not a dating app, and it will not become one by accretion — state it once, in writing, here. Nobody browses people. You choose a *table* — a time, a place, a theme — and the humans at it are revealed the way strangers always have been: by showing up. Choosing a place is psychologically lighter than choosing a person; nobody gets rejected by a café (DESIGN-MAP-MODE §4).
4. **Le niveau est une bienvenue, jamais un rang.** A table may say « niveau bienvenu : débutant·e » the way a bike trail posts its grade — so the nervous know they belong, never so anyone can be sorted. « Tous les niveaux » is the house favourite and the form's default. No table may gate upward; filters welcome downward only.
5. **L'Accueil est l'algorithme.** Our matchmaking engine is not software; it is the Hôte economy. Fluent speakers are decorated for exactly one thing — welcoming — so newcomers are pulled toward tables by *people* whose visible status depends on their warmth. Sky's lesson (DESIGN-PRINCIPLES §3): the software's job is to make the welcomers findable, then get out of the way.
6. **Opt-in gradients.** Exposure escalates only by choice, never by default: *showing up to a ritual* (no announcement, no commitment) < *proposing a table* (a plan with your first name held by la Régie) < *v1 matched pairing* (a named human expects you, specifically). Every rung is optional; no rung is required for full enjoyment of the game. « Ce soir, je veux juste écouter » remains a legal move at every altitude.

---

## 3. v0.7 — Le Tableau (shipping now)

**The board:** [`site/rencontres.html`](site/rencontres.html) rendering a curated [`site/rendezvous.json`](site/rendezvous.json). Static, plain HTML path included, zero backend — the JSON file *is* the database, hand-edited via la Régie.

**The entry schema** (what a table is allowed to be, and nothing more):

| Champ | Contenu | Ce qu'il ne contient jamais |
|---|---|---|
| `lieu` + `quartier` | A public venue or hub, by name | An address that is anyone's home |
| `date` + `heure` | When (rituals like Thursday carry no date — they recur) | — |
| `titre_fr` / `titre_en` + notes | The table's theme, FR-first with EN always present | Anyone's contact info |
| `niveau` | Welcome-badge: `tous` / `debutant` / etc. | A requirement |
| `format` | `ritual` · `table` · `expedition` | — |
| `places` | Room size (3–6, expedition physics) | A list of who claimed them |

**How a table gets on the board.** Any player proposes via the form on the page (Netlify Forms on the mirror; the standard mailto fallback elsewhere — the pattern at the bottom of site/index.html). The form asks: name, email, lieu, date, heure, niveau bienvenu, and a free-text description. Name and email stay with la Régie and **never render on the board** — a proposed table is a plan made public, not a person made public. A human reviews each proposal for the only three things that matter: public place, real date, welcoming copy. Approved tables land in the JSON; declines get a reason and an invitation to resubmit, same contract as Proposer une Quête.

**Wizard-of-Oz, and honest about it.** The board is hand-curated and the page says so. At current scale a human editor is not a compromise — it is *better* than software (the Season Zero rule from DESIGN-ENTRE §7: real code for anything deterministic, a human named Kurt for anything that pretends to be a server). The Rendez-vous du Jeudi ships as the board's permanent first entry, so the board is never empty on day one — one true ritual, not a padded listing.

**The board's voice**, so nobody has to reinvent it per page:

> « Le jeu te donne le quand et le où ; toi, tu apportes toi-même. »
> *(The game gives you the when and the where; you bring yourself.)*

Tone rules for every entry note: FR-first with the EN line always present; warm, specific, and small (« une table tranquille au fond »); the beginner explicitly welcome in the copy, not just the badge; never a promise about who will be there, because the board cannot keep it.

**Le salon virtuel (the reserved slot).** The page carries a salon slot that stays dark until there are roughly **30 weekly actives** — below that, a text room is a ghost town, and we refuse to open one; the trigger *is* the anti-ghost-town rule. When it opens, it is one moderated space — a single Discord server or WhatsApp group, whichever the actual players already use — with house rules posted at the door and enforced:

- 18+, same attestation culture as everything else;
- plans in **public places only** — never residential addresses, in any channel;
- FR-first, EN always légal; welcoming to every level; correction-consent culture applies in text;
- display names matching in-game names; no photos of people; no soliciting DMs (« on se parle à table »);
- a human moderator awake before the room is open; the founder moderates until a co-host exists (the burnout gate from DESIGN-ENTRE applies here too).

The salon exists for exactly two jobs — logistics for posted tables, and the after-glow of real meetings — and it lives explicitly *outside* the game. **The game itself still gets no chat, at any scale.** The in-game world stays the trailer and the training ground precisely because it cannot become the venue for the failure modes open channels always grow. The salon is an annex we can moderate, close, or move without touching canon; the game is a promise we cannot break.

**What the board deliberately cannot do — and why that is the feature:**

- **No RSVPs.** You cannot claim a seat.
- **No attendee lists.** You cannot know who is coming — only that the table exists.
- **No interest counts,** no « 3 people are going », no signals to interpret or perform for.

This is not a missing feature; it is the design. A table with an attendee list creates **social debt** on both sides: the proposer refreshes the list and pre-tastes an empty room; the joiner who RSVPs and bails has committed a tiny betrayal with their name on it; the shy player sees four strangers listed and stays home. A table with *no* list inherits Thursday's physics: it happens whether you come or not, which is precisely why you can afford to come. The proposer's only promise is « j'y serai », and the board says the honest sentence out loud: **« Tu ne sauras pas qui vient. C'est ça, le jeu. »** Corollary, recorded for the roadmap meeting two years from now: RSVP counts are also fake-scarcity bait and a popularity score in embryo. Refused on all three grounds.

---

## 4. v1 — La Présence (Supabase era — spec only; nothing here has a date)

Accounts arrive on the trust ladder from DESIGN-MAP-MODE §1.1, cited precisely and inherited whole:

| Rung | Unlocked by | Rencontres surfaces it opens |
|---|---|---|
| **L0 — Villager** | Signup + 18+ attestation | See the board and the lanterns; contact no human |
| **L1 — Regular** | Tutorial scenario with the AI shopkeeper | Post a table (with capacity); attend anything |
| **L2 — Familiar face** | 3 completed structured exchanges with the *same* partner, both confirming each | Guided free-text in scenarios (ladder's own grant); eligible for Hôte-mediated pairing |
| **L3 — Friend** | Sustained L2 history + mutual opt-in | Free chat; the full real-world bridge |

Escalation stays **per-pair, never per-account** — being L2 with Marie-Claude gives you nothing with anyone else. The rencontres layer adds surfaces *on top of* these rungs; it never adds a shortcut through them.

**La présence : « des lanternes, pas des points GPS. »** The only presence primitive is the venue-level lantern count: « 3 citoyen·ne·s à Jonnie Java cette heure. » Aggregate, hourly-bucketed, venue-granular, anonymous, opt-in. Never who, never where-exactly, never a moving dot — "X is in the café right now" is a stalking primitive (DESIGN-MAP-MODE §1.3) and does not exist at any rung. Lanterns answer the only question the doctrine permits: *is the town warm tonight?* And lanterns obey honest numbers: a venue with nobody shows no lantern, never a padded glow.

**Le Tableau, en jeu.** Table-posting moves inside the game at L1+, keeping the v0.7 schema: capacity is a room-size (3–6 — a posted 1:1 table does not exist as a type; pairs come from the ladder, not the board), and the board still shows no names of intenders. **Hôte-hosted tables get priority display** — pinned above the fold, marked with the Hôte's star. The welcomers are findable first; that is the Accueil algorithm doing its one job.

**Buddy re-connect.** After a completed Serment à Deux, both players may — each, separately, revocably — opt in to have the other's *next posted table* highlighted on their own board. Not a friend list, not a follow, not a DM: one soft thread between two people who provably met, persisting only through **mutual** consent and dying silently the moment either withdraws. The relationship belongs to the two humans; the game only remembers that a bridge was once crossed, and only for as long as both want it remembered.

**Matched pairing** — the beginner+fluent confidence-matched introduction — exists only at **L2+**, only with **Hôte mediation**: the Hôte proposes the pairing to each side privately; either declines without the other ever knowing; the first meeting is at a posted public table, never a private arrangement. No Hôte bench, no pairing feature — it ships dark until the bench exists (§6).

**Report and block from day one** of accounts, on every surface — table cards, lantern views, buddy threads. Blocking stays silent and bilateral (DESIGN-MAP-MODE §1.4); reports auto-attach whatever structured context exists.

**Interdit pour toujours** — the list that outlives every roadmap:

- DMs between strangers below L2, under any feature name;
- photos of people, anywhere in the product;
- exact live location, individual location history, or any presence primitive finer than the venue-hour lantern;
- read receipts, « seen », typing indicators, last-active timestamps — every mechanic that converts attention into debt.

And the standing laws breathe underneath: no rankings, no popularity scores, no punitive anything, no fake scarcity, no minors.

---

## 5. Les métriques honnêtes

The layer works if strangers meet. Four numbers, all countable without tracking anything about individuals beyond what the game already keeps:

| Métrique | Ce qu'elle prouve | Source |
|---|---|---|
| **Tables affichées / semaine** | The board is trusted with real plans | `rendezvous.json` history — count the diffs |
| **Serments entre inconnus** | Two strangers actually met — the game's *only* proof-of-meeting, mutually confirmed, unfakeable by one side | Serment à Deux completions between players who share no invite-chain edge |
| **Les quatre phrases cultes** | The meetings mattered | Collected unprompted from closing postcards (DESIGN-ENTRE §7): « I met someone interesting » · « I need to know what happens to this object » · « My version of the story is different from yours » · « You should come with me next Thursday » |
| **Zéro incident** | The safety architecture holds | Reports log + host debriefs; the streak is published because it is true — and the day it breaks, the postmortem is published too |

No DAU, no session length, no message volume, no salon activity graphs — a busy chat room above empty tables is failure wearing engagement's clothes. The north-star sentence stays sentence four: *you should come with me next Thursday.*

---

## 6. La séquence

Build order with triggers, not dates. Each stage ships only when its trigger is true, and each stage is the cheapest honest test of the next.

1. **Maintenant — Le Tableau.** `rencontres.html` + curated `rendezvous.json`; Wizard-of-Oz curation; no RSVPs; Thursday as the permanent first entry. Cost: one page and an editor's eye. Proves: players will announce tables at all.
2. **~30 actifs hebdomadaires — le salon virtuel.** One moderated room, house rules above, founder-moderated until a co-host exists. Opening earlier would manufacture the ghost town the doctrine forbids. Proves: this community can hold a text space without growing the failure modes.
3. **~100 actifs hebdomadaires, ou le jour où le Tableau déborde la Régie** — whichever comes first — **la Présence (Supabase).** Accounts on the trust ladder, lanterns, in-game table-posting with capacity, buddy re-connect, report/block from day one. The board outgrowing one human's hand-curation is itself the demand signal that justifies a backend; before that signal, a database is a solution commuting to a problem.
4. **Après le banc d'Hôtes — le jumelage.** Matched pairing unlocks only when the vetted Hôte bench exists — onboarded humans, capped seats, seasons with emeritus states, per DESIGN-EXPEDITIONS and DESIGN-MAP-MODE §2 — because pairing without a welcoming human in the middle is a dating app with homework, and §2.3 already said what we are not.

Each trigger can also *fail*, and that information is kept: if the board stays empty for a season, the town has told us that rituals suffice at this scale, and the corridor returns to the walls without shame. Honest numbers include the ones that say *not yet*.

---

*Deux inconnus ne se trouvent pas par magie. Ils se trouvent parce qu'une table existait, qu'une lanterne brûlait, et que quelqu'un dont c'est l'honneur de dire bienvenue l'a dit. Le logiciel n'est que le corridor entre la porte et la maison.*
