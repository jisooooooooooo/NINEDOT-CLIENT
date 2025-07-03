import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@api': '/src/api',
      '@assets': '/src/assets',
      '@common': '/src/common',
      '@page': '/src/page',
      '@route': '/src/route',
      '@shared': '/src/shared',
      '@style': '/src/style',
      '@type': '/src/type',
    },
  },
});
