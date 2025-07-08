import type { Meta, StoryObj } from '@storybook/react-vite';

import Mandalart, { type Cycle } from './Mandalart';
import { MOCK_MANDALART_DATA } from './mock';

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

const CUSTOM_GOALS = {
  mainGoal: '나인도트 1등하기',
  subGoals: [
    {
      title: '이현준 갈구기',
      position: 0,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '매일 운동하기',
      position: 1,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '일찍 일어나기',
      position: 2,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '계획 세우기',
      position: 3,
      cycle: 'WEEKLY' as Cycle,
    },
    {
      title: '시간 관리하기',
      position: 4,
      cycle: 'WEEKLY' as Cycle,
    },
    {
      title: '건강 관리하기',
      position: 5,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '긍정적으로 생각하기',
      position: 6,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '꾸준히 노력하기',
      position: 7,
      cycle: 'DAILY' as Cycle,
    },
  ],
  completedGoals: [1, 3, 5],
};

export const Default: Story = {
  args: {
    mainGoal: '메인 목표를 입력하세요',
    subGoals: MOCK_MANDALART_DATA.subGoals,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Default 사이즈</h3>
        <Mandalart {...args} />
      </div>
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Small 사이즈</h3>
        <Mandalart {...args} size="small" />
      </div>
    </div>
  ),
};

export const Small: Story = {
  args: {
    mainGoal: '메인 목표를 입력하세요',
    subGoals: CUSTOM_GOALS.subGoals,
    size: 'small',
  },
  render: (args) => <Mandalart {...args} />,
};

export const WithCustomGoals: Story = {
  args: CUSTOM_GOALS,
  render: (args) => <Mandalart {...args} />,
};

export const WithCustomGoalsSmall: Story = {
  args: {
    ...CUSTOM_GOALS,
    size: 'small',
  },
  render: (args) => <Mandalart {...args} />,
};
