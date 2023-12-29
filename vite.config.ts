import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'virtstw-clib-template',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'react'
        }
      }
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  plugins: [
    react(),
    dts({ rollupTypes: true })
  ],
  assetsInclude: ['/sb-preview/runtime.js']
})
