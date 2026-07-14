# Deploying the Bilingua Quest site

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
