import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
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
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.info('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            req['x-database'] = 'REACT';
            req.headers['x-database'] = 'REACT';
            proxyReq['x-database'] = 'REACT';
            proxyReq.headers['x-database'] = 'REACT';
            console.info('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.info('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      }
    },
  },
});
