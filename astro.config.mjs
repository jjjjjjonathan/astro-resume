import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from 'astro-icon';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), icon({
    iconDir: 'src/icons',
    include: {
      mdi: ['email', 'earth', 'map-marker-radius', 'github', 'linkedin', 'phone-classic', 'link-variant', 'star-check']
    }
  }), mdx()],
  site: "https://jjjjjjonathan.github.io",
  base: "/"
});
