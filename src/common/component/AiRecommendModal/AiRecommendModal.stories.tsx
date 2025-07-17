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
    onClose: () => {},
    onSubmit: (selected) => console.log(selected),
    values: [],
    options: ['옵션1', '옵션2'],
    mandalartId: 1,
  },
};
