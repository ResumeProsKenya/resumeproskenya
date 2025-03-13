import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'client', // Set root to 'client'
  base: process.env.VITE_BASE_PATH || "/resumeproskenya",
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'client/index.html', // Ensure Vite finds it
    },
  },
})
