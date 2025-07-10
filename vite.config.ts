/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const isTest = process.env.NODE_ENV === 'test';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
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
  test: isTest
    ? {
        projects: [
          {
            extends: true,
            plugins: [
              storybookTest({
                configDir: path.join(dirname, '.storybook'),
              }),
            ],
            test: {
              name: 'storybook',
              browser: {
                enabled: true,
                headless: true,
                provider: 'playwright',
                instances: [
                  {
                    browser: 'chromium',
                  },
                ],
              },
              setupFiles: ['.storybook/vitest.setup.ts'],
            },
          },
        ],
      }
    : undefined,
});
