// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mechanith.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // 'css-variables' makes Shiki emit its colors as CSS variables
      // instead of fixed hex — so we theme code blocks from OUR palette
      // (defined in global.css). Shiki highlights at build time; zero JS.
      theme: 'css-variables',
      // Flip to false if scrollbars are best.
      wrap: true,
    },
  },
});