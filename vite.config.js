import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: false,
    proxy: {
      '/databases': {
        target: 'https://cloud.appwrite.io/v1',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
