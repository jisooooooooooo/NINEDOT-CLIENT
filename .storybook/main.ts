import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import svgr from 'vite-plugin-svgr';
import type { UserConfig } from 'vite';

// Chromatic deployment configuration
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
  viteFinal: (config: UserConfig) => {
    config.plugins = config.plugins || [];
    config.plugins.push(vanillaExtractPlugin());
    config.plugins.push(svgr());

    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      include: ['@vanilla-extract/css'],
    };

    config.build = {
      ...(config.build || {}),
      target: 'esnext',
      minify: false,
    };

    return config;
  },
};
export default config;
