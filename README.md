# nirstudio.com

Page unique présentant **NIR Studio**, l'offre de solutions NIR on-demand de l'ex-NIRLAB, désormais **908 Devices**. Designée par Ruoss! Communication, destinée à être intégrée au site 908devices.com via un lien.

- **Design de référence** : nirlab.com (Manrope, bleu #0360E8, hero sombre)
- **Stack** : Astro + HTML/CSS/JS vanilla, sortie 100 % statique
- **Domaine** : nirstudio.com (acheté par le client)

## Développement

```bash
npm install
npm run dev       # localhost:4321
npm run build     # build dans dist/
```

### Polices (requises, hors repo)

Les polices Crystal sont sous licence et ne sont **pas** dans ce repo. En local,
copier `Crystal-Bold.woff2` et `Crystal-Book.woff2` dans `src/fonts/` (source :
repo privé `nirstudio-assets` ou le OneDrive NIRLAB). La CI les injecte
automatiquement au build via une deploy key.

## Staging

Chaque push sur `main` déploie sur GitHub Pages :
**https://geeruoss.github.io/nirstudio/** (build `STAGING=1` : base path
`/nirstudio` + `noindex`, le SEO est réservé au futur domaine nirstudio.com).

## Statut

Squelette V0 : structure, design system et copy DRAFT (à valider par le client). Les visuels produits (renders 3D) seront fournis par 908 Devices / NIRLAB.
