import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

let config = defineConfig({
  server: { port: 3000 },
  build: { outDir: 'dist/public' },
  plugins: [react()],
});

export default config;
