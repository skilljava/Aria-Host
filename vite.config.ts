import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
    },
  };

  if (command !== 'serve') {
    // Only use the repo name as base path when building for production (GitHub Pages)
    config.base = '/Aria-Host/';
  }

  return config;
});
