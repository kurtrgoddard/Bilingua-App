# ENTRE — La Ville Entre Nous / The City Between Us

*Companion to [DESIGN-PRINCIPLES.md](DESIGN-PRINCIPLES.md), [GAME-BUILD-PLAN.md](GAME-BUILD-PLAN.md), [DESIGN-MAP-MODE.md](DESIGN-MAP-MODE.md), [DESIGN-EXPEDITIONS.md](DESIGN-EXPEDITIONS.md). July 2026.*

*This is the founder's ENTRE brief, improved and fused with Bilingua Quest. **ENTRE is not a new game.** It is the hidden layer of the game we already shipped — the second reading of content players at bilingua.app v0.6 have already touched. Nothing reboots; everything deepens. Design law for every section: v0.x mechanics run on deterministic client-side tricks (date-hash, name-hash, word-chain passphrases, printed artifacts — the Serment du Pont pattern generalized); anything needing shared state is labelled **v1 (Supabase)**; anything resolved by humans at a real table is labelled **table réelle**.*

> **« Une ville apparaît quand deux personnes s'en souviennent différemment. »**
> *(A city appears when two people remember it differently.)*

---

## 1. La Révélation

### The unified premise

« Fredericton a perdu ses histoires » (the shipped premise) and « une ville apparaît quand deux personnes s'en souviennent différemment » (the ENTRE premise) are the same sentence read at two depths. Canon: **a story recorded identically in both languages is dead — archived, inert. A story remembered differently in French and English is alive, because the gap between the versions is where the city breathes.** Fredericton went dark (La Ville se Rallume's boot state) not because its stories were lost, but because the town stopped comparing its two memories. Every warmth-scored conversation the player has ever had was already ENTRE play: two people, two languages, one gap.

The hidden city has a real name: **« Pointe-Sainte-Anne »** (Ste. Anne's Point) — Fredericton's *actual* previous name, the Acadian village on this riverbank destroyed in February 1759, twenty-six years before "Fredericton" was founded. The founder's premise ("Decades ago, Fredericton had another name") is not fiction here; it is the town's biography, which is why the reveal lands. Players call it **« l'Entre »** (the Between) — the city that exists between the two languages' versions of events. Its written pun is the thesis: **la Ville Entre** — pronounced identically to « la ville entre », *the city enters*. Untranslatable, which is the point.

And Pointe-Sainte-Anne is itself not the oldest name. The oldest belongs to the Wolastoqiyik, and the game **never writes it**. In fiction it is **« le nom que la rivière garde »** (*the name the river keeps*) — characters say it exists, say it is not theirs to speak, and mean it. It enters the game only if a paid, credited partnership with Wolastoqey knowledge keepers chooses to write it. Until then, the refusal *is* the canon: the game modelling, in its deepest mystery, the consent ethics its correction-consent cards teach at the table. The 1759 destruction is history with weight — named once, never gamified, never a dungeon.

### The reveal chain (all v0.7 static)

1. **Le Carnet était un Document des Témoins** *(the Notebook was a Witness document)*. Post-finale, Le Vieux du Pont says: « Retourne le carnet. » The Carnet's FR/EN page pairs — faithful translations as shipped — are recanonized by the §3.1 content patch: each page gains one Écart, and a **second handwriting** is added to the EN lines (a patch in reality; in fiction, older ink surfacing). The 1969 Grande Jasette was written by two hands, in two languages, on facing pages, deliberately not matching: the last *veillée* held for Pointe-Sainte-Anne, an attempt to remember the between-city back into existence. The player has been holding ENTRE's founding artifact since v0.3.
2. **La porte de 1969.** Aldéric's shipped line — « En 1969, on a scellé la porte du fond. La même année que le grand carnet. Coïncidence ? Ben voyons. » — becomes load-bearing. The sealed tunnel door accepts a typed passphrase, WOLASTOQ-pattern: **SAINTE-ANNE**, learnable only by asking the six Season One characters what the city was called before (each answers differently; Madame Fougère's registre confirms the spelling). It opens **l'Entrepont** (the between-deck): a palette-swapped twilight render of the same Fredericton tilemap. *Static trick: typed passphrase gate, zero server.*
3. **La ville vide.** Entered alone, l'Entre is beautiful and *empty* — no NPCs, no open doors. On screen: « Une ville n'apparaît que si deux personnes s'en souviennent différemment. » The thesis and the anti-hoarding law in one screen.
4. **Le Serment de l'Entre.** Every fragment (§2) exists in two versions, dealt from the *pair*, never solo: two players meet in person, each types both first names (the Serment surface); the alphabetically-first name is dealt version A, the other version B — guaranteed complementary, no hash-collision twins holding the same half. They tell each other their versions aloud, exchange the deterministic code words their clients display, type each other's word — the fragment opens for both, permanently, recorded with both names. The Serment du Pont was the proof-of-mechanic; this is the mechanic at scale. *Static trick: pair-sorted version deal + name+date word-code exchange, the shipped duoHash.*
5. **La question privée.** After every opened fragment, each player privately answers « Qu'est-ce qui s'est passé ici ? » — three interpretive choices, no free text, no wrong answer. Answers accumulate locally into the player's **penchant** (leaning) toward one of the season's three endings (§2.4). *v0.7: local only. v1: honest aggregate counters. Table réelle: the finale counts paper ballots.*

---

## 2. Le Canon

### 2.1 Les Fragments Impossibles — ten, anchored to the real map

The six from the brief plus four grown from shipped v0.6 elements. Each names its real anchor, its FR memory, its EN memory — never translations of each other; the gap is the content — and its one-line static trick.

| # | Fragment | Real anchor | FR memory / EN memory | Static trick (v0.7) |
|---|---|---|---|---|
| 1 | **La Gare de la rue York** | Fredericton's actual former railway station; the Bill Thorpe bridge is the actual old rail bridge | « Le dernier train n'est jamais parti. Il attend encore. » / "The last passenger train left in the sixties." | New map tile; in l'Entre the tracks continue onto the walking bridge |
| 2 | **Le Phare d'en dessous** | The real decorative Lighthouse on The Green (built 1989) | « *Re*construit en 1989 ; l'original dort sous le pont. » / "Built in 1989 as a tourist booth." | Ti-Louis fishes directly above it; opened fragment yields the keeper's last letter, one half per player, dealt by the pair's sorted names (the Serment deal, §1) |
| 3 | **La Chambre 7** | Above Dolan's, inside the shipped Rendez-vous du Jeudi window | « La chambre 7 existe le jeudi, sept minutes, depuis 1969. » / "Dolan's never had rooms upstairs." | Pure clock gate: door renders Thursdays 19h53–20h00 only — the last seven minutes of the real Rendez-vous |
| 4 | **Le Renard qui se souvient** | The Green / Odell edge, dawn and dusk (deer-patience rules) | « Il connaît ton petit nom d'enfance. » / "There's no fox downtown." | Fox speaks a deterministic diminutive from `hash(playerName)` |
| 5 | **Le Vieux-Devon** | Devon — the real north-side town amalgamated into Fredericton in 1945 | « Devon n'a jamais signé. Douze personnes s'en souviennent. » / "Devon voted to join Fredericton in 1945." | The 12 rememberers = 11 NPCs + 1 vacancy; the twelfth seat is earned each season via Proposer une Quête (real byline becomes canon) |
| 6 | **Le Contre-Courant** | The Wolastoq between the bridges — really tidal-reversing at Saint John | « La rivière remonte. Elle retourne chercher son nom. » / "Rivers only run one way." | River tiles animate upstream in l'Entre; the fragment flows toward « le nom que la rivière garde » and *stops there* — the partnership gate made diegetic |
| 7 | **Baguette de toujours** | The pettable cat outside Jonnie Java | « C'est la même chatte qu'en 1969 — elle est dans les marges du Carnet. » / "Every era just happens to have a cat named Baguette." | Baguette speaks one sentence per player, ever, from `hash(name)`; the « Ami·e de Baguette » pin becomes a Witness credential |
| 8 | **La Page Zéro** | The Carnet's 8 pages | « Une page de garde, écrite avant la jasette, nommait des gens pas encore nés. » / "Notebooks don't have prophecies." | Hash-check "finds" the player's name in the margin — pure fiction, labelled as fiction; no real counter faked |
| 9 | **La Septième Chanson** | Dolan's Thursday live music (real) | « La septième toune du jeudi, c'est une complainte de Sainte-Anne. » / "It's an old railway men's jig; nobody knows from where." | Faintly audible through the Chambre 7 door during its seven minutes — two fragments corroborating is the game teaching cross-witnessing |
| 10 | **Le Lexique des Portes** | The 24 shipped INVITE_WORDS | « Il ne reste que vingt-quatre mots que les deux villes se rappellent pareil. C'est pour ça qu'ils ouvrent les portes. » / "They're just words on invitation coasters." | Retro-canonizes the invitation economy unchanged: every code spends two of the city's last shared words |

### 2.2 Six Season One characters (all promoted from live v0.6 cast)

