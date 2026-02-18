import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This shims process.env for the browser, 
    // ensuring libraries like @google/genai can access the API key.
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});