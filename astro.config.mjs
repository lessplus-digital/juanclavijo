// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.juanclavijo.dev',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