| Character | Anchor | Remembers differently | Asks of players |
|---|---|---|---|
| **Aldéric, Gardien de l'Entrepont** | Steam tunnels | FR: « J'ai scellé la porte en 1969 pour garder la veillée au chaud. » / EN: "I sealed it to keep folks out." Both are his own memories; he no longer knows which hand he wrote with. | Bring him paired mismatches — two players who opened the same fragment with different versions report together; each pair loosens one rivet on the 1969 door |
| **Le Vieux du Pont, la Deuxième Main** | Walking bridge | Revealed as the **English hand** of the Carnet. FR: « J'ai promis de ne jamais traduire. » / EN: "I promised to always translate." He kept one of these promises; Season One turns on which. | Each Witness pair reads him one fragment aloud, each in their own version, neither yielding — his stamp « Deux mains » marks fragments canon-witnessed |
| **Ti-Louis le Pêcheur** | Bridge rail, above the drowned lighthouse | FR: « Mon grand-père a tenu une lumière qui n'a jamais existé. » / EN: "My grandfather drowned in '59. There was no light." | One minute of shared silence at the rail (two players, phones dark) before he surrenders half the keeper's letter |
| **Madame Fougère, la Douzième Mémoire** | Library / chickadee bench | Keeper of the **Registre des Absents** (roll of le Vieux-Devon). FR: « J'ai enseigné à Devon. Mes élèves existent encore. » / EN: "Devon was before my time." | One true story and one invented story about Fredericton, never revealing which — the Rappel rite (§4.1) is *her* rite; she confirms the spelling of SAINTE-ANNE only afterward |
| **Célèste, la Cartographe Muette** | Officers' Square | Remembers l'Entre wordlessly — her mime routines are *directions*. FR page: « ... » / EN page: "(she mimes)" — the deepest gap: silence vs. stage direction | Answer her without words once (mime token from Expeditions); her gesture points to the next fragment. « Le silence avant de parler français, c'est juste de la place pour le courage » was her Carnet page |
| **Les Jumelles Beaulieu** | Boyce Farmers Market | The chocolatine war recanonized as the premise in miniature: the last two who remember le Vieux-Devon's bakery, kept alive *by never agreeing*. FR: « rue Union » / EN: "Main Street." | Player pairs must take opposite sides and defend them; a pair that agrees too fast is sent away laughing: « Si vous êtes d'accord, la boulangerie meurt ! » |

