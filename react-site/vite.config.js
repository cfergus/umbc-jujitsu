import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    deno(),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
  ],
})
