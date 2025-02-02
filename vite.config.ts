import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/resume/' : '/',
  define: {
    'process.env.API_BASE_URL': JSON.stringify(process.env.NODE_ENV === 'production'? '/dan/resume/': '/dan/resume/'),
  },
  plugins: [react()],
})
