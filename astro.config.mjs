import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://armaturrehberi.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
