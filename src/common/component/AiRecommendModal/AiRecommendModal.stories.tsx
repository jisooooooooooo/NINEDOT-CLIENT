import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AiRecommendModal from './AiRecommendModal';

const queryClient = new QueryClient();

const meta = {
  title: 'Common/AiRecommendModal',
  component: AiRecommendModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof AiRecommendModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
    onSubmit: (selected) => console.log('Selected options:', selected),
    values: [],
    options: ['옵션1', '옵션2'],
    mandalartId: 1,
  },
};
