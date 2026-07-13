# nirstudio : page produits on-demand (ex-NIRLAB / 908 Devices)

## Le projet en une phrase
Page unique **nirstudio.com** qui présente l'offre NIR on-demand (l'ancien NIRLAB), designée par Guillermo, puis intégrée au site **908devices.com** via un lien.

## Contexte
- NIRLAB AG (Florentin Coppey, fondateur) a été racheté par 908 Devices.
- Le domaine nirstudio.com est déjà acheté par le client.
- Guillermo designe la page ; 908 Devices l'intègre ensuite chez eux.
- **Référence design : nirlab.com** (Manrope, accent bleu #0360E8, hero sombre, renders produits, sections blanches aérées).

## Stack
Astro + HTML/CSS/JS vanilla (comme bikeverbier), sortie statique. Node ≥ 22.12 (Astro 7).

- `src/pages/index.astro` : la page
- `src/layouts/Layout.astro` : head, SEO, JSON-LD
- `src/components/*.astro` : sections
- `src/styles/global.css` : design tokens dans `:root`
- `src/data/site.ts` : contenu centralisé

## Commandes
```bash
npm run dev       # localhost:4321
npm run build     # build statique dans dist/
npm run preview   # sert le build
```

## Repo
`GeeRuoss/nirstudio` (privé). Workflow gitleaks en CI (`.github/workflows/secrets-check.yml`).

## Règles (héritées du système Ozzy)
1. **Jamais déployer sans validation de Guillermo.**
2. Jamais de tiret long dans le copy.
3. Jamais d'émojis dans le site : SVG inline uniquement.
4. Assets locaux (images + polices self-hosted).
5. Mobile-first, `text-wrap: balance` sur les titres.
6. Le copy est un DRAFT tant que Guillermo/le client ne l'a pas validé : pas de claims scientifiques inventés.

## Agents (.claude/agents/)
dev, designer, marketing, seo, qa, cybersecurity. Pipeline de review : cybersecurity → (marketing + seo si copy/SEO) → qa en dernier.
