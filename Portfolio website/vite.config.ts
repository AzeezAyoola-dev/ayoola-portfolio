import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'portfolio-html-metadata',
      transformIndexHtml(html) {
        return html
          .replace('<!-- figma:lang -->', 'en')
          .replace('<!-- figma:title -->', 'Azeez Ayoola — Product Designer')
          .replace(
            '<!-- figma:head-end -->',
            `<meta name="description" content="Portfolio of Azeez Ayoola, a product designer based in Lagos, Nigeria." />
    <meta property="og:title" content="Azeez Ayoola — Product Designer" />
    <meta property="og:description" content="Portfolio of Azeez Ayoola, a product designer based in Lagos, Nigeria." />`,
          )
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
