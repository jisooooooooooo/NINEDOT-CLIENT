import type { Meta, StoryObj } from '@storybook/react';
import Mandalart from './Mandalart';

const meta = {
  title: 'Components/Mandalart',
  component: Mandalart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Mandalart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithContent: Story = {
  args: {
    content: '나인도트 1등',
  },
};

export const Empty: Story = {
  args: {
    content: '',
  },
};
