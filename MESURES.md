# Les Mesures — Comment on sait que ça marche / How we know it is working

*Companion to [DESIGN-PRINCIPLES.md](DESIGN-PRINCIPLES.md), [OPERATIONS.md](OPERATIONS.md), [DESIGN-EXPEDITIONS.md](DESIGN-EXPEDITIONS.md), and [DESIGN-RENCONTRES.md](DESIGN-RENCONTRES.md). July 2026. This is the honest measurement framework: the signals that tell Kurt the town is alive, gathered without breaking the one promise the whole thing rests on. OPERATIONS.md §5 is the pocket version; this is the reasoning underneath it. If any procedure here conflicts with a garde-fou in DESIGN-PRINCIPLES.md, the garde-fou wins and this file gets edited.*

> **« On ne mesure pas les gens. On écoute la ville. »**
> *(We do not measure people. We listen to the town.)*

---

## 1. La ligne rouge — le refus comme fonctionnalité

The site says it out loud, on the page a stranger reads before they trust us: **no accounts, no tracking — the game saves on your own device only.** That sentence is not marketing. It is the load-bearing wall. A game about *permission* cannot surveil the people it asks to be brave, because the moment it does, the brand is a lie and the nervous learner — who can smell a lie faster than anyone, because they have been sold to before — walks away.

So the ligne rouge is this: **every number we keep is either volunteered, or counted in the real world, or computed from public math.** Never a script watching a player. Never a beacon phoning home. Never a cookie, a pixel, a fingerprint, a session recording. There is no analytics on the game, the site, or the postcards, and there never will be — garde-fou #4, OPERATIONS §5, restated as measurement law.

This is not a constraint we tolerate. It is the thing that makes the measurement *trustworthy* — including to ourselves. A consented number cannot be inflated without a person noticing they were counted; a surveilled number can be padded in a dashboard nobody audits. **The refusal is a feature: it forces every metric to be honest, because the only numbers we can see are the ones a human chose to give or a host tallied by hand.** We would rather live without a metric than buy it with a tracker. Most of this document is about how much you can actually learn under that rule. The answer is: nearly everything that matters, and none of what doesn't.

---

## 2. L'étoile du nord — le pont francophone ↔ apprenant·e

