import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    headers: { 'x-database' : 'REACT' },
    proxy: {
      cors: false,
      headers: { 'x-database' : 'REACT' },
      '/api': {
        target: 'https://react-mongoose-api.vercel.app',
        // target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        headers: { 'x-database' : 'REACT' },
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          console.info('configure', proxy, options)
        },
      }
    },
  },
});
