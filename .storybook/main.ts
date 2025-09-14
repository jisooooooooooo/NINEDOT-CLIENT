import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(vanillaExtractPlugin());
    config.plugins.push(svgr());
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      include: ['@vanilla-extract/css'],
    };
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        '@': resolve(__dirname, '../src'),
        '@api': resolve(__dirname, '../src/api'),
        '@assets': resolve(__dirname, '../src/assets'),
        '@common': resolve(__dirname, '../src/common'),
        '@page': resolve(__dirname, '../src/page'),
        '@route': resolve(__dirname, '../src/route'),
        '@shared': resolve(__dirname, '../src/shared'),
        '@style': resolve(__dirname, '../src/style'),
        '@type': resolve(__dirname, '../src/type'),
      },
    };
    return config;
  },
};
export default config;
