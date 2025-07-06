import type { Meta, StoryObj } from '@storybook/react';
import Mandalart from './Mandalart';

const meta = {
  title: 'Components/Mandalart',
  component: Mandalart,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Mandalart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomGoals: Story = {
  args: {
    mainGoal: '나인도트 1등하기',
    subGoals: [
      '이현준 갈구기',
      '매일 운동하기',
      '일찍 일어나기',
      '계획 세우기',
      '시간 관리하기',
      '건강 관리하기',
      '긍정적으로 생각하기',
      '꾸준히 노력하기',
    ],
  },
};
