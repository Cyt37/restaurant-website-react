
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // …
  build: {
    outDir: 'docs'
  },
  base: '/restaurant-website-react/'
});