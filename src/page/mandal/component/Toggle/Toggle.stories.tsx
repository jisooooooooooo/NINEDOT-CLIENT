import type { Meta, StoryObj } from '@storybook/react-vite';

import Toggle from './Toggle';

const meta = {
  title: 'Mandal/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'radio',
      options: ['onlygoal', 'whole'],
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnlyGoal: Story = {
  name: '목표만',
  args: {
    defaultValue: 'onlygoal',
  },
};

export const Whole: Story = {
  name: '전체',
  args: {
    defaultValue: 'whole',
  },
};
