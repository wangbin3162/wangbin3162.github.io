// @ts-check

import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://wangbin3162.github.io',
  integrations: [sitemap(), vue()],
  vite: {
    plugins: [tailwindcss()]
  }
})
