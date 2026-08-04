// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://chiku149.github.io',
  base: '/aerocore/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
