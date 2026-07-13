// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine final : nirstudio.com (déjà acheté par 908 Devices).
export default defineConfig({
  site: 'https://www.nirstudio.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
