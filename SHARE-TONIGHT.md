# bilingua.app — ONE step left, ~2 minutes

Everything else is done and automated: the site (v0.6) deploys itself to GitHub
Pages on every push to `main`, and the custom domain is claimed by the
`site/CNAME` file — no dashboards, no linking, no build settings.

## The one step: Squarespace DNS

**Squarespace → Domains → bilingua.app → DNS settings:**

| Action | Type | Host | Value |
|---|---|---|---|
| **Delete** | A | `@` | `185.158.133.1` *(old Lovable)* — and ANY other A records on `@` |
| **Add** | A | `@` | `185.199.108.153` |
| **Add** | A | `@` | `185.199.109.153` |
| **Add** | A | `@` | `185.199.110.153` |
| **Add** | A | `@` | `185.199.111.153` |
| **Add** | CNAME | `www` | `kurtrgoddard.github.io` |

That's it. Propagation is usually minutes. GitHub then auto-verifies the domain
and issues the SSL certificate (can take a few more minutes — plain-http works
immediately, the padlock follows).

- Test: **https://bilingua.app/play/**
- Works right now, before DNS: https://kurtrgoddard.github.io/Bilingua-App/play/
  (it will redirect to bilingua.app once the domain is live)
- Optional, later: repo **Settings → Pages → Enforce HTTPS** checkbox once the
  cert shows issued. And in Lovable → project settings → domains, remove
  bilingua.app so it stops renewing a certificate it no longer serves.

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

More anytime: `/atelier.html` on the live site (unlisted printing room).
Codes and daily ops: `/regie.html` + `OPERATIONS.md` in the repo.

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

Give each person their own code — every new citizen gets 3 codes of their own
to pass along (that's the invitation economy). The link unfurls with the
pixel-art title screen (og tags are in).

## Later, optional: Netlify (only if you want form submissions in a dashboard)

Forms currently open a pre-filled email to kurtrgoddard@gmail.com on every
host except Netlify — nothing is lost. If you ever want real form capture:
link the repo in https://app.netlify.com/projects/bilingua-quest (base &
publish dir `site`, no build command), move the domain there, and update the
form-fallback hostname check in `site/index.html` + `site/proposer.html`.
Details in `DEPLOY-SITE.md`.
