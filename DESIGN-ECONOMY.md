# Design: L'Économie des Expéditions — how the money works

*Companion to [DESIGN-EXPEDITIONS.md](DESIGN-EXPEDITIONS.md). July 2026. Every number below is grounded in the research memo at [`economy/research-pricing.md`](economy/research-pricing.md) (sources + confidence flags inside). Payments are wired in **Stripe test mode** — see the go-live checklist.*

## The improved prompt (round six)

> **Price the chairs like Uber prices rides — but keep the soul of a supper club.** The first expedition is a gift, always. After that, a seat costs exactly one latte: $5.00, round and honest, because the real product of the price isn't revenue — it's *showing up* (paid seats attend at 70–90%; free ones flake at 40–60%). Hôtes apprentice for three events (one shadowed, two co-hosted, expenses covered) and then earn the majority of every pot, because the platform that pays its hosts worst dies first. Nothing is ever fake: not the founding 100, not a counter, not a countdown.

## The model

| Parameter | Value | Why (evidence in the memo) |
|---|---|---|
| **Free expeditions per person** | **1** — the first, always, forever | The zero-price effect is fully captured at one (Ariely); 2–3 free sessions select free-riders and anchor the price at $0 (gym-trial data: paid intros convert 50–80% vs ~20–40% free). Kurt's "1–3" instinct lands on 1 for players. |
| **Claiming the free seat** | Named ticket + reminder; later, $5 **refundable hold**, released at check-in | Free events no-show at 40–60%; a refundable hold is a commitment device (deposit-contract literature), not a price. |
| **Seat price** | **$5.00 CAD, flat, round** | Round prices win for hedonic/social purchases (Wadhwa & Zhang, JCR 2015); the Canadian latte now averages $5.19 (Square) — and the event *ends at a café*, so the anchor is sitting on the table. Above Meetup's $2 commitment floor. Charm pricing ($4.99) and pay-what-you-want (avg collapses to ~$1; Gneezy, *Science* 2010) both rejected. |
| **Le Carnet de dix** | **$40 / 10 seats** ($4/seat, 20% off) — printed as a **12-slot card with 2 slots pre-stamped** ("your free first" + "founders' bonus"), 6-month expiry | Studio-pack norms (10–20% off); the endowed-progress effect (Nunes & Drèze: 34% vs 19% completion); cuts Stripe drag from 8.9% (on $5) to 3.65%. Stamped physically at the café — ritual value. |
| **The split** | **Hôte 65% · Bilingua 20% · Fonds communautaire 15%** (net of processing) | 20% platform = the Airbnb Experiences anchor; Kurt's 25% instinct was fine but 60% to hosts was below every comparable (Airbnb Experiences hosts keep 80%). The 15% fund is *the hosts' collective asset* (bourse seats, printing, coffee floats), host-governed, spending published. |
| **Host earnings** | Full event (6 paid): $30 pot → **$19.50/event** (~$26/hr for the 45 min). **Floor: $12 from the fund** if only 3 show | Honorarium framing, not gig income — but never insultingly low. |
| **Hôte apprenticeship** | **3 events: 1 shadowed + 2 co-hosted**, expenses covered, then « Hôte confirmé·e » + retroactive first-event bonus | Kurt's 1–3 instinct lands on 3 for hosts: effort-justification (Aronson & Mills 1959) makes the initiation itself build loyalty; co-hosting removes the exploitation edge; no platform pays hosts before vetting (Airbnb Experiences reviews every listing). |
| **The prosocial layer** | **« Expédition suspendue »** — optional **+$5** add-on that pays a stranger's first expedition & coffee | Earmarking raises willingness to pay when the buyer has *agency* (Gneezy's shared-social-responsibility result), not when baked into a fixed price. The caffè sospeso tradition is a ready-made cultural script. Funds the free-first-seat pool. |
| **Tax posture** | Stay under the **$30,000** GST/HST small-supplier threshold (= ~6,000 paid seats/yr — years away); hosts individually nowhere close | CRA rules; NB HST 15% would compress margins ~13% at the cliff. Monitor annually. |
| **Payments** | Stripe: **charge/hold at RSVP, capture at check-in**; push the Carnet as default purchase; monthly aggregated host payouts (Interac/Stripe) | On $5, Stripe's 2.9%+30¢ = 8.9% drag; the pack and batching are the fix. |

## What's wired right now (test mode — no real money can move)

Created on the connected Stripe account (`livemode: false`; account displays as **"NextRound"** — confirm this is the account you want Bilingua on, or create a dedicated one):

| Product | Price | Test payment link |
|---|---|---|
| Expédition — une place | $5.00 CAD (qty 1–6) | https://buy.stripe.com/test_4gM9AUeaq1mK0qD7S66Ri00 |
| Carnet de dix | $40.00 CAD | https://buy.stripe.com/test_9B69AUeaqc1o5KXfky6Ri01 |
| Café suspendu | $5.00 CAD (qty 1–20) | https://buy.stripe.com/test_9B63cw3vM4yWehta0e6Ri02 |

Public-facing page: [`site/billets.html`](site/billets.html) (linked from the vision page; clearly labelled *prévente d'essai / test mode*).

## Go-live checklist (when the first real expedition is scheduled)

1. Lawyer signs off on the paid model + updated terms (LEGAL-ANALYSIS.md flags: paid tier likely makes PIPEDA squarely applicable and is unambiguous "commercial activity").
2. Activate the Stripe account for live mode; recreate the 3 products/links live (10 minutes — the test ones are the template); update the URLs in `site/billets.html`.
3. Turn on Stripe Tax awareness later (small-supplier = no HST now); set statement descriptor to BILINGUA.
4. Add the refundable-hold flow for free-seat claims (Stripe: manual-capture PaymentIntent) — v1 software, not launch-blocking (named tickets + reminders suffice for the pilot).
5. Instrument the two numbers the research says matter most: **no-show rate by price tier** and **free→paid conversion after the post-expedition ritual** (target ≥20%; <15% means fix the follow-up, not the price).

## The five metrics, extended for money

The pilot's five metrics (DESIGN-EXPEDITIONS.md) stay primary. Add two, only after paid seats exist: (6) no-show % paid vs free; (7) Carnet attach rate at the café table (target: 30% of returners).
