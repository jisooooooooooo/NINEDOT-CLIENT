import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { SignupTextField } from './';

const meta = {
  title: 'Components/TextField/SignupTextField',
  component: SignupTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SignupTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: { variant: 'name', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('');
    return <SignupTextField variant="name" value={value} onChange={setValue} />;
  },
};

export const EmailDisabled: Story = {
  args: { variant: 'email', value: '', onChange: () => {} },
  render: () => {
    const [value] = useState('user@example.com');
    return <SignupTextField variant="email" value={value} onChange={() => {}} disabled />;
  },
};

export const Birth: Story = {
  args: { variant: 'birth', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('');
    return <SignupTextField variant="birth" value={value} onChange={setValue} />;
  },
};

export const Job: Story = {
  args: { variant: 'job', value: '', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('');
    return <SignupTextField variant="job" value={value} onChange={setValue} />;
  },
};
