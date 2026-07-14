# Legal Analysis — Bilingua Quest (Fredericton, New Brunswick, Canada)

> **DRAFT — NOT LEGAL ADVICE.** Prepared July 14, 2026 with AI research assistance from web sources. Every conclusion here must be reviewed by a New Brunswick–licensed lawyer before public launch, and every flagged item verified against primary sources. Full research memos with complete citations: [`legal/research-privacy.md`](legal/research-privacy.md), [`legal/research-events.md`](legal/research-events.md), [`legal/research-ip.md`](legal/research-ip.md).

**The product today:** a free browser game (no accounts, no analytics, no location, localStorage saves only), two Netlify forms (feedback, waitlist), an 18+ self-attestation, real Fredericton venue names used affectionately, an invitation-scarcity launch ("founding 100"), and a printable kit for volunteer-hosted group walking events. Owner: an individual (Kurt Goddard).

---

## 1. Privacy, age, email (details: research-privacy.md)

| Issue | Posture | Verdict & action |
|---|---|---|
| **PIPEDA applicability** | Free, no revenue, no data monetization → likely *not* "commercial activity"; NB has no private-sector privacy law | Don't rely on the exemption: **voluntarily comply** (cheap at this footprint). Never sell/rent the waitlist — that alone is statutorily commercial. Re-assess on any sponsorship/paid tier. |
| **Age assurance (18+)** | Checkbox self-attestation, no birthdate stored | **Correct approach.** OPC's age-assurance guidance (launched May 4, 2026; comment period to Aug 4, 2026) prescribes the least-intrusive method proportionate to risk; ID collection here would be *over*-collection. Keep a one-page documented rationale; re-check guidance after Aug 4, 2026. Meetup registration may warrant modestly more later — process, not ID uploads. |
| **Location data** | None collected — ever | Keep as default. If ever added: express opt-in, foreground-only, no movement history, PIA first (the OPC's Tim Hortons decision, PIPEDA Findings #2022-001, is the cautionary template; consent cannot cure over-collection). |
| **Netlify forms** | Name/email to a US processor | Permitted with transparency: purpose stated at the form + note that Netlify processes in the US and data may be accessible to US authorities. **Done** (privacy page). Save Netlify's DPA; delete stale submissions periodically. |
| **CASL (emailing the waitlist)** | Express opt-in wording already used | Before the first send: sender identification, a real mailing address, working unsubscribe honoured ≤10 business days; keep Netlify submissions as the consent log. Penalties are real (up to $1M for individuals) — take the checklist seriously. |
| **Privacy policy** | Drafted (site/privacy.html), plain language, maps PIPEDA's 10 principles | Lawyer review before launch; rewrite + lightweight PIA before v1 accounts/meetup features; breach-response plan once any server holds personal data. |

## 2. Real-world events (details: research-events.md)

| Issue | Finding | Action |
|---|---|---|
| **Organizer negligence** | Ordinary duty of reasonable care; low incremental risk for small adult walking groups; organizer personally exposed until incorporation | Safety protocol + route pre-walk + incident log (kit has these). CGL insurance **before the first pilot** (~$450+/yr, $2M; Marsh NPCG / Zensurance / local broker). |
| **Occupiers' liability (NB)** | **NB abolished occupiers' liability categories effective June 1, 1994** (Law Reform Act, now RSNB 2011 c 184 s 2) — ordinary negligence governs; venue/City bear premises duties, organizer is not an occupier of streets or cafés | Route selection avoids known hazards; winter cancellation criteria; partner venues keep their own CGL + liquor liability. |
| **Waivers** | Enforceable in Canada if clear, explicit about negligence, unhurried, signed by adults (*Karroll* line) — but for low-risk free events, informed-consent + assumption-of-risk is the right register, with insurance as the real protection | Kit's participation acknowledgment is drafted in that register — **lawyer must review before first use**. No NB-specific waiver precedent found (flagged). |
| **Alcohol** | *Childs v Desormeaux* (SCC 2006): no social-host duty where host doesn't serve; licensed venue bears the commercial-host duty. **NB drinking age is 19** | Kit policy (added): event ends on arrival; organizer never supplies alcohol; taxi info if impaired; **pub-ending variants 19+**; alcohol-free endings monthly. |
| **Volunteers** | **NB has no volunteer-protection statute** (NS's is unique); protection = incorporation + insurance | Volunteer host agreement + briefing before pilot; incorporate before scale (see §6). |
| **Photos** | NB: no statutory privacy tort; risk concentrates on *publication* of identifiable people without consent | Kit: 3-option photo consent per person per night; postcards (not faces) are the shareable. |
| **City of Fredericton** | Special-event permits target space-reserving events (60 working days; 90 with liquor); a ≤6-person walking group almost certainly needs nothing, but no numeric threshold found; Officers' Square is a City-programmed park (and Provincial Heritage Place) | **Email the City's special-events office now** describing the format and asking in writing whether recurring small meetups at the Square need anything. No busking-like performance without a permit. |

## 3. IP, brand, honest marketing (details: research-ip.md)

| Issue | Finding | Action |
|---|---|---|
| **Real venue names** | In-world referential depiction is likely not trademark "use" (s. 4, *Clairol* line); depreciation (s. 22) needs registered marks + likely damage (*Veuve Clicquot*); passing off needs misrepresentation. **No Canadian expressive-use doctrine** — don't import US *Rogers* thinking | **Editorial rules (canon):** nothing unsavoury ever happens at a named real venue; names in-world only — never in the title, logo, or marketing hooks; original pixel art only, never traced logos. Disclaimer (terms page) + goodwill letters + logged remove-on-request. |
| **Kurt's copyright** | Automatic on creation; registration optional (~$65, presumption of ownership); the real proof is dated records | Git history is the brand file — keep it. Optional CIPO registration. © notice shipped. |
| **Trademark** | "BILINGUA" alone risks a descriptiveness objection (s. 12(1)(b)); **"BILINGUA QUEST" composite is materially stronger.** Fees 2026: $491.06 first class + $149.04/extra (classes 41 + 9 ≈ $640); ~8–9 months to examination, ~1.5–2.5 yrs total | **Manual CIPO database conflict search first (free — was not performable from this environment).** File the composite word mark if clear. Use ™ until registered. Register bilinguaquest.ca + handles. |
| **Scarcity marketing (Competition Act)** | Honest limited-availability claims are fine; false scarcity, resetting timers, fabricated demand cross the line (Bureau Digest Vol. 6; general-impression standard; Cineplex $38.9M shows enforcement is real) | Our honest-numbers rule is the compliance program: keep proof the 100 were printed; any counter tracks real redemptions; never reuse "founding batch"; no countdown timers without real deadlines. |

## 4. Accessibility & languages (details: research-ip.md §4–5)

- **No accessibility statute binds this project today**: the Accessible Canada Act covers federal entities; NB's Accessibility Act (SNB 2024, c 27 — Bill 47) has no private-sector standards yet. The live hook is the **NB Human Rights Act** (services to the public; duty to accommodate) → keep the accessibility feedback channel and respond in good faith.
- **Target WCAG 2.2 AA voluntarily** (exceeds every current Canadian benchmark; strengthens grant applications). v0.4 ships: settings modal (instant text, large text, high contrast), reduced-motion respect, keyboard access, EN subtitles everywhere.
- **Plain language:** aim for ~Grade 8 per the *Canada.ca Content Style Guide*; method per **CAN-ASC-3.1:2025** (which deliberately avoids grade formulas — attribute correctly).
- **Official languages:** OLA NB binds the public sector, not this project; bilingual delivery is voluntary and mission-driven — but any Canadian Heritage funding agreement will carry OL clauses (bilingual delivery "as the clientele requires") — read before signing; it's a clause this project already satisfies by design.

## 5. Wolastoqey naming (details: research-ip.md §6)

- **Dual naming is the accurate, respectful practice**: "the Wolastoq (Saint John River)" — the river has *not* been officially renamed (province declined, April 2023). Product updated accordingly.
- Land acknowledgment modelled on UNB's elements (unceded/unsurrendered Wolastoqey territory; Peace and Friendship Treaties, first signed 1725, did not surrender land) — **have the wording reviewed by Wolastoqey Nation in New Brunswick or Sitansisk (St. Mary's) before public launch**, and pair it with a concrete action (honoraria for content review) so it isn't performative.
- **Bright line:** public geographic names and acknowledgment = respectful; sacred stories, Koluskap, ceremony, or Wolastoqey-language content beyond public names = partnership first, compensated and credited. Nothing in the current game crosses the line.

## 6. Structure (details: research-ip.md §7, research-events.md §5)

- **Correction:** NB has *no* modern nonprofit statute — still the Companies Act (1973), Part II, minimum 3 applicants. The solo-founder route is **federal CNCA** (~$200, 1 director until "soliciting" >$10K/yr triggers a 3-director board) + NB extra-provincial registration. Interim: fiscal sponsorship by an existing org (per STRATEGY.md).
- Sequence: stay unincorporated/sponsored → CNCA when a funder requires it or events recur → directors' insurance once a board exists.

## The consolidated to-do list

**Now ($0):** email the City about Officers' Square meetups (get it in writing) · run the free CIPO conflict search for BILINGUA QUEST · register bilinguaquest.ca · keep the printed-invitations proof · dated internal note on non-commercial status.
**Before the first pilot:** lawyer review of the kit's acknowledgment + photo consent · CGL insurance quote/bind ($2M) · volunteer host briefing · 19+ rule live for pub endings.
**Before public launch:** lawyer review of privacy/terms pages · Wolastoqey review of the acknowledgment · venue goodwill letters · CASL-compliant email template · re-check OPC age-assurance guidance (post–Aug 4, 2026).
**Before v1 (accounts/meetup software):** lightweight PIA · rewrite privacy policy · breach-response plan · re-assess PIPEDA status on any funding · trademark filing decision · CNCA incorporation.

## Key corrections this analysis surfaced (vs. common assumptions)

1. NB abolished occupiers' liability **in 1994**, not 2011 (2011 is just the revised-statutes citation).
2. NB has **no volunteer-protection statute** and **no modern nonprofit act** — plan around CNCA.
3. The Grade-8 plain-language rule is from the **Canada.ca Style Guide**, not Accessibility Standards Canada (whose 2025 standard rejects grade formulas).
4. **NB's drinking age is 19** — the game's 18+ floor is not enough for pub-ending events.
5. The Wolastoq has **not** been officially renamed — dual naming is correct.
6. The OPC's age-assurance guidance **is real and dated May 4, 2026**, but is in a comment period until Aug 4, 2026 — re-check after.
