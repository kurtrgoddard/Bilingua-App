# Le Buzz — La semaine du lancement / Launch week

*Companion to [OPERATIONS.md](OPERATIONS.md), [MESURES.md](MESURES.md), [SHARE-TONIGHT.md](SHARE-TONIGHT.md), and [DESIGN-PRINCIPLES.md](DESIGN-PRINCIPLES.md). July 2026. This is a concrete plan Kurt can execute this week — angles, audiences, assets, a day-by-day schedule, ready-to-post captions, and the guardrails that keep the buzz honest. Everything here obeys the same law as the game: no fake numbers, no bought reach, warm permission, 18+, public places. The invitation economy does the spreading; this document just opens the doors.*

> **« On ne gonfle pas la foule. On allume une fenêtre, et on laisse quelqu'un demander c'est quoi. »**

---

## 1. Les angles — les histoires qui voyagent

Four story angles that actually spread, because each is *true* and each answers « c'est quoi, ça ? » with a hook instead of a pitch:

1. **« A city that appears when two people speak French. »** The premise as headline: Fredericton lost its stories; every real French conversation restores one; the dark town at boot relights window by window (DESIGN-PRINCIPLES §4, La Ville se Rallume). This is the line that makes a journalist lean in — it is a game whose map is the actual downtown and whose progress bar is the community's courage.
2. **« The language app that refuses to track you. »** The counter-positioning. Every other language app measures you with an algorithm and monetizes your attention; this one has no accounts, no analytics, no telemetry, and says so on the front page. In 2026 that is a *story*, not a footnote — it inverts the entire category. (Never overstate it into a competitor attack; state our own refusal, let the contrast do the work.)
3. **« Francophones and learners, same table. »** The mission angle (MESURES §2, DESIGN-EXPEDITIONS fluency-as-responsibility). Not an app for studying alone — a town where a francophone's honour is to welcome, and a learner's bravest sentence is « plus lentement, s'il te plaît ». The Acadian/francophone community and the twelve-years-of-immersion learners, meeting on purpose.
4. **« The real Fredericton, in pixel art. »** The delight angle. Real TomTom geometry — Queen/King/Brunswick, the river, both bridges, 18 real venues in true relative positions; the steam tunnels under downtown; the deer in the Devon woods. Locals share it because they recognize their own street. « An SNES game where you walk around actual Fredericton practicing French, and the coffee is real » (OPERATIONS §6).

---

## 2. Deux publics, deux portes — le semis différencié

Same game, two doors, two different first sentences. Do **not** send one message to both — the francophone hears « help these learners » and the learner hears « you belong here », and each needs the opposite reassurance.

**Porte francophone / Acadian & francophone community.** Reach: the Société de l'Acadie du Nouveau-Brunswick and local francophone/Acadian orgs, the Centre communautaire Sainte-Anne, immersion teachers and retired immersion teachers (Marie-Claude is drawn from them), the founding Hôtes, francophone families who have watched the town go quiet. The framing is **responsibility-to-welcome, decorated as honour** (DESIGN-PRINCIPLES §3): francophones are not "content" or free tutors — they are the nobility of this game; the only public stat they get is welcomes given. The invitation: *this town needs people whose honour it is to say bienvenue. That's you. Here are codes to hand to the nervous.*

