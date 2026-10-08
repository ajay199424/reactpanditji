import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { applySeo, pages } from './src/seo/site.js'

const root = dirname(fileURLToPath(import.meta.url))

function seoPages() {
  return {
    name: 'seo-pages',
    transformIndexHtml(html) {
      return applySeo(html, 'home')
    },
    closeBundle() {
      const distIndex = resolve(root, 'dist/index.html')
      const html = readFileSync(distIndex, 'utf8')

      for (const [key, page] of Object.entries(pages)) {
        const target = resolve(root, 'dist', page.file)
        mkdirSync(dirname(target), { recursive: true })
        writeFileSync(target, applySeo(html, key))
      }
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [pathname, query = ''] = (req.url || '').split('?')
        const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
        const match = Object.values(pages).find((page) => page.path !== '/' && page.path === path)
        if (match) {
          req.url = `/${match.file}${query ? `?${query}` : ''}`
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seoPages()],
})
