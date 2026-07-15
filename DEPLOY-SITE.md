# Deploying the Bilingua Quest site

> This file lives at the repo root on purpose — it used to sit inside `site/`,
> which meant it was published on the live site (and it names the private atelier page).

## ✅ ALREADY LIVE: GitHub Pages

**https://kurtrgoddard.github.io/Bilingua-App/** serves the site (game at `/play/`)
from the `gh-pages` branch, kept in sync automatically by
`.github/workflows/pages.yml` on every push to `main`. Nothing to do.

Known limitation of the Pages mirror: **Netlify Forms don't run there** — the
waitlist/feedback/proposer forms fall back to opening a pre-filled email
(the fallback fires on every hostname except `*.netlify.app` — if the site
ever moves to Netlify under the custom domain, update that hostname check in
`site/index.html` and `site/proposer.html`). For real form capture
(submissions in a dashboard), finish the Netlify hookup below.

## Custom domain: bilingua.app (via GitHub Pages)

The domain is claimed by **`site/CNAME`** (published to the gh-pages root by
the workflow) — GitHub reads it and configures the Pages custom domain
automatically; no dashboard steps. The only manual piece is DNS, at
Squarespace (Domains → bilingua.app → DNS settings):

- **Delete** the old Lovable record `A @ 185.158.133.1` (and any other `A @` records)
- **Add** four A records on `@`: `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- **Add** `CNAME www → kurtrgoddard.github.io`

GitHub auto-verifies and provisions the SSL cert once the records propagate.
Afterwards (optional): repo **Settings → Pages → Enforce HTTPS**, and remove
the domain from the old Lovable project so it stops renewing its certificate.
The github.io URL 301-redirects to bilingua.app once the domain is active.

## Netlify (recommended as the eventual canonical home — real forms, custom domain)

The Netlify project **bilingua-quest** already exists (created 2026-07-14) and is waiting
for its first deploy: https://app.netlify.com/projects/bilingua-quest → will serve at
**https://bilingua-quest.netlify.app**. The sandboxed build environment couldn't upload
directly (egress policy), so finish with either option — both take about two minutes:

## Option A — connect the GitHub repo (recommended: auto-deploys forever)
1. Open https://app.netlify.com/projects/bilingua-quest → **Site configuration → Build & deploy → Link repository**.
2. Choose GitHub → `kurtrgoddard/Bilingua-App`, branch `main` (after merging PR #1).
3. Base directory: `site` · Build command: *(leave empty)* · Publish directory: `site`.
4. Deploy. Every future push to `main` republishes automatically.

## Option B — one-off deploy from your machine
```bash
npm i -g netlify-cli
cd Bilingua-App/site
netlify deploy --prod --dir . --site 2e4f2cb4-2285-4201-8a39-b12c43310fa1
```

## After the first deploy
- **Forms**: both forms (`feedback` and `waitlist`) are auto-detected on first deploy.
  Check Project → Forms, and turn on email notifications (Forms → Settings →
  Notifications) so submissions reach kurtrgoddard@gmail.com.
- **Domain**: to use bilingua.app → Project → Domain management → Add custom domain.
- The game lives at `/play/`, the thank-you page at `/merci.html`.

## The invitation atelier (keep this to yourself)
- **`/atelier.html`** is your unlinked, unindexed printing room: it generates
  valid invitation codes as printable coaster-style cards (12 to a batch).
  Print the founding 100, photograph the sheets (so "100" stays honest), and
  hand them out — Hôtes first.
- A valid demo code for testing: **`STELLA-WOLASTOQ-11`**
- v0.2 validates codes client-side (a ritual, not a lock). v1 moves redemption
  server-side with real one-time-use tracking.
