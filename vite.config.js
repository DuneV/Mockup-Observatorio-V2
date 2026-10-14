import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En GitHub Actions el sitio se sirve desde /<repo>/ (GitHub Pages)
const repoName = 'Mockup-Observatorio-V2'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
})
