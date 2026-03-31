import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'docs', // 设置根目录为 docs
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})