import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Base path for GitHub Pages - use the name of your repo
  // Change 'portfolio' to your actual repository name
  // Leave empty if you're deploying to a custom domain
  base: '/my-portfolio/',
  // Add support for markdown files
  assetsInclude: ['**/*.md'],
});
