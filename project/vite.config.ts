import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public', // Ensure public directory is included in build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true, // Explicitly copy public directory to build output
  },
});