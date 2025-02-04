import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/dan/resume/' : '/dan/resume/',
  define: {
    'process.env.API_BASE_URL': JSON.stringify(process.env.NODE_ENV === 'production'? '/dan/resume/': '/dan/resume/'),
  },
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
})