**Porte apprenant·e / learners, immersion students, newcomers.** Reach: UNB and STU students (immersion grads, the Sophie NPC's cohort), newcomer/settlement services, adult French-conversation circles, anyone with « twelve years of school French and zero real conversations ». The framing is **permission and low stakes**: no grades, no failure state, no embarrassment physics; « ce soir, je veux juste écouter » is always legal; asking to slow down is *decorated*, not penalized. The invitation: *your twelve years of school French deserve one real conversation. No account, no tracking, no judgment. Someone saved you a seat.*

Both doors open onto the same table — that is the whole point (MESURES §2, the étoile du nord). Seed them in *parallel* so the first Thursday isn't all-learner or all-francophone.

---

## 3. Les actifs partageables — ce qui est prêt maintenant

Everything below ships today; nothing needs building:

- **Le QR / deep-link.** The game accepts `?code=WORD-WORD-NN` (and `#code=…` for QR scanners that mangle query strings); the code pre-fills the invitation gate and is stripped from the visible URL so screenshots don't leak invitations (OPERATIONS §3). Build the links in La Régie (`/regie.html` → Lien QR). A coaster can point at `https://bilingua.app/play/?code=FOUGERE-VELO-69` — one tap from the town.
- **La Carte Postale.** The shareable canvas postcard carrying the player's last *real* French phrase (DESIGN-PRINCIPLES §10). This is the viral object: beautiful, personal, reveals no location or identity without consent. The share provokes the question; the question is answered with a code.
- **L'og-card du titre.** The link unfurls with the pixel-art title screen on every platform — `og:image` is `https://bilingua.app/shots/1-title.png`, `twitter:card` is `summary_large_image` (in `site/play/index.html` and `site/index.html`). Paste the link anywhere and it looks like a game, not a spreadsheet.
- **Le rituel du Jeudi.** Dolan's Pub, Thursdays 18h–20h, the permanent first entry on the board (DESIGN-RENCONTRES §3). The real, recurring « you had to be there » — the thing a story can photograph. It happens whether anyone comes or not, which is exactly why it can be advertised without lying.
- **Les cartes-stats de La Régie.** The honest stat cards — city-relights count, codes in circulation, Thursday attendance — assembled by hand in La Régie, published *only when true* (MESURES §5). A real « 5,000 French interactions in Fredericton » card is press-ready; a padded one is brand arsenic.
- **The 24 fresh codes** already minted and valid (SHARE-TONIGHT.md), plus unlimited more at `/atelier.html`.

---

## 4. Le plan jour par jour — 7 jours

A launch week that seeds both doors, holds one real Thursday, and produces the first honest artifact — not a growth sprint, a good opening night.

- **Jour 1 — Lundi : les fondateurs.** Hand-deliver / send codes to the founding Hôtes first (OPERATIONS §6, rung 1 = shoe leather). Personal notes, not a blast. Each Hôte gets a small stack to give the way they give recognition — one at a time, to people who would try. Photograph any printed sheet before cutting (§3 honesty).
- **Jour 2 — Mardi : la porte francophone.** Reach the Acadian/francophone orgs and immersion teachers with the *responsibility-to-welcome* message (§2). Ask nothing but attention and a few welcomers.
- **Jour 3 — Mercredi : la porte apprenant·e.** Reach students, newcomers, conversation circles with the *permission* message (§2). Post the two captions (§5) with the link and a code nudge.
- **Jour 4 — Jeudi : le rituel.** The first real Thursday at Dolan's, 18h–20h. Consent cards face-up, roles drawn, a laugh inside five minutes (OPERATIONS §2, DESIGN-EXPEDITIONS). Check `rendezvous.json` says what's actually happening before you go. This is the show; the game was the trailer.
- **Jour 5 — Vendredi : les quatre phrases.** The morning after, collect the postcards' « une phrase sur ce soir » (MESURES §4). Note which of the four cult sentences appeared *unprompted*. Reply to every form submission from the week (OPERATIONS §2) — those people typed into a pixel website and pressed send; that took courage.
- **Jour 6 — Samedi : la première carte-stat.** Assemble one honest stat card in La Régie from the real week — attendance, codes spent, windows relit — and share it *only if the numbers are true* (§6). Saturday market is also a natural place for coasters (the Boyce, real market hour).
- **Jour 7 — Dimanche : la note de presse.** Draft a short press note built from angle 1 + angle 2, with one real photograph from Thursday and one true number. Pitch it *only now* — there are regulars to photograph and a real gathering that happened (OPERATIONS §6, rung 3: « pitch it only once there are regulars to photograph »). Hold it if Thursday was thin; a first Thursday with six honest faces beats a press hit with none.

---

## 5. Messages prêts — captions in the honest voice

Short, warm, no growth-hack cringe. Each carries the link and a code nudge. Fill the code from your stack (SHARE-TONIGHT.md) or a Régie deep-link.

**FR — l'invitation générale**
> 🕹️ **Bilingua Quest** — Fredericton a perdu ses histoires. Chaque vraie conversation en français en restaure un morceau. Explore le vrai centre-ville en pixel-art, gagne des tampons, scelle un Serment du Pont avec quelqu'un en personne. Pas de compte, pas de pistage — ça se sauvegarde sur ton appareil, point. 👉 https://bilingua.app/play/ · Code : `______-______-__` · 18+

**EN — the general invitation**
> 🕹️ **Bilingua Quest** — Fredericton lost its stories. Every real French conversation brings one back. Walk the actual downtown in pixel art, earn stamps, seal a Bridge Oath with someone in person. No account, no tracking — it saves on your own device, full stop. 👉 https://bilingua.app/play/ · Invite code: `______-______-__` · Free, in your browser, 18+

**FR — porte francophone (l'Accueil)**
> Tu es francophone à Fredericton ? Ici, ton honneur, c'est de dire bienvenue. Un·e apprenant·e qui ose « plus lentement, s'il te plaît » — c'est ça, la partie. On cherche des Hôtes. 🌟 https://bilingua.app/play/ · Code : `______-______-__`

**EN — learner door (permission)**
> Twelve years of school French and no real conversations? One brave sentence counts here. No grades, no failure screen, no judgment — « tonight I just want to listen » is always allowed. Someone saved you a seat. 🌱 https://bilingua.app/play/ · Invite code: `______-______-__`

**FR/EN — le Jeudi**
> Jeudi, 18h–20h, Dolan's Pub. Tables moitié-moitié, tous les niveaux, un rire garanti dans les cinq premières minutes. Ça arrive que tu viennes ou non — c'est pour ça qu'on peut venir. / Thursdays 18h–20h at Dolan's. Half-and-half tables, every level welcome. It happens whether you come or not — which is exactly why you can. 🌗

**FR/EN — après une Carte Postale partagée**
> (reply to a shared postcard) C'est quoi ? Une ville qui se rallume quand deux personnes se parlent en français. Voici un code, viens l'allumer avec nous. / It's a town that relights when two people speak French. Here's a code — come light a window. `______-______-__`

**EN — the no-tracking angle (for the skeptics)**
> Every language app measures you with an algorithm. This one measures nothing — no account, no analytics, no telemetry, no cookies. It says so on the front page, and the code is open to check. A game about permission can't surveil the people it asks to be brave. 👉 https://bilingua.app/play/ · 18+

**FR — l'angle « la vraie ville »**
> C'est le vrai centre-ville de Fredericton en pixel-art : la rue Queen, la rivière, les deux ponts, 18 vrais commerces à leur vraie place, et les tunnels de vapeur sous le centre-ville. Reconnais ta rue, puis viens y jaser pour vrai. 👉 https://bilingua.app/play/ · Code : `______-______-__`

**A note on filling the code.** Never post a caption with a code you've already given someone — a code floating publicly grants entry but no lineage (OPERATIONS §4), which is fine but wasteful. For public posts, prefer the general link and « demande un code à quelqu'un qui joue » (ask a player for a code); save named codes for person-to-person hand-offs where the lineage — « qui t'a invité·e ? » — is the point.

---

## 6. Les garde-fous du buzz — non négociables

The buzz obeys the same law as the game. Break one of these and the launch is worse than no launch, because the one thing this brand sells is trust.

1. **Jamais de faux chiffres.** Every number in every post, stat card, and press note is true (garde-fou #4, MESURES §5). No padded waitlist, no « X spots left » unless X is real, no « thousands of players » on day two. One fake number poisons the whole warm-permission brand — and it is the *first* thing a journalist checks.
2. **Jamais acheter de la portée.** No bought followers, no bots, no paid engagement, no astroturf reviews. The invitation economy is the growth engine — person to person, by recognition (DESIGN-PRINCIPLES §la boucle virale). Reach that isn't a real person who was glad to be invited is reach we don't want.
3. **Ne jamais sur-promettre.** Don't promise a packed room, a specific person at a table, or a feature that isn't shipped. The board says the honest sentence out loud: « tu ne sauras pas qui vient » (DESIGN-RENCONTRES §3). Under-promise the crowd, over-deliver the welcome.
4. **L'économie d'invitation fait la propagation.** Resist the urge to remove the code gate « just for launch ». The scarcity is the point; the code is a ritual object handed person-to-person, earned by being named (DESIGN-EXPEDITIONS §one respectful disagreement). A frictionless flood is the opposite of what we're building.
5. **Protéger le cadre 18+ / lieu public / sécurité dans chaque message public.** Every post that mentions a real gathering carries: 18+, public place, hosted, check-in/check-out (garde-fous #5–6, OPERATIONS §4). Never imply private meetups, never post a residential address, never suggest 1:1 with a stranger. Safety framing is not fine print at launch — it is part of the invitation, and it is what makes a nervous person's family say « oui, vas-y ».
6. **La sécurité d'abord, toujours.** If a safety report lands during launch week, it outranks every metric and every press deadline (OPERATIONS §4). Buzz is never a reason to move slower on that. Never.

---

## 7. Si l'étoile est basse — the mid-week correction

Read the launch by MESURES, not by vibes. Two failure shapes to watch, each with a same-week fix:

- **La salle penche tout apprenant·e / the room is all learners.** The commonest way a launch of a *learning* game goes subtly wrong: it fills with learners practicing on each other and the francophone side never arrives (MESURES §2, the étoile du nord). Fix mid-week: re-seed the **porte francophone** (§2) harder — a direct ask to two or three Hôtes and one Acadian org, framed as *this table needs you to be the welcome*. One francophone at Thursday changes the whole night's chemistry.
- **Personne ne partage / the loop doesn't spin.** Postcards get made but not shared, or sentence four never appears (MESURES §4). This is not a reach problem — it is a *keepsake* problem. Fix: make the Carte Postale unmissable at the table (« montre-moi ta phrase »), and make sure every departing player leaves with a code in hand, not just a link. The share provokes the question; the question is the invitation. If people leave empty-handed, the wheel has no next turn.

Do not respond to a slow launch by buying reach or padding a number — that trades a real problem for a fake solution and forfeits the one asset (§6). A quiet first week is data, not failure (MESURES §7): it may simply mean rung 1 — shoe-leather, Hôtes first — isn't finished yet. Climb it before reaching for rung 3.

---

*Le jeu est la porte. La table est la maison. Le buzz, c'est juste d'allumer assez de fenêtres pour qu'un·e inconnu·e demande : « c'est quoi, cette ville ? »*
