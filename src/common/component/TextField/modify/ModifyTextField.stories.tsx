import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ModifyTextField } from './';

const meta = {
  title: 'Components/TextField/ModifyTextField',
  component: ModifyTextField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ModifyTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubGoalFilled: Story = {
  args: { variant: 'subGoal', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('나의 하위 목표');
    return <ModifyTextField variant="subGoal" value={value} onChange={setValue} />;
  },
};

export const SubGoalEmpty: Story = {
  args: { variant: 'subGoal', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('');
    return <ModifyTextField variant="subGoal" value={value} onChange={setValue} />;
  },
};

export const TodoEmpty: Story = {
  args: { variant: 'todo', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('');
    return <ModifyTextField variant="todo" value={value} onChange={setValue} />;
  },
};

export const TodoFilled: Story = {
  args: { variant: 'todo', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('완료된 할 일');
    return <ModifyTextField variant="todo" value={value} onChange={setValue} />;
  },
};
