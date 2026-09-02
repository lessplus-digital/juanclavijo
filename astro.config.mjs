// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.juanclavijo.dev',
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
