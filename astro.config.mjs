// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// STAGING=1 → build pour GitHub Pages (servi sous /nirstudio/, noindex).
// Sinon → domaine final nirstudio.com (déjà acheté par 908 Devices).
const staging = process.env.STAGING === '1';

export default defineConfig({
  site: staging ? 'https://geeruoss.github.io' : 'https://www.nirstudio.com',
  base: staging ? '/nirstudio' : '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
