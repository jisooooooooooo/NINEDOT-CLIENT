import type { Meta, StoryObj } from '@storybook/react-vite';

import AiFailModal from './AiFailModal';

const meta: Meta<typeof AiFailModal> = {
  title: 'Common/AiFailModal',
  component: AiFailModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AiFailModal>;

export const Default: Story = {};
