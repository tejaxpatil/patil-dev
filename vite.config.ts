import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/patil-dev/',
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': import.meta.dirname + '/src',
    },
  },
});