import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',          // Treat *.js files as JSX
    include: /src\/.*\.js$/, // Apply only in src folder
  },
  server: {
    port: 5000,  // Set dev server port to 5000
  },
});
