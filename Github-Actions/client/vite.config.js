import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, // Port for frontend
    open: true, // Open browser on start
    proxy: {
      // Proxy API requests to backend
      '/api': {
        target: 'http://localhost:3002', // Backend URL
        changeOrigin: true, // Change origin for proxy
        secure: false, // Allow insecure requests if using HTTP
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: remove '/api' prefix in requests
      },
    },
  },
});