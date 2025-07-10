import type { Meta, StoryObj } from '@storybook/react-vite';

import EditBtn from './EditBtn';

const meta = {
  title: 'Mandal/EditBtn',
  component: EditBtn,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof EditBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hover: Story = {
  name: '수정하기 버튼',
  parameters: {
    pseudo: { hover: true },
  },
};