Every other question is downstream of one: **are the two communities actually meeting?** Francophones and learners, at the same table — that is the mission (DESIGN-EXPEDITIONS fluency-as-responsibility, the pin de l'Accueil, the Hôte gratitude ledger). A game full of learners practicing on each other has failed quietly; a game where a francophone and an anglophone share a laugh in French has done the one thing nothing else in Fredericton is doing.

How to read it, using only what we already keep:

- **Le partage du parcours.** On naming, players may self-ID — `francophone` 🌟, `apprenant·e` 🌱, `entre les deux` 🌗, or `je préfère ne pas dire` 🕊️ (`game/index.html` ~line 2287). It is voluntary, local-only, unlocks nothing, and reminds each side of its role (the Accueil is yours to give / asking for slowness is brave). We **never** read individual saves — but at real tables and on the waitlist form (which asks the same question), the *aggregate split* is legible: of the people showing up, roughly how many are francophone, how many learning, how many between. A healthy bridge is not 100% learners. If it skews all-learner, the étoile is dim and the fix is §7 of BUZZ.md — seed the francophone door harder.
- **Les têtes à l'expédition.** The host sees who is in the room. A count of « combien de francophones ce soir » is the bridge made countable, on paper, nothing about individuals beyond attendance (DESIGN-EXPEDITIONS §measurement).
- **Qui accueille qui, via l'Accueil.** The gratitude ledger (v1) counts welcomes given, first-conversations hosted, learners shepherded — the *only* public stat a fluent speaker ever gets (DESIGN-PRINCIPLES §3). Until v1, the host tallies it by memory the same night. A welcome logged is a bridge-crossing witnessed: it means a francophone chose to make a learner feel at home, which is the entire product wearing its work clothes.

The étoile du nord is not a dashboard tile. It is a question you ask every Thursday: *did the two sides meet tonight, and did someone whose honour it is to say welcome, say it?*

**Reading the split, honestly.** The parcours question offers four answers, and the fourth — `je préfère ne pas dire` 🕊️ — is not noise to be discarded; it is people exercising the autonomy the game promised, and a healthy share of *prefer-not-to-say* is a sign the opt-out path is real and not punished. So never compute the bridge as a percentage of a total that pretends everyone answered. Read it as three visible groups (francophone / learner / between) plus a respected silence. The drift to watch is not « too many prefer-not-to-say » — it is « zero francophones showed up », which no privacy setting can hide from a host counting heads.

---

## 3. La psychologie, rendue observable — SDT sans score

Self-Determination Theory is the backbone (DESIGN-PRINCIPLES préambule): voluntary return is built on autonomy, competence, relatedness. You cannot measure those with a score without corrupting them into one. So we don't score them — we watch for **concrete signals** each pillar throws off in *this* game:

| Pilier | Ce qu'on observe (signal, jamais score) | Où ça vit |
|---|---|---|
| **Autonomie** | Players skip quests freely and still return; « ce soir, je veux juste écouter » gets used and the person comes back anyway; consent-card choices vary (not everyone picks *corrige-moi souvent*). Autonomy is healthy when *declining is common and return is unaffected.* | Graceful-exit usage; consent-card spread at tables |
| **Compétence** | The Flamme de Confiance rekindles after dimming; a player's self-reported confidence tier rises over weeks; the survival phrase (« pouvez-vous répéter plus lentement ? ») gets *used*, and asking is reframed as brave via the pin de l'Accueil. Competence shows as *the smallest action visibly mattering* — one stamp, one relit window. | Flame re-ignition; « Le courage de demander » pin earned; stamp milestones 5/10/18/25 |
| **Relatedness** | Serment à Deux / du Pont completions between people who share no invite-chain edge (two strangers who actually met); return-to-Thursday across consecutive weeks; the buddy re-connect thread kept alive by *both* sides (v1). Relatedness is *being expected somewhere on Thursday.* | Serment completions; 14-day re-registration; recurring faces at Dolan's |

None of these is a number a player is ranked by. Each is a **signal you notice**, most of them countable on paper the same night, none requiring a tracker. When several signals point the same way — flames rekindling, serments between strangers rising, declining staying common and return staying high — the psychology is working. When they diverge (return high but every serment is between people already linked), you have learned something specific: the town is warm but closed, and the fix is seeding, not features.

---

## 4. Les quatre phrases — l'étoile qualitative

The dashboard that matters most has no numbers on it. It is four sentences, the cult-classic north-star (DESIGN-EXPEDITIONS §10, OPERATIONS §5, DESIGN-RENCONTRES §5), each one heard *unprompted* worth more than any counter:

1. **« I met someone interesting. »** — relatedness landed.
2. **« I need to know what happens to this object. »** — the world earned real attachment (the relics, the Carnet, the Écarts).
3. **« My version of the story is different from yours. »** — the divergence mechanic worked; two people compared and it mattered.
4. **« You should come with me next Thursday. »** — the whole loop closed; the north-star of the north-stars.

**How to collect them without leading:** the closing Carte Postale asks only « **une phrase sur ce soir** » — one open line, no prompt, no menu (DESIGN-ENTRE §7). You never ask « did you meet someone interesting? » — that manufactures the answer and poisons the signal. You listen for which archetype *appears on its own*, and you tally which of the four showed up this week. Target (DESIGN-ENTRE §7): all four appear by week three; sentence four appears weekly. A week where sentence four goes missing is a louder alarm than any drop in a count — it means people had a nice time and are not bringing anyone. That is the metric that tells you whether the loop spins.

---

## 5. Les chiffres qui comptent — le tunnel honnête

Numbers we *do* keep, all gathered outside the game or volunteered, all reconcilable by hand:

**Le tunnel / the funnel** — read as a sequence of honest drop-offs, never as a growth curve to juice:

```
  waitlist  →  named (entered the game)  →  first real conversation
      →  first Serment (met someone)  →  return (came back to Thursday)
```

- **Waitlist** — Netlify form counts plus the mailto fallbacks in the inbox; one funnel split across two hosts, count both or undercount (OPERATIONS §5, §7.5).
- **Named** — codes redeemed is a soft proxy (codes are a ritual, not a lock — OPERATIONS §3), so lean on real signals: people at tables, saves that reach the parcours screen.
- **First real conversation** — host-witnessed at Thursday / expeditions; the first stamp of the night.
- **First Serment** — Serment à Deux completions, the game's *only* unfakeable proof-of-meeting (both sides confirm; one side cannot fake it — DESIGN-RENCONTRES §5).
- **Return** — 14-day re-registration, the pilot's key survival number.

**Codes: issued vs. passed vs. reconciled.** Batches printed at `/atelier.html` vs. photographed sheets — if the two ever disagree, stop printing until they don't (OPERATIONS §3). This is how « the founding 100 » stays a true statement about physical objects. Codes issued vs. codes actually spent (a name attached) tells you whether the invitation economy is *flowing* or just *printing*.

**Expeditions: held vs. attended.** The five pilot metrics, host-tallied on paper (DESIGN-EXPEDITIONS §measurement): registration→attendance %, completion %, rough French turns per person, consent-based contact exchanges, 14-day re-registration. Pilot bar to proceed to v1 software: **≥60% completion, ≥25% 14-day return.**

**Les chiffres fixes** — the numbers that are *supposed* to stay put, and whose stability is itself the signal:

- **3** codes per named citizen. Not 4, not "earn more." If this ever inflates, the economy has been financialized.
- **100** founding invitations. The batch is finite by design; the count is an honesty claim, not a target to beat.
- **Milestones 5 / 10 / 18 / 25** — La Ville se Rallume glows; restoration finishable in visible chunks (DESIGN-PRINCIPLES §4). 25 = the whole downtown relit, the last décor milestone in v0.6 (`RESTORE_MAX` = 17 venues + 8 Carnet pages, `game/index.html` ~line 961). la Gare becomes a 26th milestone only when l'Entre ships (DESIGN-ENTRE « La Restauration »).
- **Cap 12, floor 0** — La Couture per season. If only seven moments deserve the city, seven get sewn in. Never padded (OPERATIONS §2, DESIGN-ENTRE §6.2).

---

## 6. Ce qu'on refuse de mesurer — la liste explicite

Written down so nobody rediscovers one of these in a roadmap meeting and calls it insight:

1. **Individual fluency, ranked.** No leaderboard by French ability, no per-player skill score, no « niveau » that sorts people against each other (garde-fou #1). Level is a welcome, never a rank (DESIGN-RENCONTRES §2.4). A learner must never open the game and feel measured.
2. **Popularity.** No follower counts, no RSVP tallies, no « 3 people are going », no most-liked table. RSVP counts are fake-scarcity bait and a popularity score in embryo — refused on both grounds (DESIGN-RENCONTRES §3).
3. **Live location or movement history.** Never a moving dot, never « X is at the café right now », never stored travel. The venue-hour lantern (aggregate, anonymous, opt-in) is the *finest* presence primitive that will ever exist; anything sharper is a stalking primitive (DESIGN-MAP-MODE §1.3, the OPC Tim Hortons precedent — LEGAL-ANALYSIS.md).
4. **Anything requiring covert tracking.** DAU, session length, message volume, salon activity graphs, read receipts, « seen », typing indicators, last-active timestamps — every mechanic that converts attention into debt or requires watching a player unawares (DESIGN-RENCONTRES §4). A busy chat room over empty tables is failure wearing engagement's clothes.
5. **Individuals beyond attendance.** At real events we count heads and note the four phrases. We do **not** build a file on anyone. « Nothing tracked about individuals beyond attendance. Ever. » (DESIGN-ENTRE §7).

Why: each of these, measured, would bend the game toward the thing it measures — ranking makes fluency a competition, popularity makes belonging a contest, location makes safety a fiction. The metrics we refuse are refused because keeping them would make the game worse at its actual job.

---

## 7. Le rythme de lecture — quand on lit ces signaux

Signals unread are just as useless as signals uncounted. The cadence, tied to the daily rhythm in OPERATIONS §2 and the La Régie panel (§8):

- **Chaque jeudi (10 min, same night).** Tally the five expedition numbers; count the francophone/learner heads (§2); note which of the four phrases appeared unprompted (§4); log any welcome given (§3). This is the heartbeat; everything else aggregates from it.
- **Chaque semaine (5 min).** Glance the funnel top: new waitlist entries (Netlify + inbox, both hosts). Reconcile any code batch printed this week (issued vs. photographed). Did sentence four appear this week? If not, that is the week's one open question.
- **Chaque mois (15 min).** Read the funnel as a whole — waitlist → named → first conversation → first Serment → return — and ask where the drop-off is *this* month. Check the fixed numbers are still fixed (3, 100, milestones). Review whether the étoile du nord is lit: is the parcours split still bridging, or drifting all-learner? The monthly read is also the upgrade-trigger check (OPERATIONS §6): sustained regulars, pilot bar cleared, board overflowing la Régie's hand.
- **Chaque saison (with La Couture).** The qualitative harvest: which sentences became canon, which player moments earned the city (cap 12, floor 0). Publish the honest aggregate — the city-relights counter, the zéro-incident streak *and the day it breaks, the postmortem too* (DESIGN-RENCONTRES §5). Seasonal numbers that say *not yet* are kept with the same respect as the ones that say *yes* — a board empty for a season means rituals suffice at this scale, recorded without shame (DESIGN-RENCONTRES §6).

La Régie (`/regie.html`) is where the deterministic pieces get computed — code checks, Serment math, mission-du-jour — but it holds no secret and no player file, and it never will (OPERATIONS §8). The reading of signals is a human job done on paper the same night. That is not a limitation of our tooling. It is the shape of a project that promised not to watch, keeping its word.

---

## 8. Une soirée, lue — a worked Thursday

To make the whole framework concrete, here is one Thursday read end to end, so future-Kurt (or a second person) can do it without re-deriving anything:

- **Nine people checked in.** Heads by parcours, from arrival chatter and the host's memory: three francophone, four learners, one *entre*, one didn't say. → The étoile is lit (§2): both sides are at the table. Note it; move on.
- **Consent cards on the table:** four *corrige-moi souvent*, three *seulement si on ne se comprend pas*, two *je veux juste parler*. → Autonomy signal healthy (§3): the spread is varied, nobody defaulted, and two people chose to just speak and stayed anyway.
- **Two Serments sealed**, one between a francophone and a learner who share no invite-chain edge. → Relatedness signal, the strong kind (§3): two strangers actually met, mutually confirmed, unfakeable.
- **One welcome logged:** an Hôte shepherded a learner's first full sentence. → The Accueil did its one job (§2); it goes in the gratitude ledger, the only public stat that Hôte will ever get.
- **Postcards collected, « une phrase sur ce soir »:** among them, unprompted, « you should come with me next Thursday. » → Sentence four appeared this week (§4). The loop spun. This is the best line on the page and it cost nothing but listening.
- **Five pilot numbers** tallied on paper (§5), and nothing written about any individual beyond that they were there.

That is the entire measurement job for a Thursday: ten minutes, one sheet of paper, zero trackers, every number true. If a night ever needs more instrumentation than that to tell whether it worked, the night was probably bad and the instrumentation would only help you lie to yourself about it.

---

*On ne compte pas pour classer. On compte pour savoir si la ville se rallume — et la seule preuve qu'on accepte, c'est celle qu'un être humain a choisi de nous donner.*
