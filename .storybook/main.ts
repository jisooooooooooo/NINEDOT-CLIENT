import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

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
    // Align aliases with app's Vite config
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        '@': path.resolve(__dirname, '../src'),
        '@api': path.resolve(__dirname, '../src/api'),
        '@assets': path.resolve(__dirname, '../src/assets'),
        '@common': path.resolve(__dirname, '../src/common'),
        '@page': path.resolve(__dirname, '../src/page'),
        '@route': path.resolve(__dirname, '../src/route'),
        '@shared': path.resolve(__dirname, '../src/shared'),
        '@style': path.resolve(__dirname, '../src/style'),
        '@type': path.resolve(__dirname, '../src/type'),
      },
    };
    return config;
  },
};
export default config;
