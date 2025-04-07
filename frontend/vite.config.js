import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, './'), // Points to frontend/
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: '../dist', // Output outside frontend/
  },
  plugins: [react()],
});