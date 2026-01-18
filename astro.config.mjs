import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs',
      applyBaseStyles: true // let Tailwind inject base styles
    }),
    react()
  ],
  output: 'static',
  site: 'https://yourname.com', // replace later
});
