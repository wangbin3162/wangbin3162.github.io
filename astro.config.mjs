// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://wangbin3162.github.io',
  integrations: [mdx(), sitemap(), vue()],
  vite: {
    plugins: [tailwindcss()],
    // 这些依赖在 Astro <script> 中深导入，Vite 启动扫描不到，
    // 运行时才优化会导致 504 Outdated Optimize Dep 并触发 reload。
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger', '@studio-freight/lenis']
    }
  }
})
