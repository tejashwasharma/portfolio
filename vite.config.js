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
    // styled-components/native ships a CJS build with a top-level
    // require('react-native') that Rollup's default commonjs handling
    // leaves untransformed in the production bundle (works in dev because
    // Vite's esbuild pre-bundler handles it differently) — surfaces as a
    // runtime "require is not defined" crash. Forcing it through esbuild's
    // dependency pre-bundling avoids that.
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ['styled-components/native', 'react-native-web'],
  },
}));
