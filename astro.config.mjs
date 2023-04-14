import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap({
    filter: page => page !== 'https://stargazers.club/secret-vip-lounge'
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});