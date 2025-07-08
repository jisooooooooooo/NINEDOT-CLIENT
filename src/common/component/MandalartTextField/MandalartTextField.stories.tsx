import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import MandalartTextField from './MandalartTextField';

const meta: Meta<typeof MandalartTextField> = {
  title: 'Common/MandalartTextField',
  component: MandalartTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '상위목표(bigGoal), 하위목표(subGoal), 할 일(todo) 등 다양한 텍스트필드 용도로 사용할 수 있습니다. variant별로 스타일/placeholder/최대글자수 등이 자동 적용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['bigGoal', 'subGoal', 'todo'],
      description: '텍스트필드 타입 (상위목표/하위목표/할 일)',
    },
    value: { control: 'text', description: '입력값' },
    placeholder: { control: 'text', description: 'placeholder (미입력 시 자동 적용)' },
    maxLength: { control: 'number', description: '최대 글자수 (상위목표만 30자 제한)' },
    disabled: { control: 'boolean', description: '비활성화 여부' },
    onChange: { action: 'changed', description: '입력값 변경 이벤트' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    variant: 'bigGoal',
    value: '',
    onChange: () => {},
    placeholder: '',
    maxLength: 30,
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return <MandalartTextField {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      description: {
        story: '실제 입력/클리어/포커스 등 모든 상태를 직접 테스트할 수 있습니다.',
      },
    },
  },
};

const variants = [
  { variant: 'bigGoal', label: '상위목표 (bigGoal)' },
  { variant: 'subGoal', label: '하위목표 (subGoal)' },
  { variant: 'todo', label: '할 일 (todo)' },
] as const;

export const Variants: Story = {
  render: () => {
    const [values, setValues] = useState(['', '', '']);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '60rem' }}>
        {variants.map(({ variant, label }, idx) => (
          <div key={variant}>
            <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>{label}</div>
            <MandalartTextField
              variant={variant}
              value={values[idx]}
              onChange={(v) => setValues((vals) => vals.map((val, i) => (i === idx ? v : val)))}
            />
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'variant별 스타일/placeholder/최대글자수 자동 적용 예시입니다.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    variant: 'bigGoal',
    value: '비활성화 예시',
    onChange: () => {},
    disabled: true,
  },
  render: (args) => <MandalartTextField {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'disabled=true 시 스타일/동작 예시입니다.',
      },
    },
  },
};
