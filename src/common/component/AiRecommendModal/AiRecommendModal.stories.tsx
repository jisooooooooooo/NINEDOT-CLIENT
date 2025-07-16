import type { Meta, StoryObj } from '@storybook/react-vite';

import AiRecommendModal from './AiRecommendModal';

const meta = {
  title: 'Common/AiRecommendModal',
  component: AiRecommendModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AiRecommendModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {
      console.log('Modal closed');
    },
    onSubmit: (selected) => {
      console.log('Selected options:', selected);
    },
    values: ['추천 항목 1', '추천 항목 2'],
  },
};
