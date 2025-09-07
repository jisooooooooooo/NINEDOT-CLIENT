import type { Meta, StoryObj } from '@storybook/react-vite';

import AiFailModal from './AiFailModal';

const meta = {
  title: 'Common/AiFailModal',
  component: AiFailModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
  },
} satisfies Meta<typeof AiFailModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
    message: '다시 한 번 시도해주세요.',
  },
};
