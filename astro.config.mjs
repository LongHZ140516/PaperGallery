// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore - Vite version mismatch between Astro (6.4) and @tailwindcss/vite (7.3)
    plugins: [tailwindcss()],
  },

  integrations: [react(), mdx()],

  site: 'https://LongHZ140516.github.io',
  base: '/PaperGalleryWeb'
});