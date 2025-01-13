// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://kaeedev.github.io",
  base: "/Proyecto-13-Footer-Dark/",
  integrations: [tailwind()]
});