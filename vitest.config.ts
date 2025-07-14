/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      name: 'chromium',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@common': path.resolve(__dirname, './src/common'),
      '@page': path.resolve(__dirname, './src/page'),
      '@route': path.resolve(__dirname, './src/route'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@style': path.resolve(__dirname, './src/style'),
      '@type': path.resolve(__dirname, './src/type'),
    },
  },
});
