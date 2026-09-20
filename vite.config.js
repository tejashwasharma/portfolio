import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactNativeWeb from 'vite-plugin-react-native-web';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), reactNativeWeb()],
  define: {
    __DEV__: JSON.stringify(mode !== 'production'),
    global: 'window',
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
}));
