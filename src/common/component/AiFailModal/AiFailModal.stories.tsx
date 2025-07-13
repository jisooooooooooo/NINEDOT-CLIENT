import type { Meta, StoryObj } from '@storybook/react-vite';

import AiFailModal from './AiFailModal';

const meta = {
  title: 'Common/AiFailModal',
  component: AiFailModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AiFailModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
  },
};