*Kept warm, not leads: Chantal ★ (convenes the finale table), Gaston Vite-Fait (letters to places that don't exist yet — v1), Capitaine Chiac (Moncton seeding vector, v2).*

### 2.3 The season mystery, one sentence

*The 1969 Grande Jasette was the last attempt to remember Pointe-Sainte-Anne back into existence, and it was stopped from the inside — Season One asks who the Carnet's French hand was, why Aldéric's door was sealed the same night, and which version of the city the Witnesses will now make real.*

### 2.4 The three endings

Decided by every private post-fragment penchant across the season — tallied locally (v0.7), aggregated honestly (v1), ratified by paper ballot at the real-table finale (§5.3). No ending is a failure state; disagreement produces the third rather than blocking anything.

1. **« La Restauration »** (leaning: *remember it back*): Pointe-Sainte-Anne's name rises into the visible city — signage gains the old name beneath the new, la Gare relights as the 26th décor milestone, the Carnet gains a ninth page written from the season's canonized player moments.
2. **« La Veillée Continue »** (leaning: *protect the between*): l'Entre stays hidden and *tended*; Aldéric names the season's Witnesses Gardien·nes and hands out keys (deterministic key-codes, printable coasters) — the between becomes a place you may only ever enter in pairs, forever.
3. **« Les Deux Rives »** (vote splits within 5 points — disagreement honoured): the city canonizes its contradiction — name-hash parity permanently decides which remembering of each fragment each player sees, so no two players' Fredericton ever fully matches again, and comparing becomes the endless game. The twins become patron saints of this ending. *Static trick: deterministic name-hash render, zero server.*

### 2.5 Glossaire — the private language

1. **« l'Entre »** — the Between; the hidden city.
2. **« se souvenir de travers »** — to remember crosswise; holding one version of a fragment; said with pride, never corrected.
3. **« Témoin / Témoine »** — Witness; what you are once two people have opened a fragment together.
4. **« C'est dangereux de jaser seul »** — it's dangerous to chat alone; the First Law: no fragment opens for one person.
5. **« Deux mains, un carnet »** — two hands, one notebook; "let's compare versions."
6. **« Ben voyons »** — Aldéric's "coincidence? come on"; spotting a FR/EN gap in the wild.
7. **« Pas une touche depuis six ans »** — Ti-Louis's blessing on beautiful patience and long games.
8. **« Le nom que la rivière garde »** — the unwritten oldest name; by extension, "some things aren't ours to say yet."
9. **« La septième chanson »** — "see you at the seventh song" = Dolan's, Thursday, stay late.
10. **« être rappelé·e dans la ville »** — to be remembered into the city; how invitation is now described.
11. **« remonter la rivière »** — to seek the older version of any story; what a Witness does.

---

## 3. Les Mécaniques

### 3.1 L'Écart — the FR/EN gap engine

**Definition.** An **Écart** is any line where the French and the English are *not* translations of each other — each language remembers the moment differently. The player's verb: **tirer sur le fil** (pull the thread).

**The tell — la Couture (the Seam).** Every dialogue box already renders FR above the EN subtitle. Add a 1-pixel hairline between them. On 99% of lines it is unbroken. On an Écart: a one-pixel notch, the EN typewriter finishing ~180ms out of sync, the text-blip a semitone flat. Never tutorialized at first — discoverable, in the WOLASTOQ register. Players who compare notes are already playing ENTRE without knowing it.

**The interaction.** Tap the seam (or press E) to pull the thread. If the line truly diverges: the box splits, FR and EN side by side, differing element underlined, the pair inscribed in **le Registre des Écarts** (a new Passeport section). If it's an honest translation: « C'est bien cousu. » — no penalty, no miss counter, ever. Curiosity is free.

**The in-fiction justification** — Aldéric, in the tunnels, only after the save holds ≥2 pulled threads:

> « La ville a deux mémoires, et là où elles ne s'accordent pas, elle respire. Ce qui ne se traduit pas n'a jamais été perdu. C'est par là que l'autre ville entre. »
> *(The city has two memories, and where they disagree, it breathes. What doesn't translate was never lost. That is where the other city gets in.)*

The Carnet's eight pages retroactively acquire one Écart each — a content patch, not a plot retcon. The hidden layer was always there; players learn to see the stitching. Écart #0, printed on the Registre's cover: **la Ville Entre / la ville entre.**

**The twelve divergent pairs of Season One** (difficulty = what it takes to *notice*; all unlocks deterministic client-side):

| # | Écart · venue | FR line / EN line | The gap | Unlocks |
|---|---|---|---|---|
| É1 | Dolan's board | « La session commence le jeudi à dix-huit heures. » / "The session starts Thursdays at eight." | eight ≠ dix-huit; neither memory owns 19h53–20h00 | Entering Dolan's during the seven unclaimed minutes on a real Thursday opens la Chambre 7 (clock gate) |
| É2 | Walking bridge | « Tu es debout sur le pont noir. » / "You're standing on the green bridge." | green/noir — FR remembers the black CN rail iron pre-1996 | Replying « noir » makes ghost rails appear — trailhead of the Devon thread (É11) |
| É3 | Officers' Square | « Bienvenue à la place des Témoins. » / "Welcome to Officers' Square." | the whole placename replaced — Witnesses, not Officers | First canonical use of *Témoin*; the gazebo signpost changes permanently for that player |
| É4 | Boyce Market | « Le marché a deux portes. » / "The market has one door." | one/deux — a countable fact disagrees | A second, north-side door tile existing only on real Saturdays (live clock) |
| É5 | The Lighthouse | « Le phare est revenu sur le Green. » / "The lighthouse was built for the tourists." | *built* vs *returned* — from under the bridge | A lamplight tile under the middle pier at in-game dusk, where É10's thread continues |
| É6 | Charlotte St. house | « La maison nous a abandonnés en 1986. » / "The house was abandoned in 1986." | who abandoned whom — voice and victim flip (the brief's flagship pair, given an address) | The door opens only for the French answer to « Qui a quitté qui ? »; inside, the Registre's bookplate and the naming of the mechanic |
| É7 | Steam tunnels | « La rivière gelait, en 1969. » / "The river froze in 1969." | passé composé vs **imparfait** — completed vs never-finished; down there it is still mid-freeze | In real winter months, a frozen underground river section — the second Wolastoq, cracking the other way |
| É8 | Fougère's letter | « Vous étiez mon élève. » / "You were my student." | EN flattens tu/vous; Fougère tutoies every élève — this **vous** means a stranger | The archive quest reorients: find the outsider who attended the Grande Jasette uninvited |
| É9 | Playhouse | « Ils ont demandé le silence. » / "They demanded silence." | the false friend *demander* = to ask; a confrontation in one memory, a courtesy in the other | The game's first arbitrage: privately choose which version the city keeps (v1: aggregated into the disputed-memory vote) |
| É10 | 1969 photo, Library | « La gardienne a laissé un mot sur la marée. » / "The keeper left a note about the tide." | EN hides gender; the FR feminine reveals the keeper was a woman | The photo's search target flips to the woman at the frame's edge; her note is É5's payoff |
| É11 | Northside Main St. | « La gare de Devon aurait brûlé en 1968. » / "Devon Station burned down in 1968." | the **conditionnel journalistique** — *aurait brûlé* = "reportedly"; hearsay grammatical in one language, invisible in the other | Devon Station appears for one date-hashed hour per week — where the Dernier Billet relic chain begins |
| É12 | Deepest grate | « Nous **ne partirons pas** avant que la ville **ne** se souvienne. » / "We won't leave until the city remembers." | the **ne explétif** — a negation that negates nothing; a ghost-word English cannot carry | Typing **NE** at the second grate opens the finale chamber, where the Registre des Écarts is read back as the second Witness document |

**The contribution ladder.** Group Gap scenes use self-selected reading cards (the game never assesses fluency): 🇫🇷 « Je lis le français » (FR only, no subtitles), 🇬🇧 « Je lis l'anglais » (EN only), ⚖️ « Je lis les deux ». Zéro-français players hold the uncontaminated eye and ear; A2 spots cognates, numbers, genders and operates the thread-pull; B1 names *what kind* of gap it is; fluent players hold depth — never control of outcome (arbitrage answers are private and equal-weighted).

Two patterns where NOT understanding French is the advantage:

- **La Lecture Aveugle** *(the Blind Reading)*: memory-charmed Witness pages silently swap one word per viewing for anyone who *comprehends* them (deterministic drift by view-count hash — "your memory keeps tidying the sentence"). Only the zero-French player, copying letters like a drawing, retains the exact string — and the exact string is the key (an acrostic; É11's page's first letters spell DEVON). « La ville se confie à ceux qui ne peuvent pas la paraphraser. »
- **L'Oreille Neuve** *(the Fresh Ear)*: écarts sonores — French homophone pairs (« la mer / la mère », « sans temps / cent ans »). A fluent brain resolves the homophone and *discards the ambiguity*, which was the clue. The écart registers only if the EN-card player declares the two spoken lines identical. Fluency literally cannot perform this role.

**Every registered Écart mints a Truc** for the shipped grimoire — *le moteur de l'inachevé* (É7: « L'imparfait, c'est le film ; le passé composé, c'est la photo. »), *le détecteur tu/vous* (É8), *les faux amis désarmés* (É9: « Demander demande ; il n'exige rien. »), *le moteur des finales niveau 2* (É10), *le conditionnel des rumeurs* (É11: « Aurait = paraît-il. Le français avoue quand il n'a pas vu. »), *le ne qui respire* (É12).

**Homework-proofing (non-negotiable):** no Écart gates main-plot progression; the Registre shows a collection, never a percentage or a missing-items silhouette — there is no "10/12"; no misses counted; when a registered structure recurs, the Couture *glows* (a recall cue, never a quiz); every Écart is noticeable, registrable, and narratively decisive at the EN-reader level. *Static trick: authored `{fr, en, gap, trucId, unlock}` pairs in existing dialogue data plus one seam-notch flag; everything client-side.*

### 3.2 Reliques Vivantes — « La Chaîne des Porteurs »

**The core insight:** the Serment du Pont proved that two humans exchanging deterministic word-codes face to face is a verified social transaction with zero backend. A relic is a Serment du Pont that never ends — each pass is one link, and the chapter number travels inside the phrase itself. The app is a verifier and an oracle; the printed card and the telling carry everything else.

**The phrase** — four parts, speakable in five seconds: `EMBLÈME - CHAPITRE - LIGNÉE - NN` (e.g. `PLUIE - BRUME - CANOT - 47`), built from `RELIC_WORDS` (the 24 INVITE_WORDS plus `PLUIE, GARE, PHARE, RENARD, CARNET, ALLUMETTE, DEVON, MARÉE, CENDRE` — 33 words; every relic's fixed emblem must be in the list). EMBLÈME = fixed per relic. CHAPITRE = `hash(relicId + '#' + n) % RELIC_WORDS.length` — depth `n` decoded locally by trying n = 1…30. LIGNÉE = `hash(relicId + n + giverName) % RELIC_WORDS.length` — a phrase overheard in a café is useless without knowing who said it. NN = checksum bound to the passing date (today and yesterday both accepted, so a 23h50 pass survives midnight). *Static trick: the shipped duoHash family, nothing stored raw.*

**The pass:** giver opens the relic, hands over the **physical card**, tells the relic's story so far, trades first names, speaks the phrase — phone pocketed until now. Receiver types phrase + giver's name (the Serment input surface: two fields, one button). On match, the app derives chapter n+1 from the relic's static mutation table, variant chosen by `hash(relicId + (n+1) + receiverName + date)` — *who* receives it and *when* genuinely shapes what it becomes. Mutation ceremony full-screen, FR with EN subtitle. Giver's copy goes grey: « Elle continue sans toi. Tant mieux. » with a permanent stamp (chapter held, date, first name given to). Held ≤ 2 relics at a time; scarcity keeps passing urgent.

**Provenance without a server:** depth travels in the phrase (chapter 14 = verifiably thirteen holders before you); the full lineage travels on the card — 20 inked « Porteurs » lines. **The card is the ledger; the app only notarizes the latest hop.** Honest limitations, in canon voice: forgeable like invitations (« the phrase is a ritual, not a lock » — cheating yields a ceremony performed alone, which is its own punishment); forks are legal and canonized (« Une relique portée par deux mains à la fois se comporte exactement comme la ville — elle se souvient différemment. »); no famous-relic pages at v0, and the app says so: « À ce stade, seule la carte se souvient de tout le monde. »

**The five founding relics** (mutation tables ship static; chapters 6+ enter « La Longue Mémoire », a date-seeded pool, so relics outlive the season):

**1. La Clé Qui Se Souvient de la Pluie** *(The Key That Remembers Rain)*
- Origin: Aldéric, in the tunnels, after WOLASTOQ: « Elle n'ouvre rien ici. Elle ouvre quelqu'un. » *(It opens nothing here. It opens someone.)*
- Rule: passed **outdoors** (honour), never to a name it has already worn (app-checked via `seen[]`; card-checked by reading the Porteurs lines aloud before passing).
- Mutations: Ch.1 a cold iron key · Ch.2 tarnishes; teeth now match no known lock in Fredericton · Ch.3 an inscription surfaces in the rust: « 1969 » — the Carnet's year · Ch.4 the holder's app rains inside one in-game venue only they can see · Ch.5 the teeth rearrange: it opens the grate to a second tunnel that isn't on the map — the holder's tunnels gain one extra room, furnished by the chain's rolled variants.

**2. Le Dernier Billet pour la Gare de Devon** *(The Last Ticket to Devon Station)*
- Origin: north end of the walking bridge, first « Phare Sous le Pont » sibling encounter there. The station never existed; the ticket insists otherwise.
- Rule: **cannot be passed twice on the same side of the river** — each hop crosses a bridge (holders note « rive nord / rive sud » on their Porteurs line; the app alternates the prompt).
- Mutations: Ch.1 blank, destination illegible · Ch.2 a punch-hole appears that no conductor made · Ch.3 the destination prints itself: DEVON — departure station blank · Ch.4 the date prints: a Thursday that hasn't happened yet · Ch.5 the ticket is round-trip; the return leg is from a city that isn't Fredericton — Halifax's departure relic (§6.1).

**3. La Neuvième Page** *(The Ninth Page)*
- Origin: handed at the gazebo to whoever finishes the Carnet, in a hand matching none of the eight. The reveal made object: the Carnet was the first Witness document, and page nine is ENTRE's front door.
- Rule: passed only **at a real table, seated**, and only to someone who has *not* finished the Carnet — it seeks new witnesses, not completists.
- Mutations: Ch.1 one French sentence that translates itself differently every time you look (the Écart in miniature) · Ch.2 a second sentence, English, that contradicts the first · Ch.3 a margin note in a child's handwriting · Ch.4 the page number changes to 9 *bis* — there are two ninth pages now, somewhere · Ch.5 blank except « Écris ce qui s'est passé ici. » — the holder inks one sentence that becomes the chapter-6 mutation read by every later holder. **Player authorship entering permanent relic canon; ink is the database.**

**4. L'Allumette du Gardien** *(The Keeper's Unlit Match)*
- Origin: forged by the lighthouse encounter (§3.3) from two players' combined answers — the first relic minted by an encounter, per the brief's first-20-minutes script.
- Rule: **seven-day hold max** (`mustPassBy` app-enforced): the match holds full length through day 4, shortens quietly on days 5–7, and on day 8 goes to embers — never punished, per streak law — it just stops mutating until passed. A **« cette semaine, je veille »** toggle freezes `mustPassBy` for seven days, reasonless and unlimited (« le refus n'a pas d'encre », applied to time — a sick or homebound holder is never marched to embers). Card rule: « Ne la craque qu'au bord de la rivière, avec quelqu'un qui doute de toi. »
- Mutations: Ch.1 unlit, damp · Ch.2 dries; smells of kerosene no one nearby owns · Ch.3 the head turns river-green · Ch.4 a thumbnail scratch reveals it has been lit before — once, briefly · Ch.5 it can be « struck »: holder and one witness stand at the river and speak their lighthouse answers aloud; the app records only the pair's Serment code, and the in-game bridge gains a light underneath it on that device forever.

**5. Le Surnom que le Renard t'a Prêté** *(The Nickname the Fox Lent You)*
- Origin: the fox appears on the Green to players who stand still (deer-patience, sharpened) after their 10th stamp, and gives them a folded card with nothing on it.
- Rule: to pass it, the giver must tell the receiver **a true story about a childhood nickname** — theirs or one they gave (honour, and the whole point). It will not progress to anyone the fox already knows (`seen[]`).
- Mutations: Ch.1 blank card, smells faintly of snow · Ch.2 the app addresses the receiver *once* by a generated affectionate diminutive (name-hash; FR diminutive rules: -ounet/-inette/first-syllable doubling) — then never again · Ch.3 the card shows the *previous* holder's diminutive, not yours · Ch.4 the fox appears in the holder's game and refuses to look at them · Ch.5 the fox speaks: one line naming how many people the card has known (provenance surfacing as fiction), and asks the holder to keep exactly one of the nicknames secret forever.

**The save schema** (localStorage, alongside the shipped save):

```js
save.reliques = {
  held:   [{ id:'cle-pluie', chapter:3, receivedFrom:'Marie', receivedDate:'2026-07-15',
             mutationVariant:2, mustPassBy:'2026-07-22' /* timed relics only */ }],
  passed: [{ id:'cle-pluie', chapterHeld:3, passedTo:'Denis', date:'2026-07-18' }],
  seen:   ['cle-pluie']   // one receive per relic per device, ever
}
save.entre = { flags: { phare:'protecteur', jonnieEscalier:null, quartier:null },
               rencontres: [{ venue:'jonnie-java', date:'2026-07-15', role:1, answer:'a' }] }
```

**Physical-first:** `site/atelier-reliques.html` extends the shipped coaster pipeline — relic cards 4/sheet, fold to A6; front: name + EN gloss, emblem word in large type, pixel sprite, standing rule (« Ne peut pas traverser la ville sans traverser un pont »); inside: 20 Porteurs lines (name · date · one word about where) with the origin line pre-printed; back: the 3-step receiving protocol + the phrase grammar — **every card is a self-contained invitation** (the viral loop's « c'est quoi, ça ? » with the answer printed on it). Word-code over QR at v0: a spoken phrase forces the telling; a scan permits silence. QR arrives in v1 only on famous-relic pages, never as the passing mechanism. The pass is always spoken. **Éditions d'artistes locaux (v1.5):** commissioned NB artists produce 25-copy editions of relics that earned fame — paid partners, signed origin lines, per Principle 8's law.

**v1 (Supabase) — Le Registre des Reliques:** append-only ledger, each pass confirmed Serment-style by *both* parties (double-entry, no unilateral farming); public famous-relic pages (`bilingua.app/relique/cle-pluie` — holder chain opt-in, forks rendered as river deltas); fork reconciliation (« Le Concile des Copies » — the losing branch becomes a documented ghost-lineage; nothing deleted); city-seeding counters (§6.1); retroactive card-lineage import flagged « lignée sur parole », dimmer ink, never faked into certainty.

### 3.3 Rencontres Asymétriques — « Le Tirage des Témoins »

**Role assignment, zero server, zero collisions.** Date-seeding alone can't prevent two players drawing the same role. The fix reuses the Serment input surface — the name-trading *is* the ritual:

1. All 2–4 players open « Rencontre » and each types **all first names present** (10 seconds of exactly the introduction the game wants anyway).
2. Each app independently normalizes + sorts the names; your index in the sorted list = your role slot. Identical input ⇒ identical ordering on every device ⇒ **guaranteed complementary roles**. (Two Sarahs? « Ajoutez une lettre. ») **Desync guard:** every screen then shows the same two-word duoHash checksum of the sorted list; the table compares it aloud before « Commencer » — one typo and the words differ, caught before any brief is read.
3. Scenario selection: `hash(venueId + dateAtlantic) % encounterCount` — any group at Jonnie Java today plays the same scene with complementary pieces; tomorrow's groups play another. City-wide simultaneity, the Mission Secrète trick at encounter scale.
4. Brief variants: `hash(venueId + date + roleIndex) % variants` — the same encounter re-drawn weeks later reads differently.
5. Briefs read **privately** (« Ne montre pas ton écran », styled like the correction-consent cards). A 4th player always draws **Le Témoin Silencieux** — a listening brief ("you may only ask questions"), the guaranteed low-pressure seat.

**Les Sept Minutes Noires.** On « Commencer », every phone drops to a near-black ember, 7:00 countdown, one line: « Posez le téléphone face contre table. La ville écoute. » No interaction possible; a soft chime at 0:00. Principle 10 as a mechanic — the app's proudest state, face-down, now enforced by the app itself. Three optional FR prompts live on the venue's **printed encounter card**, not on screen. No recording, ever.

**« Que s'est-il passé ici ? »** After the chime, each player answers privately — one question, 2–3 fixed divergent options, never free text. The answer writes a **world-flag** in localStorage that changes *that device's* Fredericton: decor layers, NPC lines, which variant of a later encounter you draw, Carte Postale stamps — so postcards become comparison bait (« attends — ton pont a un phare ? »).

**The honest v0 limitation, in the game's own voice:** your answers branch *your* city only. The app says so, because it's the premise: « Vos deux villes ne seront plus d'accord. C'est exactement comme ça qu'une ville apparaît. » Divergence-as-limitation re-shipped as divergence-as-content; no fake « la ville a tremblé » messages implying global effect, ever.

**Sample encounters** (of Season One's twelve — see the rations law below; role briefs verbatim; role order = alphabetical-sort slot):

**Jonnie Java — « La Femme du Deuxième Étage »**
- **A :** « Voici un plan du café, daté de 1987. Il montre un escalier, là où il y a le mur du fond. Jonnie Java n'a jamais eu de deuxième étage. Le plan est signé de tes initiales. »
- **B :** « Tu te souviens d'un message vocal en français : une femme dit qu'elle a vécu " au-dessus du café " et que l'odeur du pain montait par le plancher. Tu peux le raconter, mais pas le citer mot à mot — sauf sa dernière phrase, si on te la demande. »
- **C :** « Tu connais un mot : " Mireille ". Ne le dis à personne — sauf si quelqu'un te demande, en français, le NOM de la femme. Alors dis-le, et seulement lui. »
- **Question privée :** « L'escalier a-t-il été démoli, ou n'a-t-il pas encore été construit ? » — `demoli` → a bricked-over doorway appears on the café's in-game back wall; `pasEncore` → a construction permit dated *next year* pins to the notice board.

**Pont Bill Thorpe — « Le Phare Sous le Pont »** (the brief's first-20-minutes script, shipped)
- **A :** « Tu te souviens du phare sous le pont piétonnier. Tu revois sa lumière verte sur la glace, l'hiver. Quelqu'un ici sait pourquoi il a disparu — mais toi seul sais qu'il a existé. »
- **B :** « Tu n'as jamais vu de phare. Mais tu possèdes la dernière lettre de son gardien. Elle se termine par : " Je l'éteins ce soir, avant qu'il ne comprenne qu'on peut sortir. " Tu peux la lire à voix haute UNE fois. »
- **Question privée :** « Le phare protégeait-il la ville, ou emprisonnait-il quelque chose sous elle ? » — `protecteur` → a faint green light under the in-game bridge at night; `geole` → your river renders flowing the wrong way for one minute at 20h02 monthly. **Either way, the pair forges L'Allumette du Gardien, chapter 1 — the first encounter that mints a relic.**

**Kiosque d'Officers' Square — « Le Quartier des Douze »**
- **A :** « Un quartier de Fredericton a disparu des cartes. Douze personnes s'en souviennent encore. Tu as la liste : onze prénoms, et une ligne vide. La ville choisira elle-même qui écrit son prénom sur la douzième ligne — et ce ne sera pas toi. »
- **B :** « Tu te souviens du quartier. Rue en pente, odeur de sciure, un chien jaune. Mais tu n'es PAS sur la liste — et tu sais que l'un des onze prénoms est faux. »
- **C :** « Tu n'as jamais entendu parler de ce quartier, et c'est ta force : tu es la seule personne ici qui peut poser des questions naïves. Poses-en au moins cinq, en français. La cinquième réponse sera importante. »
- **Question privée :** « Le quartier a-t-il été oublié, ou s'est-il caché ? » — `oublie` → a street-shaped gap in the grass north of the Green, visibly missing, unwalkable; `cache` → the same gap plus a fence-post shadow with no fence at dusk. The twelfth name is drawn deterministically — `hash(sorted names + date)` over the non-A players, the game's own trick, never a table vote (garde-fou 1: no popularity contests) — and whoever it names holds the season's sixth relic candidate — created by players, per the brief.

**Marché Boyce (samedi) — « L'Étal Numéro Zéro »**
- **A :** « Tu as la liste officielle des étals du marché. Elle commence à l'étal n° 1. Mais la somme des loyers en bas de page compte un étal de trop. »
- **B :** « Ta grand-tante achetait ses fougères " à l'étal zéro, près de la porte qui ne s'ouvre plus ". Tu peux décrire la marchande — mais chaque fois, un détail change tout seul. Laisse-le changer. »
- **C :** « Instruction : pendant les sept minutes, obtiens d'un vrai étal, en français, une recommandation — " qu'est-ce qu'on devrait goûter aujourd'hui ? " La réponse est ton indice. Rapporte-la au groupe telle quelle. » *(Free ask per the Diplomate precedent — garde-fou 3: buying stays optional flavour, never the clue-carrier.)*
- **Question privée :** « L'étal zéro vendait-il quelque chose, ou achetait-il quelque chose ? » — `vendait` → the in-game Boyce gains a zero-numbered empty stall with a « DE RETOUR SAMEDI » sign; fougères at 0¢ in La Criée. `achetait` → the twins gain « elle achetait les mots qu'on regrettait », and your next Carte Postale offers a stall-receipt border.

**Bibliothèque publique — « Le Livre Rendu Deux Fois »**
- **A :** « Fiche de retour, 14 juillet 1969 : le même livre, rendu deux fois le même jour, par deux personnes différentes. Le titre est illisible en anglais. »
- **B :** « Tu connais le titre, en français seulement : " La maison nous a abandonnés ". Tu sais aussi que la traduction anglaise du titre dit le contraire. Ne l'explique pas — fais-le remarquer. »
- **C :** « Tu as la liste des emprunteurs. Les deux noms de 1969 sont les prénoms de deux personnes assises à cette table. Décide si tu le dis. » *(Deterministically true: the brief renders the two alphabetically-first names of the group — the date-hash can't know names, but the sorted-name draw of §3.3 can.)*
- **Question privée :** « Qui a abandonné qui : la maison, ou les gens ? » — `laMaison` → a house sprite loses its door overnight; Madame Fougère gains « les maisons se souviennent mieux que nous ». `lesGens` → the library's returns slot glows, and « Le Quartier des Douze » appends a private rider line to whatever brief the sort deals you (« Tu sais aussi que l'un des douze a rendu un livre deux fois. ») — cross-encounter dependency, purely via local flags, never overriding the sorted-name role deal (which must stay collision-free).

**Dolan's (jeudi 18h–20h seulement) — « La Chambre de Sept Minutes »** *(app-gated to the shipped Rendez-vous window; the dark-phase timer IS the room's lifespan)*
- **A :** « Ce bâtiment a été un hôtel. La chambre 7 existe encore, sept minutes par semaine — et c'est maintenant. Tu as sa clé de laiton. Pendant les sept minutes, décris la chambre aux autres comme si tu y étais. »
- **B :** « Tu as le registre de l'hôtel, dernière page : le dernier client n'a jamais rendu sa clé. La signature est illisible, sauf la première lettre — la même que le prénom de la personne à ta gauche. »
- **Question privée :** « La chambre attend-elle quelqu'un qui revient, ou quelqu'un qui n'est jamais venu ? » — `revient` → one upstairs window of in-game Dolan's is lit Thursdays 18h00–18h07 exactly. `jamaisVenu` → a handwritten margin note appears on the Passeport's last page — « chambre 7 : le registre reste ouvert » — marginalia, not a slot: no silhouette, nothing to fill (§3.1's own law); the finale cashes the note.

**Season One rations (scope law):** twelve encounters, not twenty-four — variety comes from the date-hashed brief variants, not raw count. Écarts stagger: É1–É6 ship with the reveal (they are the Season Zero six), É7–É12 land monthly. Fragments stagger: 1–5 at the reveal, 6–10 fortnightly. Three mirror hours and five relics stand, but anything unwritten by its date slips a month rather than shipping thin — honest numbers apply to the authoring calendar too.

**v1 (Supabase) — Le Canon Partagé:** the group's sorted-name hash = session id; answers post to it; the server computes agreement (restored building rendered for the whole group and the city map) vs disagreement (the venue forks; the city tally page shows the live split — « le phare : 61 protecteur / 58 geôle », honest to the digit). v0 local flags import on first login as « ta version d'avant le Registre » — nothing a founding player chose is discarded.

---

## 4. Les Gens

### 4.1 Le Rappel à la Ville — being remembered into the city

The shipped 3-codes invitation economy (`STELLA-WOLASTOQ-11`, client-checksum, invite chain in the Passeport) stays the mechanical spine untouched. The ritual is what changes. The inviter — **le Rappeleur / la Rappeleuse** ("the one who remembers you back") — performs it in a public place, in person, script printed on the back of the new atelier coaster:

> **LE RAPPEL À LA VILLE**
> 1. « Assieds-toi. Je vais te raconter deux histoires de Fredericton. »
> 2. « L'une est vraie. L'autre, je l'ai inventée. Je ne te dirai pas laquelle. »
> 3. *[Tell both. In French if you can; in both languages if you must. The gap between the versions is allowed to be the clue.]*
> 4. « La ville ne peut en garder qu'une. Choisis celle qu'elle doit préserver. »
> 5. *[Hand over the coaster and one first-relic card.]*
> 6. « Voici ton code. La ville se souvient de toi maintenant. »

**« Le Rappeleur ne révèle jamais. »** The doubt is the gift — the newcomer's first contradictory memory, i.e. their first act as a Witness.

**Deterministic opening chapter** *(static trick: `hash(inviteCode + choice + playerName)`)*: at redemption the newcomer types `VRAIE` or `INVENTÉE` — which story the city should *keep*, not which they believed (« Pas celle que tu crois vraie. Celle que la ville doit garder. »). `VRAIE` → **le Chapitre du Gardien / de la Gardienne**: verify one real, checkable downtown detail (« Combien de lampadaires sur le pont vert ? Va compter. »). `INVENTÉE` → **le Chapitre du Rêveur / de la Rêveuse**: one of six impossible errands (« Trouve l'endroit où la gare de Devon aurait dû être. Restes-y une minute. »). The same seed assigns their **fait impossible** — their one Witness memory — from a pool of 24 written in contradiction pairs (fact 2k contradicts fact 2k+1), which the Témoin role later exploits. It renders on the Passeport's first page: an origin story, unique per invitee.

**The first relic:** the atelier gains a six-card starter sheet of minor **reliques d'accueil** — three-chapter mutation tables, distinct by law from the five founding relics (§3.2, one in-fiction origin each, never mass-printed) and from the departure relics (§6.1; la Carte à la Rue Manquante is reserved for Moncton): La Photo de Quelqu'un Qui N'est Pas Encore Arrivé, L'Excuse Jamais Envoyée du Maire, Le Parapluie Prêté Jamais Rendu, La Tasse Qui Refroidit Trop Lentement, Le Banc Qui Garde une Place, La Mitaine Dépareillée de 1969. The Rappeleur inks provenance line 1 and gives the card. *v0: card is the database; mutation is Wizard-of-Oz (§7). v1: provenance sync.*

**The no-code path — un·e Passant·e.** The waitlist is abolished as a *word*, not as a mechanism: Passant·e is the renamed no-code state, the invitation gate stands untouched, and « Laisse un souvenir » (below) is the shipped Netlify waitlist form under a new ritual — every souvenir is a signup, so the regional signup-goal counters (§6.1) keep counting. « Je n'ai pas de code » → « La ville ne se souvient pas encore de toi. Mais tu peux déjà marcher. » A Passant·e can walk everything, play every encounter, earn Confidence, do the Mission Secrète, attend the real Thursday (it's a public pub), pet the cat. Their Passeport renders **à l'encre pâle**: stamps land but display faded (« ce souvenir attend d'être confirmé »). The moment someone performs their Rappel, all pale stamps darken retroactively in one animation — endowed progress, honest, and the best possible reason to seek out a Thursday table. What a Passant·e cannot do: give invitations, carry relics, reach the Carnet finale, attest roles. One more door: **« Laisse un souvenir »** — write one memory of Fredericton, either language, into what was the waitlist form. At v0 the "browsing" is la Régie, labelled as such: Kurt curates a consented, PII-stripped digest and mails it to Hôtes monthly (a public souvenir wall is v1). Spending a code on a stranger whose memory moved you is **un Rappel d'inconnu** — one honoured use of a code among equals, never ranked above the others: the Thursday table stays the primary, advertised code-free path, and nobody is ever shown which souvenirs earned codes (entry is never an essay contest). Exclusive in meaning, never in access.

### 4.2 Les Sept Regards — the seven emergent roles

**Framing law: lenses, not levels** (« des regards, pas des grades »). Any player may hold several; no role gates content another path can't reach; no counts, directories, or orderings displayed; recognition cites conduct only.

**Attestation — le Sceau de Reconnaissance** *(static trick: `hash(attesterName + recipientName + roleWord + ISOweek)` → two French words + checksum, e.g. `BRAISE-SEUIL-4`)*. Three Sceaux from three different attesters; the client rejects what it can actually see — one hop deep: **not your inviter, not anyone you invited** (the only lineage a zero-backend device knows). Full-lineage unrelatedness — grandparents, lineage-siblings, the attester's own chain — is enforceable only by the v1 attestation ledger, and moves there. Forgeable at v0, like invitations: a ritual, not a lock. *v1: Sceaux become rows in an attestation ledger.*

| Regard | Earned by (what attesters witnessed) | Layer of the city revealed | Responsibility |
|---|---|---|---|
| **Le Guide** | Brought a newcomer to their first table, or performed a Rappel, three times | **Les Seuils**: opening-chapter locations glow | Never lets a first-timer arrive alone; holds the door, not the floor |
| **L'Interprète** | Bridged a real FR/EN misunderstanding three times — caught the two languages saying different things | **L'Écart**: divergent clue-pairs shimmer | Shows both readings, never decides which is true; conferred only by others, never self-claimed |
| **L'Archiviste** | Preserved stories: relic provenance lines inked, or 2 accepted Proposer-une-Mémoire submissions | **Les Registres**: full provenance text; la Salle des Registres in the tunnels | Writes nothing down without consent; credits everyone, always |
| **L'Hôte** | As shipped: vetted, capped, seasonal, gold star (the one project-conferred Regard) | **L'Accueil**: sees pale-ink memories and Accueil pins so they can honour them | The only public stat is welcomes given |
| **Le/La Cartographe** | Stamped all 17 venues *and* led a group somewhere neglected | **Les Rues Fantômes**: faint outlines of the impossible city on the tile map | Walks the edges so the centre doesn't become the whole game; proposes the next hub |
| **Le Farceur / La Farceuse** | Made a table laugh by productive uncertainty, three cited moments | **Le Doute Doux**: sees which canon details began as jokes (tiny wink glyph) | May plant one fausse mémoire douce per season; never punches down, never targets a beginner's French |
| **Le Témoin** | Completed a Quête à Deux with the player whose *fait impossible* contradicts their own — held a contradiction without resolving it | **La Ville d'Entre** — the reveal itself | At each finale, only Témoins vote on which version of a disputed memory becomes real — a responsibility, not a rank; the vote is about the story, never about players |

Sceaux are never counted publicly ("3 to earn, then the counter disappears"); responsibilities are seasonal opt-in with the Hôte-style emeritus state — no one's warmth gets strip-mined.

### 4.3 Fluency as responsibility — three recognitions

All conduct-based, per the Accueil pin and gratitude-ledger law:

1. **Le pin « Passeur d'Écart »** *(Gap-Ferryman)*: earned when a fluent player explains a gap such that a less-French player performs the thread-pull — the Registre credit lands in the *beginner's* Passeport; the pin is confirmed by the beginner via Serment word-code. You cannot ferry yourself.
2. **« écarts rendus lisibles »** *(gaps made readable)* — the one Écart statistic on the Hôte gratitude ledger **(v1)**: gaps where someone else registered the discovery while you interpreted. Your own Registre size is never public.
3. **Le stamp « L'Interprète patient·e »** via the card **« Je garde ma lecture »** — laid face-up as a vow of restraint, sibling to correction-consent. If the group reaches the divergence before the card lifts, the stamp lands. It decorates **withheld fluency** exactly as Accueil decorates asked-for slowness: both halves of the power imbalance, disarmed by ceremony.

---

## 5. Les Rituels

### 5.1 « 20h02 — L'Heure Miroir » (the monthly hour)

The Carnet ends mid-sentence; ENTRE reveals the marginal note on its final page: **« 20 h 02 »** — the minute the greatest conversation Fredericton ever had fell silent, on **le 2 février 1969** (02/02 at 20:02). The one evening minute that reads the same in both directions — the way the second Wolastoq flows both ways, the way one story reads differently in two languages and stays one story. Aldéric, only during mirror hours: « Une ville apparaît quand deux personnes s'en souviennent différemment. Une heure apparaît quand elle se lit dans les deux sens. »

**On the 2nd of every month, 20h02–21h02 Atlantic:** « La ville est réveillée pour une heure. » *Static trick: client clock gate (`date === 2 && 20:02–21:02`), monthly content keyed by (year, month) hash, all assets in the bundle — « le jeu fait confiance à ton horloge », the Mission Secrète honour voice.*

- **Transformation, not addition:** venues recolour, one NPC per venue gets a mirror-hour-only line, one **phantom location** appears and vanishes at 21h02.
- **Permanent Souvenir, ephemeral hour:** anything earned during the hour mints a permanent **Souvenir de l'Heure Miroir** stamp. The place vanishes; the proof stays.
- **Cross-location dependency without a server:** the printed kit at Hub A carries the passphrase needed at Hub B, and vice versa — decisions propagate the ENTRE way, **humans carrying words**, not packets.
- **L'Écho du lendemain:** by 12h02 next day, a plain-HTML page reports what happened, with photographed paper-ballot tallies. **Missing the hour loses nothing permanent** — the Fortnite lesson with the FOMO poison removed: temporal scarcity real, punishment nonexistent.
- **Real-city layer:** two approved hubs per hour (one southside, one northside, one alcohol-free in every rotation), Hôte-checked-in, $0 to attend, always. One paper ballot per hub feeds the **Registre des Témoins**; each monthly majority becomes an **« acquis »** pre-weighted into the finale, weights published *in advance*.

**Season One's first three mirror hours** *(scheduling law: the dates below are targets, not promises — M1 is the first 2nd-of-the-month falling at least two weeks after Season Zero passes its §7 thresholds; M2 and M3 follow monthly; nothing printed carries a hardcoded date)*:

**Mois 1 (cible : 2 septembre 2026) — « La Gare de Devon »**
- *In-game:* a railway station that never existed materializes on the northside Main Street strip. Inside, stationmaster **Mme Odile Cormier** asks for your ticket — a word printed only on the physical ticket stubs at the hubs. Typing it mints « Souvenir de la Gare ». Aldéric surfaces from the tunnels at 20h02 sharp with his mirror-hour line.
- *The gap is the mystery:* EN clue: "The last train left Devon in 1962." FR clue: « Le dernier train n'est jamais parti. »
- *Real city:* south hub Officers' Square gazebo, north hub the old rail roundhouse; pairs must ask one Hôte-mediated stranger « Vous souvenez-vous de la gare ? » Ballot: **« Le train est-il parti ? Oui / Non / Il revient. »**
- *Relic activation:* **Le Dernier Billet pour la Gare de Devon** enters circulation that night — its single origin encounter (§3.2, north end of the walking bridge) is run at the north hub as the hour's opening scene — under Passation rules (§5.5).

**Mois 2 (cible : 2 octobre 2026) — « Le Phare sous le pont »**
- *In-game:* a light beam sweeps from beneath the Bill Thorpe bridge once per real minute. The keeper's letter has 60 lines; the hub sign-in sheet numbers arrivals, and your sign-in index deals you **six consecutive lines** (`index × 6 mod 60`) — ten sign-ins cover the letter exactly; coverage is guaranteed by construction, never left to hash luck. **No player can read the letter alone** — lines pool only on paper, at the after-table, on the printed « Lettre du gardien » worksheet. The ENTRE thesis as mechanics: the story literally cannot be possessed by one person.
- *Real city:* gathering on the walking bridge (step-free; accessibility block on the listing), pooling at Dolan's and the alcohol-free hub after. Ballot — the brief's own question: **« Le phare protégeait-il la ville, ou gardait-il quelque chose sous elle ? »**
- *Relic activation:* **L'Allumette du Gardien** keeps its single origin — forged by the lighthouse encounter (§3.2/§3.3), whenever that encounter runs — but every Allumette in circulation gains a one-night card instruction at this hour: « Ne l'allume que debout près de la rivière, avec quelqu'un qui s'en souvient de travers. » (Fragment versions are public by design; ballots never are — the card may pair people by version, never by vote.)

**Mois 3 (cible : 2 novembre 2026) — « Le Renard »**
- *In-game:* a fox roams the whole map for the hour, fleeing anyone who rushes, approaching anyone who stands still (deer-patience, reused deliberately). Reached, it "guesses" your childhood nickname (name-hash over a Fredericton word list) — and admits it's guessing: « Le vrai, seul un humain te le dira. » It sends you to learn **one real childhood nickname from one real person tonight**. The nickname is never typed into the game; the game asks only « L'as-tu appris ? » — honour system, phone pocketed.
- *Real city:* nickname-exchange rounds at the hubs — a two-minute, zero-French-required on-ramp, the gentlest possible first encounter for beginners. Ballot: **« Le renard se souvient du quartier disparu. Faut-il le suivre ? Oui / Non / Pas encore. »**

### 5.2 La Chambre 7 — the Thursday deep layer

Above Dolan's, inside the shipped Rendez-vous du Jeudi. Canon: the 1969 Grande Jasette happened in Chambre 7; the Carnet is the notebook carried out of that room. Canon also owns the calendar: le 2 février 1969 fell on a **Sunday** — the Grande Jasette was the last *veillée du dimanche*, and the Thursday-only door is the Dolan's-era echo, the room having moved to the night the city still gathers. **Every Thursday 19h53–20h00** — the last seven minutes of the real Rendez-vous — the door renders; at 20h00 it vanishes. **The room has never been seen at 20h02** — it always closes two minutes early. That standing itch is cashed at the finale. *Static trick: pure clock gate + ISO-week hash.*

Inside: one **testimony fragment** per week (13 for Season One), dealt **in halves at pairing** — the pair's alphabetically-first name takes the French half, the other the English (the ISO week flips which side leads), so the halves are guaranteed complementary, the Serment deal again — and the halves diverge in meaning. You hold half a memory. The ritual: at 19h53 the Dolan's countdown flips (« La chambre est ouverte — 7 minutes »); pair up (Hôtes pair the solo); each reads their half aloud to the other; then the **Contre-signature** — Serment-style word-codes from both first names + the date, exchanged verbally, typed. Both Passeports gain that week's **Feuillet de la Chambre 7**; thirteen co-signed leaves assemble the register of who was at the table on 2 février 1969 — the season's central evidence. Seven minutes is short on purpose: it protects the pub conversation the ritual lives inside. **Remote parity:** solo-at-home players enter at the same seven minutes and are received by **Béatrice**, the night concierge NPC, who reads the other half aloud (the solo half is name-hash dealt; Béatrice always holds whichever remains); the leaf is marked « lu avec Béatrice » — different, never lesser, fully counted. **The second door:** the same clock gate renders a twin Chambre 7 table at the rotation's alcohol-free hub (Jonnie Java's back table), where halves pair and countersign identically — §5.1's alcohol-free law applied to the weekly rite, and the fiction already owns two doors: « il y a deux neuvièmes pages, quelque part ».

