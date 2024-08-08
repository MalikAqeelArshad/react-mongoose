import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://react-mongoose-api.vercel.app',
        // target: 'http://localhost:8000',
        changeOrigin: true,
        // headers: { 'x-database' : 'REACT' },
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  },
});
