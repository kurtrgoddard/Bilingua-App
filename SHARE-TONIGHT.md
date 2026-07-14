# Ce soir : mettre bilingua.app en ligne — la checklist de 5 minutes

Everything in the repo is ready. Two web dashboards need ~5 minutes of clicks that
can't be automated from the build sandbox (its egress policy blocks direct uploads,
and there's no Squarespace API access). Do these in order.

## 1. Netlify — connect the repo (~2 min, one-time, auto-deploys forever)

1. Open https://app.netlify.com/projects/bilingua-quest
2. **Site configuration → Build & deploy → Link repository**
3. GitHub → `kurtrgoddard/Bilingua-App` → branch **`main`**
   (merge the v0.6 pull request first — or pick branch `claude/bilingual-game-setup-kpmm4q`
   now and switch to `main` after merging).
4. Base directory: **`site`** · Build command: *(leave empty)* · Publish directory: **`site`**
5. Deploy → the site goes live at https://bilingua-quest.netlify.app (game at `/play/`).

## 2. Netlify — attach the domain (~1 min)

1. Same project → **Domain management → Add a domain** → `bilingua.app`
2. Also add `www.bilingua.app` when prompted (Netlify handles the redirect).
3. Ignore the "check DNS configuration" warning until step 3 below is done.
   SSL certificate provisions itself automatically once DNS points here.

## 3. Squarespace — repoint the DNS (~2 min)

Squarespace account → **Domains → bilingua.app → DNS settings**:

| Action | Type | Host | Value |
|---|---|---|---|
| **Delete** | A | `@` | `185.158.133.1` *(the old Lovable record)* |
| **Delete** | any other Lovable A/CNAME records pointing at 185.158.133.x | | |
| **Add** | A | `@` | **`75.2.60.5`** |
| **Add** | CNAME | `www` | **`bilingua-quest.netlify.app`** |

Propagation is usually minutes for A-record swaps. Test: https://bilingua.app/play/

Optional cleanup (not required for the switch to work): in Lovable → project
settings → domains, remove `bilingua.app` so it stops trying to renew a
certificate for a domain it no longer serves.

## 4. Netlify Forms — turn on email notifications (~1 min)

Project → **Forms** (they register on the first deploy that contains them):
`waitlist`, `feedback`, and the new **`proposer-quete`** (player-submitted quests).
Forms → Settings → **Notifications** → email to kurtrgoddard@gmail.com.

---

## Les 24 codes d'invitation (fresh batch, valid in-game)

```
FOUGERE-VELO-69       AURORE-WOLASTOQ-71    FROSTIVAL-POUTINE-42
CHICKADEE-WOLASTOQ-35 WOLASTOQ-STELLA-11    ACADIE-CANOT-37
HARVEST-HOMARD-31     CANOT-AURORE-81       FOUGERE-VIOLET-44
POUTINE-SIROP-86      FOUGERE-RIVIERE-90    CHICKADEE-POUTINE-89
VELO-STELLA-41        HOMARD-AURORE-38      MOITIE-HOMARD-53
CANOT-PONT-16         CANOT-MARIGOLD-39     FROSTIVAL-SIROP-58
HARVEST-ACADIE-59     MOITIE-CAFE-76        VELO-CAFE-71
VELO-ACADIE-92        MOITIE-CANOT-32       VIOLET-TINTAMARRE-74
```

More anytime: open `/atelier.html` on the live site (unlisted printing room).

## Message à partager ce soir (suggestion)

> 🕹️ **Bilingua Quest** — Fredericton a perdu ses histoires. Chaque vraie
> conversation en français en restaure un morceau.
>
> Explore le vrai centre-ville en pixel-art, gagne des tampons dans ton
> passeport, découvre la mission secrète du jour (toute la ville a la même !),
> et scelle un Serment du Pont avec quelqu'un en personne.
>
> 👉 **https://bilingua.app/play/** · Code d'invitation : `______-______-__`
>
> *Fredericton has lost its stories. Every real French conversation brings one
> back. Free, in your browser, 18+.*

Give each person their own code from the batch above — the game grants every
new citizen 3 codes of their own to pass along (that's the invitation economy).

Backup link while DNS propagates: https://bilingua-quest.netlify.app/play/
