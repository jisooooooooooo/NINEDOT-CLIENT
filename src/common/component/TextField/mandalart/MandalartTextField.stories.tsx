import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { MandalartTextField } from './';

const meta = {
  title: 'Components/TextField/MandalartTextField',
  component: MandalartTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MandalartTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BigGoal: Story = {
  args: { variant: 'bigGoal', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('');
    return <MandalartTextField variant="bigGoal" value={value} onChange={setValue} />;
  },
};

export const SubGoal: Story = {
  args: { variant: 'subGoal', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('');
    return <MandalartTextField variant="subGoal" value={value} onChange={setValue} />;
  },
};

export const Todo: Story = {
  args: { variant: 'todo', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('');
    return <MandalartTextField variant="todo" value={value} onChange={setValue} />;
  },
};
