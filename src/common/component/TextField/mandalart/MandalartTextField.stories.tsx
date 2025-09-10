import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { MandalartTextField } from './';
import type { MandalartVariant } from './constants';
import { colors } from '@/style/token';

const meta = {
  title: 'Components/TextField/MandalartTextField',
  component: MandalartTextField,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['bigGoal', 'subGoal', 'todo'],
    },
  },
} satisfies Meta<typeof MandalartTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const FieldPreview = ({ title, variant }: { title: string; variant: MandalartVariant }) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>{title}</h3>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <MandalartTextField variant={variant} value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <FieldPreview title="Big Goal (57.1rem x 8rem)" variant="bigGoal" />
      <FieldPreview title="Sub Goal (57.1rem x 5.6rem)" variant="subGoal" />
      <FieldPreview title="Todo (43.6rem x 5.6rem)" variant="todo" />
    </div>
  ),
};

export const BigGoal: Story = {
  args: {
    variant: 'bigGoal',
    value: '',
  },
  render: ({ variant }) => {
    const [value, setValue] = useState('');
    return (
      <MandalartTextField variant={variant as MandalartVariant} value={value} onChange={setValue} />
    );
  },
};

export const SubGoal: Story = {
  args: {
    variant: 'subGoal',
    value: '',
  },
  render: ({ variant }) => {
    const [value, setValue] = useState('');
    return (
      <MandalartTextField variant={variant as MandalartVariant} value={value} onChange={setValue} />
    );
  },
};

export const Todo: Story = {
  args: {
    variant: 'todo',
    value: '',
  },
  render: ({ variant }) => {
    const [value, setValue] = useState('');
    return (
      <MandalartTextField variant={variant as MandalartVariant} value={value} onChange={setValue} />
    );
  },
};
