> **DRAFT — NOT LEGAL ADVICE.** AI-assisted research memo for review by a New Brunswick-licensed lawyer. See LEGAL-ANALYSIS.md for the synthesis.

# Bilingua Quest — Canadian Privacy/Anti-Spam Legal Research Memo (for lawyer review; not legal advice)

**Research date:** 2026-07-14. **Method note / limitation:** priv.gc.ca and several law-firm sites returned HTTP 403 to direct fetches from this environment, so OPC-page content below is drawn from search-engine-indexed text of those OPC pages plus corroborating secondary sources (Blakes, Dentons, Carters, Miller Thomson, BLG, Biometric Update, IAPP, DataGuidance). All OPC URLs given are the authoritative pages and should be pulled directly by the reviewing lawyer. Anything I could not corroborate is marked **UNVERIFIED**.

---

## 1. PIPEDA applicability (individual owner, free civic project, New Brunswick)

**Findings**

- PIPEDA applies to "organizations" — statutorily defined to include "an association, a partnership, a person and a trade union" — but only in respect of personal information collected, used or disclosed **in the course of commercial activities** (s. 4(1)(a)). So an individual *can* be covered, but only when acting commercially. Source: PIPEDA, s. 2 & s. 4, [Justice Laws consolidated text](https://laws-lois.justice.gc.ca/eng/acts/p-8.6/FullText.html) (current consolidation, accessed 2026-07-14).
- "Commercial activity" = "any particular transaction, act or conduct or any regular course of conduct that is of a commercial character, including the selling, bartering or leasing of donor, membership or other fundraising lists." Neither the OPC nor courts have set an exhaustive test; assessment is case-by-case. Source: OPC, [Interpretation Bulletin: Commercial Activity](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda-compliance-help/pipeda-interpretation-bulletins/interpretations_03_ca/) (accessed 2026-07-14, via search index).
- Non-profits, charities, clubs, community and advocacy groups are "usually not subject to PIPEDA" because their core activities are not commercial. OPC has said collecting membership fees, organizing club activities, and compiling member lists are **not** commercial; **selling/bartering/leasing** donor or member lists **is**. Sources: OPC, [How PIPEDA applies to charitable and non-profit organizations](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/r_o_p/02_05_d_19/) (accessed 2026-07-14); [Nelligan Law, "PIPEDA & Non-Profit / Charitable Organizations"](https://nelliganlaw.ca/articles/pipeda-non-profit-charitable-organizations-2/) (accessed 2026-07-14).
- The s. 4(2)(b) "personal or domestic purposes" exemption covers individuals collecting info for personal use (e.g., a private address book). Running a public-facing service that solicits other people's data is not a personal/domestic purpose — that exemption is a poor fit here. Source: PIPEDA s. 4(2)(b), [Justice Laws](https://laws-lois.justice.gc.ca/eng/acts/p-8.6/FullText.html); [Lexology commentary on the exemption's individual-only scope](https://www.lexology.com/library/detail.aspx?g=78dd7d76-d1dc-47ed-a244-43ae7548fd1a) (accessed 2026-07-14).
- **New Brunswick: confirmed — no general private-sector privacy law.** Only Alberta, BC and Québec have comprehensive private-sector laws declared "substantially similar" to PIPEDA. NB's only substantially-similar designation is PHIPAA, covering personal *health* information held by designated health custodians — irrelevant here. So if commercial activity exists, PIPEDA is the applicable statute in NB; if not, **no privacy statute squarely applies** (common-law/contractual duties may still). Sources: OPC, [Provincial laws that may apply instead of PIPEDA](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/r_o_p/prov-pipeda/) (accessed 2026-07-14); [Blakes, Doing Business in Canada — Privacy Law](https://www.blakes.com/doing-business-in-canada-guide/section-ix-privacy-law/) (accessed 2026-07-14).

**Where the commercial-activity line likely sits for this project** (analysis; flag for lawyer)

- Today (free game, no revenue, no ads, no sale of anything): very likely **not** commercial activity → PIPEDA likely does not technically apply. **UNVERIFIED as applied** — no OPC finding addresses a free civic game run by an individual.
- Government/foundation **grants** to a nonprofit: fundraising itself is generally treated as non-commercial for nonprofits, *but* there is no definitive test; OPC/courts have said the word "commercial" doesn't automatically exempt nonprofits — individual transactions can be commercial even inside a nonprofit. **Gray zone — UNVERIFIED either way.** Sources: [Nelligan Law](https://nelliganlaw.ca/articles/pipeda-non-profit-charitable-organizations-2/); [David Young Law compliance bulletin, Sept 2021](https://davidyounglaw.ca/wp-content/uploads/2021/09/DYL-Compliance-Bulletin-September-2021.pdf).
- Clear triggers to treat as commercial: **sponsorships in exchange for promotion/advertising**, selling merch, paid tiers, selling or renting the waitlist/email list (expressly named in the statutory definition), or transacting user data with ad networks.

**Implication:** compliance posture should not depend on winning the "non-commercial" argument. The consensus practitioner advice is that, given the uncertainty, organizations in the gray zone should simply comply with PIPEDA — which also future-proofs the planned nonprofit/grants/accounts path and is cheap given the minimal data collected.

**Recommended actions**
- **Now:** Voluntarily comply with PIPEDA's 10 principles (see §5); document the current non-commercial character (no revenue, no ads, no data monetization) in a dated internal note.
- **Before-public-launch:** Never sell/barter/lease the waitlist (that alone is statutory commercial activity); put that promise in the privacy policy.
- **Before-v1-accounts / before grants-sponsorships:** Re-assess with counsel; treat any sponsorship-with-promotion or paid feature as flipping the project into PIPEDA scope definitively.

---

## 2. OPC Tim Hortons decision (PIPEDA Findings #2022-001, June 1, 2022)

**Findings** — Joint OPC / Québec CAI / BC OIPC / Alberta OIPC investigation, report issued June 1, 2022:

1. The app tracked and recorded users' movements "every few minutes of every day," **even when the app was closed**, via third-party SDK (Radar) — contrary to PIPEDA.
2. **Misleading consent:** permission prompts led users to believe location was accessed only in-use.
3. **Inappropriate purpose / proportionality (s. 5(3)):** the continual, "vast" collection of sensitive granular geolocation was **not proportional to the benefits** hoped for (targeted promotion) — and Tim Hortons never even used the data for its stated purpose. Crucially, the OPC held that **consent cannot cure an inappropriate purpose**.
4. **Service-provider contracts:** clauses with Radar were "vague and permissive," lacking adequate contractual protection for personal information in the processor's hands.
5. Remedies accepted: delete all granular location data (including at processors) and implement a **privacy management program** for the app and all future apps.

The OPC's follow-up blog (June 29, 2023) distilled operational takeaways: reasonable-person appropriateness test for purposes; collect only what you need, only when you need it, delete what you stop using; **express consent for sensitive data such as granular geolocation**; meaningful, understandable consent explanations; tight processor contracts; PIAs and privacy-by-design up front.

**Sources:** OPC, [PIPEDA Findings #2022-001](https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2022/pipeda-2022-001/) (2022-06-01); OPC news release, ["Tim Hortons app violated privacy laws…"](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2022/nr-c_220601/) (2022-06-01); OPC blog, ["One year later: 10 takeaways for businesses"](https://www.priv.gc.ca/en/blog/20230629_02/) (2023-06-29); [BLG, "Key takeaways for businesses when using location tracking technologies"](https://www.blg.com/en/insights/2022/06/key-takeaways-for-businesses-when-using-location-tracking-technologies) (June 2022); [Miller Thomson analysis](https://www.millerthomson.com/en/insights/cybersecurity/mobile-apps-what-businesses-should-know/); [CBC News](https://www.cbc.ca/news/business/tim-hortons-app-report-1.6473584) (2022-06-01).

**Implications for future location features (meetups, geo-quests):** location data is treated as **sensitive → express, opt-in consent**, in-use-only access, honest permission prompts, purpose actually used and proportional, no background tracking, defined retention/deletion, and written contracts with any location SDK/service. "Consent" screens cannot legitimize over-collection.

**Recommended actions**
- **Now:** Nothing (no location collection exists — keep it that way by default).
- **Before any location/meetup feature (before-v1-accounts):** design to coarse/ephemeral location or user-picked venue instead of GPS; if GPS is ever used: foreground-only, express granular consent, clear just-in-time notice, defined retention, PIA, and vetted processor contract.

---

## 3. OPC age-assurance guidance (verifying the "May 4, 2026" claim)

**Verification of the external document's claim:** **Substantially CONFIRMED, with one nuance.** The OPC *did* launch age-assurance guidance on **May 4, 2026**, and it *does* direct organizations to minimize personal information (least-privacy-intrusive method proportionate to risk). Nuance: as of today the two documents are open for **public comment until August 4, 2026** — i.e., they are current-but-consultative (Blakes calls them "draft"); the OPC news release calls it a launch of "new guidance." A lawyer should treat it as the OPC's stated position, subject to revision after Aug 4, 2026.

**Timeline (all confirmed):**
- **June 10, 2024** — OPC launches exploratory consultation on privacy implications of age assurance. Source: [OPC news release, 2024-06-10](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2024/nr-c_240610/).
- **~March 2025** — "What We Heard" consultation report. Sources: [OPC report page](https://www.priv.gc.ca/en/about-the-opc/what-we-do/consultations/completed-consultations/consultation-age/report_age_2025/); [Biometric Update, March 2025](https://www.biometricupdate.com/202503/canadas-privacy-regulator-releases-results-of-age-assurance-consultation).
- **May 4, 2026** — two guidance documents published: [Assessing whether and how to use age assurance – Guidance for websites and online services](https://www.priv.gc.ca/en/privacy-topics/age-assurance/aa-gd-web/) and [Designing age assurance to be privacy-protective – Guidance for developers](https://www.priv.gc.ca/en/privacy-topics/age-assurance/aa-gd-developers/), plus a [Policy Note](https://www.priv.gc.ca/en/privacy-topics/age-assurance/aa-policy-note/). Sources: [OPC news release, 2026-05-04](https://www.priv.gc.ca/en/opc-news/news-and-announcements/2026/nr-c_260504/); [Blakes, "OPC Releases Draft Age Assurance Guidance"](https://www.blakes.com/insights/opc-releases-draft-age-assurance-guidance/) (May 2026); [Dentons Data](https://www.dentonsdata.com/the-canadian-privacy-commissioners-new-age-assurance-guidance-impacts-on-business/); [Biometric Update, May 2026](https://www.biometricupdate.com/202605/canada-regulator-backs-privacy-preserving-age-assurance); [IAPP](https://iapp.org/news/a/privacy-commissioner-of-canada-delivers-keynote-address-at-iapp-canada-symposium-2026).

**What the guidance says (per the sources above):**
- Age-assurance methods sit on a spectrum: **age declaration/self-attestation** (least intrusive) → **age estimation** (AI/biometric) → **age verification** (government ID, most intrusive).
- Core rule: **risk-based proportionality + least-privacy-intrusive method** — collect no more (and no more sensitive) information than the level of assurance warranted by the identified risk; higher assurance is justified where there are **legal access restrictions or significant harms**. Age checks should not reveal identity and should validate age only for the specific access purpose; escalate intrusiveness only as necessary.
- **Self-declaration is expressly contemplated as proportionate for low-risk services/aspects** (e.g., age-banding on a children's service; signing up for a generic newsletter); low-risk services should first ask whether any age check is needed at all. The OPC's earlier consultation position was that age-assurance systems "should be restricted to cases that pose high risk to the best interests of young people." Sources: [Blakes](https://www.blakes.com/insights/opc-releases-draft-age-assurance-guidance/); [Carters, "New OPC Guidance on Age Verification and Privacy"](https://www.carters.ca/new-opc-guidance-on-age-verification-and-privacy/); [OPC briefing note on age assurance, 2024-05-27](https://www.priv.gc.ca/en/privacy-and-transparency-at-the-opc/proactive-disclosure/opc-parl-bp/secu_20240527/bn-age_20240527/). **UNVERIFIED at quote level:** I could not read the guidance's exact wording on self-declaration first-hand (priv.gc.ca blocked); the characterization above is consistent across ≥3 independent secondary sources.

**Implication for Bilingua Quest:** an 18+ self-attestation checkbox for a free civic game — where the restriction exists for community-safety reasons, not a legal content restriction (not pornography, gambling, alcohol/cannabis) — fits squarely in the OPC's low-risk band. Demanding ID verification would arguably be *over*-collection and offside the OPC's own data-minimization expectation. The checkbox approach is defensible; what matters is documenting the risk assessment. For future real-world meetups the risk profile rises (adult strangers + minors), so a somewhat stronger measure at *meetup registration* (not game access) may become proportionate — but still likely declaration-plus-process (e.g., attestation at signup, venue-level checks) rather than ID upload.

**Recommended actions**
- **Now:** Keep the checkbox; store no birthdate; write a one-page documented rationale citing the OPC guidance's proportionality framework.
- **Before-public-launch:** State the 18+ policy and its safety rationale in the ToS/policy; re-check the OPC pages after **Aug 4, 2026** (comment period closes; final text may change).
- **Before meetups (before-v1-accounts):** Re-run the risk assessment for the meetup flow specifically; consider attestation + in-person safeguards; avoid ID collection unless a specific identified risk justifies it.

---

## 4. Netlify Forms (name/email) + PIPEDA cross-border transfer

**Findings**

- OPC's **Guidelines for Processing Personal Data Across Borders (January 2009)** — reaffirmed as status quo in **September 2019** after the OPC abandoned its proposed consent-based reinterpretation: a transfer to a service provider (including outside Canada) is a **"use," not a disclosure**; **no separate consent is required** if the data is used for the original purpose. Instead: (a) **accountability** — the transferring organization remains responsible and must ensure, **primarily by contract**, a "comparable level of protection" while data is with the processor; (b) **transparency** — notify individuals that their information **may be processed in a foreign country and may be accessible to courts, law enforcement and national-security authorities of that country**, ideally at collection time. PIPEDA does not prohibit cross-border transfers and has no localization rule. Sources: OPC, [Guidelines for processing personal data across borders](https://www.priv.gc.ca/en/privacy-topics/airports-and-borders/gl_dab_090127/) (2009-01-27, accessed 2026-07-14); [Norton Rose Fulbright, "OPC says it's status quo…"](https://www.nortonrosefulbright.com/en/knowledge/publications/d34135df/office-of-privacy-commissioner-says-its-status-quo-on-consent-requirements) (Sept 2019); [Torys](https://www.torys.com/en/our-latest-thinking/publications/2019/09/opc-not-changing-guidelines-on-transfers-for-processing) (2019); [BLG, 2020 affirmation](https://www.blg.com/en/insights/2020/08/opc-affirms-requirements-for-transferring-personal-information-across-borders-for-processing).
- **Netlify facts:** Netlify is a US company; form submissions are stored in Netlify's own database; Netlify offers a standard **DPA** (customer = controller, Netlify = processor) incorporated into its terms, plus a published **subprocessors list**. Sources: [Netlify Forms docs](https://docs.netlify.com/manage/forms/submissions/); [Netlify GDPR/CCPA page](https://www.netlify.com/gdpr-ccpa/); [Netlify subprocessors](https://www.netlify.com/legal/subprocessors/); [Netlify DPA (PDF)](https://www.netlify.com/v3/static/pdf/netlify-dpa.pdf) (all accessed 2026-07-14). **UNVERIFIED:** the exact data-center region where Forms submissions reside (community-forum answers indicate US infrastructure; no authoritative residency commitment found). Safe drafting assumption: stored in the US.

**Implication:** collecting name/email through Netlify Forms is permissible with (1) identified purpose at the point of collection, (2) a privacy-policy statement that the data is processed by Netlify (a US provider) and **may be subject to access by US courts/law-enforcement**, and (3) reliance on Netlify's DPA/terms as the contractual "comparable protection." Data is low-sensitivity, so this is proportionate.

**Recommended actions**
- **Now:** Add one sentence beside each form: purpose + "processed by our hosting provider Netlify in the United States; may be accessible to authorities there under US law." Keep forms un-prechecked and single-purpose.
- **Before-public-launch:** Save a copy of Netlify's DPA/ToS as the accountability record; set a routine to delete stale submissions from the Netlify dashboard (limiting retention); email privacy@netlify.com if storage-region confirmation is wanted.
- **Before-v1-accounts:** Redo this analysis for whatever backend replaces/augments Netlify (Supabase etc.) — same OPC guideline applies.

---

## 5. Privacy policy contents (Schedule 1 mapped) + PIA status

**Findings** — PIPEDA Schedule 1's ten fair-information principles are the ground rules; Openness (Principle 8) requires practices be "understandable and easily available." Sources: OPC, [PIPEDA fair information principles](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/p_principle/) (accessed 2026-07-14); OPC, [PIPEDA requirements in brief](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda_brief/).

Mapping to this product (what the policy must actually say):

| Principle | Concrete content for Bilingua Quest |
|---|---|
| 1 Accountability | Name a privacy contact (Kurt / project email); state responsibility extends to data at Netlify |
| 2 Identifying purposes | Feedback form → responding/improving the game; waitlist → launch notification emails. Nothing else. |
| 3 Consent | Submitting the form = consent for that stated purpose; consent withdrawable anytime; no pre-checked boxes |
| 4 Limiting collection | Only name + email; game saves stay in the browser (localStorage — never transmitted); no accounts, no tracking, no analytics, no cookies beyond localStorage |
| 5 Limiting use/disclosure/retention | No sale/sharing; used only for stated purposes; retention period + deletion practice for form submissions |
| 6 Accuracy | Users can ask to correct their info |
| 7 Safeguards | Data held in Netlify's secured systems; access limited to owner |
| 8 Openness | This policy, plain language, linked from the game; dated; change log |
| 9 Individual access | How to request a copy or deletion of your name/email (email the contact; note localStorage is user-controlled — clearing browser data deletes saves) |
| 10 Challenging compliance | Complain to the contact; escalation right to the OPC (with OPC link) |
| + Cross-border (from §4) | Netlify/US processing + foreign-access notice |
| + Age (from §3) | 18+ self-attestation; no birthdate stored |

**PIA:** Under PIPEDA there is **no statutory PIA requirement for private-sector organizations** — PIAs are mandatory only for federal government institutions (Treasury Board policy). The OPC strongly recommends them as best practice for higher-risk initiatives and publishes a process guide; the Tim Hortons takeaways explicitly urge PIAs for apps. Sources: OPC, [Guide to the Privacy Impact Assessment Process](https://www.priv.gc.ca/en/privacy-topics/privacy-impact-assessments/gd_exp_202003/) (March 2020, accessed 2026-07-14); [Enzuzo, PIPEDA PIA overview](https://www.enzuzo.com/blog/pipeda-privacy-impact-assessments); OPC [10-takeaways blog](https://www.priv.gc.ca/en/blog/20230629_02/) (2023-06-29). → For the meetup features: **best practice, not legally required** — but strongly advisable because meetups combine identity, location, minors-exclusion and physical safety.

**Recommended actions**
- **Now:** Draft the policy per the table (one page is enough at this data footprint).
- **Before-public-launch:** Publish it, linked from the game and both forms; date it.
- **Before-v1-accounts / meetups:** Run a lightweight PIA using the OPC guide structure (data flows, risks, mitigations); revisit the policy for accounts (new purposes, retention, safeguards, breach-response plan — note PIPEDA's mandatory breach reporting for "real risk of significant harm" will matter once a server holds data).

---

## 6. CASL — emailing the waitlist later

**Findings**

- A **commercial electronic message (CEM)** is one whose purpose (or one of whose purposes) is to encourage participation in "commercial activity… whether or not done with an expectation of profit." CASL applies to nonprofits; only **registered charities** get an exemption, and only for CEMs whose *primary purpose is fundraising*. A purely informational email about a free game may not be a CEM at all — but if it ever promotes merch, paid events, sponsors' offerings, or donations-with-perks, it is. Sources: [CRTC CASL FAQ](https://crtc.gc.ca/eng/com500/faq500.htm) (accessed 2026-07-14); [Drache Aptowitzer, charities & CASL](https://drache.ca/articles/what-charities-need-to-know-about-canadas-anti-spam-law-casl/); [Ontario Nonprofit Network CASL guide](https://theonn.ca/our-work-2020/our-regulatory-environment/canadas-anti-spam-legislation-nonprofit/).
- Three requirements for any CEM: **(1) consent, (2) identification, (3) unsubscribe.** **Express consent** = a proactive opt-in (never pre-checked), obtained with disclosure of who is seeking it and that consent can be withdrawn; it does not expire. **Implied consent** (existing business/non-business relationship, conspicuous publication, etc.) is time-limited and fragile. A waitlist signup that clearly says "sign up to receive email updates about Bilingua Quest" is textbook **express consent** — but the consent record (what was said, when, how) must be kept, since the sender bears the burden of proof. Sources: [ISED, "Getting consent to send email"](https://ised-isde.canada.ca/site/canada-anti-spam-legislation/en/getting-consent-send-email) (accessed 2026-07-14); [CRTC implied-consent guidance](https://crtc.gc.ca/eng/com500/guide.htm).
- **Identification in every CEM:** sender's name (and anyone on whose behalf it's sent), a **current mailing address**, plus phone, email, or web address — contact info valid ≥60 days after sending. **Unsubscribe:** functional, at no cost, effected within **10 business days**, and the mechanism must work for ≥60 days after the message. Sources: [CRTC FAQ](https://crtc.gc.ca/eng/com500/faq500.htm); [ISED CASL overview](https://ised-isde.canada.ca/site/canada-anti-spam-legislation/en/understand-canadas-anti-spam-legislation/understand-canadas-anti-spam-legislation-sub/understanding-canadas-anti-spam-legislation).
- **Stakes:** AMPs up to **$1M per violation for an individual** (Kurt personally, pre-incorporation) and $10M for organizations; CRTC has fined individual senders (e.g., $75K in 2021). The private right of action remains suspended. Sources: [BLG CASL enforcement decisions](https://www.blg.com/en/insights/2017/11/casl-enforcement-decision--interpretive-guidance-for-compliance-and-penalties); [BLG, $75K individual penalty](https://www.blg.com/en/insights/2021/03/casl-enforcement-75k-penalty-imposed-on-individual-spammer) (2021); [CanadianCharityLaw.ca on PRA suspension](https://www.canadiancharitylaw.ca/blog/canada_suspend_part_of_casl_relating_to_private_rights_of_action_but_rest_a/).
- Also note: an email *requesting* consent is itself a CEM — you can't email people to ask permission to email them.

**Recommended actions**
- **Now:** Word the waitlist form as explicit opt-in ("Yes, email me updates about Bilingua Quest"), no pre-checked box, name the sender; keep timestamped records of signups (Netlify submissions serve as the consent log — export/back them up).
- **Before first email to the waitlist (before-public-launch):** Template must carry: project + Kurt's/entity's name, a real mailing address (a PO box works), contact email/site, and a working one-click unsubscribe; honor unsubscribes ≤10 business days; keep the address/contact valid 60+ days.
- **Before-v1-accounts / nonprofit:** If content starts promoting anything commercial (sponsors, merch, paid events, donation campaigns), treat every send as a CEM; only re-examine the charity exemption if the entity actually becomes a **registered charity** (a mere nonprofit gets no exemption).

---

## Consolidated priority list

**Now:** voluntary-PIPEDA posture + dated non-commercial memo; keep 18+ checkbox (no birthdate) + documented proportionality rationale; opt-in wording on waitlist; per-form purpose + Netlify/US notice.
**Before-public-launch:** publish plain-language privacy policy (table in §5); save Netlify DPA; retention/deletion routine for form data; CASL-compliant email template ready; re-check OPC age-assurance pages after 2026-08-04 (guidance may be finalized/revised).
**Before-v1-accounts / meetups / funding:** lawyer re-review of commercial-activity status on any sponsorship/grant; lightweight PIA for accounts + meetups (OPC guide); location features designed to Tim Hortons standards (express consent, foreground-only, proportional, contracted processors); breach-response plan once a server exists.

**Key UNVERIFIED items for the lawyer to confirm from primary sources:** (1) exact wording of the May 4, 2026 OPC guidance on self-declaration (I had only secondary-source corroboration; also confirm whether it was finalized after the Aug 4, 2026 comment deadline); (2) Netlify Forms' storage region; (3) whether grant funding alone could constitute commercial activity — no authority found either way; (4) application of PIPEDA to a free game run by an individual — no on-point OPC finding exists.
