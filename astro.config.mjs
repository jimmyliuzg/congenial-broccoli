import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs',
      applyBaseStyles: true
    }),
  ],
  output: 'static',
  site: 'https://jimmyliuzg.github.io/',
});