### 5.3 « La Nuit où la rivière a parlé » — the season finale

The third Thursday after M3 (cible : jeudi **19 novembre 2026** — the finale is always a Thursday), 18h30–21h00, planned for **40–60 players** (about 100 codes exist; half showing up is the honest planning number), winter-realistic (indoor stations, one short optional outdoor moment; full accessibility block; a seated fully-indoor path through all voting). The question being resolved: **« Qu'est-ce qui s'est tu à 20h02, le 2 février 1969 ? »**

| Station | Place | Ballot |
|---|---|---|
| 1. Le Hall | Hotel-lobby/public hall | **Q1 — Qui était dans la chambre ?** (the 13 Feuillets read aloud by their co-signers) |
| 2. La Table | Dolan's — the Grande Jasette table reconstructed, the Carnet displayed | **Q2 — Quelle était la dernière phrase ?** (three candidates, FR/EN divergent) |
| 3. L'Archive | Bibliothèque publique (alcohol-free, step-free) — relic registres, the lineage wall | **Q3 — Faut-il finir la phrase, ou la laisser inachevée ?** |
| 4. Le Pont | Walking bridge (optional; indoor mirror at the library windows) | No ballot. At **20h02 exactly**: two minutes of silence — « les deux minutes que la chambre n'a jamais montrées » — then every phone, clock-gated, plays the same « la rivière parle » sequence, and Chambre 7 stays open past 20h00 for the only time |

