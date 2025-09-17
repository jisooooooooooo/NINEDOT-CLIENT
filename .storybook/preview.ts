import type { Preview } from '@storybook/react';
import React from 'react';
import { OverlayProvider } from 'overlay-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../src/style/reset.css.ts';
import '../src/style/global.css.ts';

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#02050B',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story) =>
      React.createElement(
        QueryClientProvider,
        { client: queryClient },
        React.createElement(OverlayProvider, null, React.createElement(Story)),
      ),
  ],
};

export default preview;
