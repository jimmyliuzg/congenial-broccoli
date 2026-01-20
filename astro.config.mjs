import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs',
      applyBaseStyles: true
    }),
    react()
  ],
  output: 'static',
  adapter: cloudflare(),
  site: 'https://congenial-broccoli.pages.dev',
});