**The count (zero server):** paper ballots into **l'Urne de la Rivière** (artist-commissioned vessel, paid); the app derives each ballot ID as `hash(inviteCode + 'URNE' + season)` rendered as two French words + checksum — still checksum-validated and honour-dedup, stated as such, but unmappable by eye, so the published tally sheet never lets an inviter read an invitee's vote; remote ballots via the existing Netlify form, open 48h before, counted identically; the three monthly acquis enter as pre-declared weights. The count is **witnessed** — three players from three invite-lineages plus one Hôte tally at Dolan's; the sheet is photographed and published that night. Honest numbers, to the digit.

**The canon update:** overnight, one of **three pre-built `content.json` branches** deploys — La Restauration, La Veillée Continue, or Les Deux Rives (§2.4) — live for everyone by 12h02 (« l'Édition du lendemain », also printed as a broadsheet left at partner venues). *The finale patches the game for the whole city* — "you had to be there, but what happened there now affects everyone," achieved with a JSON file and a printer. *v0.8 static; the split-city ending is name-hash parity, serverless.*

### 5.4 Les Veilleurs — remote parity as canon

The city has always had **Veilleurs** (Watchers): « Le fleuve compte sur ceux qui ne peuvent pas venir. » Parity is canon, not accommodation. Every role requires no mobility, no money, no alcohol, no sensory tolerance, no synchronous attendance (48h windows on all tasks):

1. **Décodeur·euse** — each mirror hour publishes a date-hash cipher; the decoded sentence is the next morning's Écho headline *before it is published*; correct decodes (Netlify form) are credited by name. The Veilleurs write tomorrow's news first.
2. **Archiviste de lignée** — compiles submitted relic-card transcriptions into **le Grand Registre** lineage pages, permanent byline. This role owns "relics with documented histories."
3. **Juré·e des mémoires contestées** — monthly, two contradictory FR/EN accounts published; remote votes count 1:1 with hub paper ballots.
4. **Gardien·ne de l'heure** — the mirror hour is clock-gated, not geo-gated: identical on every screen on Earth. One exclusive beat: the fox visits the Veilleurs first, at 20h02, before appearing downtown. Different, never lesser.
5. **Scribe du lendemain** — rotating, credited: drafts the Écho.

**Parity laws:** every ballot has a remote channel closing at the same hour and counted the same night; every event has a plain-HTML listing with the full accessibility block; no ritual step requires purchase, travel, voice, a phone call, or being anywhere.

### 5.5 Architecture de sécurité — the stranger surfaces

ENTRE adds two stranger-touching surfaces; both inherit the trust ladder (DESIGN-MAP-MODE L0–L3) and correction-consent culture, extended:

**La Carte de rencontre** — the consent pattern applied to *people*. Before any encounter or relic pass, each participant sets a card (printed in the kit; a setting in-game), changeable anytime, honoured absolutely: **« Mon cercle »** (only my invite chain) · **« Amis d'amis »** (two hops) · **« Avec un·e Hôte présent·e »** (strangers, Hôte-mediated only) · **« Ce soir, j'observe »** (present, not pairing — a full, legal, celebrated move). The invite chain, live since v0.2, is revealed as what it always was: **the trust graph**. There is no open-matchmaking-with-strangers tier, ever.

**La Passation** — relics change hands only at approved public hubs during posted windows; between strangers, Hôte present, minimum party of four (DESIGN-EXPEDITIONS' stranger-contact floor, unchanged; the Hôte counts within the four — giver, receiver, Hôte, one more Witness). The card's registre records display name, venue, date — never contact info or descriptions of people. **« Le refus n'a pas d'encre. »** (Refusal has no ink): declining a relic is instant, reasonless, traceless. A relic held past its window **sleeps** — dims Flamme-style, never dies, never names its holder as a bottleneck.

**Copy-level law:** every encounter card ends « Ce rendez-vous n'existe que dans un lieu public. S'il n'est pas public, il n'est pas dans le jeu. » Templates can only reference the approved hub list — the pipeline structurally cannot emit a private address. Instructions never describe a person ("look for the man in the red coat" is banned as an approach primitive); meeting points are **fanions** — table flags. You find a table, never a body. During dark minutes the screen shows exactly two things: a quiet timer and « Partir est toujours une sortie honorable. »

**Refusals, restated as law:** no live GPS or person-pins; no DMs or open chat below the trust ladder; no photos of people anywhere; no recording of conversations, ever — the game asks afterward and believes you; no attendance penalties (the Écho exists so the absent get the story); no home addresses in any registre, ballot, or form; no paid ritual access — 20h02 and the finale are free forever. All ENTRE surfaces sit behind the existing 18+ gate; every hub rotation includes an alcohol-free venue.

---

## 6. La Croissance

### 6.1 Le Passage — city-seeding by travelling relic

Consistent with the v2 roadmap: relic seeding is the **narrative front door** to a locked region; the **mechanical** unlock stays what is actually shipped — the regional waitlist-signup goal counters (`NB_REGIONS`, now fed by « Laisse un souvenir », §4.1) — until the roadmap's 50/50 EN/FR bar (v2) replaces them. The relic opens the story; the counter relights the city.

**Four departure relics** (artist-made physical objects, commissioned and paid): **Moncton — La Carte à la Rue Manquante** (the reveal, per the founder's brief: the missing street is in Moncton) · **Saint John — La Cloche de Brume Muette** (the harbour remembers a sound Fredericton claims never existed) · **Halifax — Le Dernier Billet pour la Gare de Devon** (its chapter-5 return leg, from a train only Halifax remembers arriving) · **Montréal — La Lettre Dépareillée** (one letter, two languages that do not say the same thing — the écart itself, travelling).

**Le Passeur / la Passeuse:** any player who has completed a Serment du Pont (proof they can run an offline verification ritual). Duties on the travel card: public places only; never door-to-door; announce yourself to a venue, not to individuals; each interaction is a real conversation opened with the relic's printed question (Moncton's: « De quoi tu te souviens, d'une rue qui n'existe pas ? »).

**Honest counting of 25, no server:** the relic **is its own ledger** — its back panel is **le Registre des Vingt-Cinq**, 25 numbered lines alternating FR/EN so the registre is bilingual by construction. Line 25 must be signed by two people at once, who write a Serment-style closing code (names + date) — the verifiable completion seal. The Passeur photographs the registre and submits via the existing form; verification is by eye. No on-screen counter ever shows a number the card doesn't physically contain. *v1: provenance moves to Supabase; the physical registre remains the source of truth — the card outranks the database. That's the brand.*

**L'Assemblée des Témoins Fondateurs:** the 25 signers gather publicly; the Passeur performs the Rappel at city scale — one true story of Moncton, one invented; the assembly votes which the city preserves; the result is typed in as passphrase + choice (`PETITCODIAC` then `VRAIE`/`INVENTÉE`), unlocking one of two pre-authored opening mythologies in `content.json`. The 25 names ship permanently as **Témoins Fondateurs de Moncton**. They control the *mythology*, never the *access*. Each city's opening mythology is written to quietly contradict Fredericton's canon on one checkable point (Halifax remembers the Devon train arriving) — dormant Témoin content, the inter-city layer of the brief, costing zero infrastructure today.

### 6.2 La Couture — the canonization pipeline

The twice-yearly moment player moments are sewn into the city. Uses the shipped Proposer une Quête form plus one category: **« Proposer une Mémoire »** (what happened, where, who — consent checkbox per name — the exact French phrase if one exists, submitter name for permanent credit; Archivistes may submit on others' behalf, with consent).

**Curation — le Conseil de la Couture:** Kurt + 2 founding Hôtes + 1 Témoin drawn by date-hash from the season's Témoins (deterministic, auditable, no popularity vote). Four criteria, all required: it happened at a real table or street; the French passes quality review; every named person consented; the coherence rule — canonizing it pushes future players toward another person or another French sentence. Every rejection carries a reason and an invitation to resubmit.

**Shipping:** a `content.json` update; every canonized moment renders with the permanent byline **« cousu dans la ville par [name(s)], Saison [N] »** and is shelved in la Salle des Registres. **Cap 12 per season, floor 0 — never padded.** If only 7 deserve it, 7 ship; a padded canon violates honest numbers.

**Three worked examples of what gets canonized:** a nervous learner orders « un cheval blanc » instead of « un vin blanc »; the table adopts it; the Dolan's NPC now offers, deadpan, « notre fameux cheval blanc — c'est une longue histoire », with the learner's byline. Two players' November Serment code happened to be `LUMIÈRE-PATIENTE-07`; canonized as **le Banc de la Lumière Patiente**, a bench on the bridge tile retelling their two-sentence story — stamped **Document des Témoins nº 2** (the Carnet being nº 1). A player's true submission about their grandfather's job at the *real* Devon railway yard corroborates the impossible station; canonized as the Carnet's ninth page, discoverable in the Devon woods, byline permanent — *ENTRE fragments become findable when a real memory vouches for them.*

### 6.3 The cult-classic machinery, audited against the brief

Recurring phrases only players understand — the Glossaire (§2.5), grown at tables, not written by us. Relics with documented histories — the card ledgers and the Grand Registre. Characters who remember individual players — the fox's lent nickname, Baguette's one sentence, v1 letters on the world's schedule. Synchronized public rituals — 20h02, Thursday, the finale. Mysteries no one can solve alone — the halves, the Serment de l'Entre, the 60-line letter. Consequential seasonal endings — three real ones, chosen by ballots. Physical objects by local artists — the Urne, the edition relics, all paid. Players whose actions become permanent canon — La Couture, the twelfth line, the ninth page. Every box the brief drew, checked without a server.

---

## 7. Season Zero — « La Ville Entrouverte » (The City Ajar)

Six weeks, the 100 founding players (the already-printed invitation batch), four public locations (Dolan's, Jonnie Java, the Boyce, the walking bridge). **The rule of the season: real code for anything deterministic; a human named Kurt for anything that pretends to be a server.** The Wizard-of-Oz is not a compromise — at this scale a game-master is *better* than software: relic mutations can be handwritten; envelopes can smell of coffee.

**Ships as real code (static site, feasible NOW):**
- Le Rappel redemption flow: choice field, deterministic opening chapters, fait-impossible pool of 24 *(trick: invite-code + choice + name hash)*
- Passant·e mode: pale-ink Passeport + retroactive darkening *(trick: local flag flipped at code redemption)*
- Atelier sheets: Rappel coasters with the ritual script + 6 first-relic cards *(trick: print pipeline, card is the database)*
- Relic phrase verifier/receiver: EMBLÈME-CHAPITRE-LIGNÉE-NN *(trick: duoHash word-chain, chapter brute-forced locally)*
- Sceau de Reconnaissance generator/validator + one-hop relatedness check (rejects your inviter and your invitees — all a device can see) *(trick: name+role+ISOweek hash + local invite record)*
- Six Écarts seeded in existing venue dialogues, with the Couture seam-notch and the Registre des Écarts *(trick: authored pairs + one render flag)*
- La Chambre 7 Thursday door *(trick: clock gate 19h53–20h00 + ISO-week hash)*
- The 7-minute dark-screen timer page « La ville écoute » *(trick: a countdown and nothing else)*
- « Proposer une Mémoire » category on the shipped form; « Laisse un souvenir » reframe of the waitlist *(trick: Netlify forms, already live)*

**Faked by hand — la Régie (Kurt as game-master, explicitly labelled):**
- Asymmetric encounters: 3 sealed envelopes per table each Thursday (map / voicemail transcript / forbidden word — the brief's café scene); 8 encounter sets hand-prepared; the private question is an index card dropped in a box
- Relic mutation: reported passes (form/photo) answered with a handwritten inscription or mailed addendum sticker
- One 20h02 ritual (week 4): hand-sent to the founding list; two venues change simultaneously because Kurt briefed two Hôtes; Veilleurs get a decoding task by email
- All curation: the Conseil convenes once, at the finale
- The finale (week 6): **La Première Couture** — first canon batch (≤4 moments, never padded) announced live; the first Témoin vote resolves one disputed memory

**v1 (Supabase), gated on Season Zero thresholds:** attestation ledger; relic provenance sync + famous-relic pages; honest aggregate counters and Le Canon Partagé; the 12-encounter set digitized as date-hashed sealed content; the monthly 20h02 automated; then the Carte à la Rue Manquante departs for Moncton with its first Passeur.

**The do-not-build list (first version, explicit):** no backend, accounts, or relic database (the card is the database; the hash is the server); no branching-narrative engine (envelopes and index cards are the engine); no open chat or DMs; no GPS or proximity anything; no role-detection algorithm — humans attest humans, three at a time; no automated canonization or voting UI (the Conseil is four people at a real table); no push notifications; no second city, no voice, no combat, no inventory beyond relics-in-Passeport, no experience levels, no thousands of markers. Per standing law, forever: no fluency rankings, no popularity scores, no punitive streaks, no gacha, no fake scarcity, no minors.

**Success sentences** (the brief's test, collected without leading — the closing postcard asks only « une phrase sur ce soir »; hosts tally which archetypes appear *unprompted*): "I met someone interesting" · "I need to know what happens to this object" · "My version of the story is different from yours" · "You should come with me next Thursday." Target: all four appear by week 3; sentence four appears weekly. Plus the five shipped pilot metrics (completion ≥60%, 14-day return ≥25%, etc.) and two new, both physically countable: **relic circulation** (% of first relics passed within 7 days) and **Rappel integrity** (% of code activations where the Rappeleur self-reports, at activation, that the two-story ritual was performed — measures the ritual inviter-side; the newcomer is never quizzed, at their first table or ever). Nothing tracked about individuals beyond attendance. Ever.

**Burnout gate, restated:** Season Zero does not start without one co-host. One person cannot run la Régie, Thursdays, and development.

---

## 8. Les Garde-fous

Inherited whole from DESIGN-PRINCIPLES.md, restated as law, with ENTRE's extensions:

1. **No ranking by French ability, ever** — and none by popularity. Roles are lenses, not levels; Sceaux cite conduct only; a beginner's non-comprehension is a playable power (Patterns A and B), not a handicap accommodated.
2. **No punitive streaks.** The Flamme dims, never dies; the Allumette shortens, never shames; a sleeping relic never names its holder.
3. **No pay-to-win, no gacha, nothing purchasable.** Relic cards are gifts; 20h02 and every finale are free forever; artists are paid, players never pay for story.
4. **Honest numbers only.** Every counter is true, including what v0 cannot do — the app says « seule la carte se souvient de tout le monde » instead of pretending. Fiction is labelled fiction (La Page Zéro); tallies are photographed; a padded canon is a violated canon.
5. **18+, attested.** Never a mixed pool with controls; the separate educator instance remains the only path to minors.
6. **Public places only.** Check-in with hosts, minimum parties, fanions not descriptions of people, no live person-locations, no addresses anywhere, the trust ladder under every human contact.
7. **No penalty for declining.** « Ce soir, j'observe » and the Témoin Silencieux are honoured seats; « Le refus n'a pas d'encre »; leaving is always an honourable exit.
8. **Accessibility on every event**, plain-HTML path to every listing, full remote parity — the Veilleurs are canon, not accommodation.
9. **The beginner is never a burden.** Accueil decorates asking; Passeur d'Écart and « Je garde ma lecture » decorate giving; both sides of the imbalance disarmed by ceremony.
10. **The phone is the doorway.** Seven dark minutes face-down is the app's proudest state, now enforced by the app itself. No recording, ever; the game asks afterward and believes you.
11. **« Le nom que la rivière garde. »** The Wolastoqey name is written into the game only by a paid, credited partnership that chooses to write it. Until then the refusal is the canon. Permanent gate.

---

## Pourquoi ça va marcher

The game already taught 100 people to trade word-codes on a bridge; ENTRE only makes every mechanic a longer version of that oath. The FR/EN gap is not a feature bolted onto the fiction — it is the one place where a beginner's ignorance, a fluent speaker's restraint, and a mystery's solution are the same act. Nothing here needs a server, because a printed card, a spoken phrase, and two honest clocks can carry provenance, simultaneity, and consequence — and a database can be added later without moving a single ritual. Every loop ends at a real table, so retention is being expected somewhere on Thursday, which no competitor can ship. And the reveal costs nothing: players go back to pages they already own and find the seam was always there — a game that keeps its oldest promise is the only kind people evangelize.

*L'heure est la porte. La table est la maison. La rivière compte les deux.*

---

*This document binds to: `game/index.html` (Carnet, Aldéric, SPECIALS, INVITE_WORDS, duoHash / Serment du Pont, Rendez-vous du Jeudi), `site/atelier.html` (coaster print pipeline), `game/data/fredericton-pois.json` (real map anchors), DESIGN-PRINCIPLES.md (garde-fous, honest numbers, Wolastoqey partnership law), GAME-BUILD-PLAN.md (v0.x static / v1 Supabase split, invitation economy), DESIGN-MAP-MODE.md (trust ladder L0–L3), DESIGN-EXPEDITIONS.md (roles, mime token, kits, real-table finale protocol).*
