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
  completedGoals: [],
};

export const Default: Story = {
  args: {
    mainGoal: '메인 목표를 입력하세요',
    subGoals: MOCK_MANDALART_DATA.subGoals,
    size: 'TODO_MAIN',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>TODO_SUB (96px)</h3>
        <Mandalart
          mainGoal="메인 목표를 입력하세요"
          subGoals={MOCK_MANDALART_DATA.subGoals}
          size="TODO_SUB"
        />
      </div>
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>TODO_MAIN (196px)</h3>
        <Mandalart
          mainGoal="메인 목표를 입력하세요"
          subGoals={MOCK_MANDALART_DATA.subGoals}
          size="TODO_MAIN"
        />
      </div>
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>TODO_EDIT (160px)</h3>
        <Mandalart
          mainGoal="메인 목표를 입력하세요"
          subGoals={MOCK_MANDALART_DATA.subGoals}
          size="TODO_EDIT"
        />
      </div>
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>MY_MANDAL (298px)</h3>
        <Mandalart
          mainGoal="메인 목표를 입력하세요"
          subGoals={MOCK_MANDALART_DATA.subGoals}
          size="MY_MANDAL"
        />
      </div>
    </div>
  ),
};

export const TodoSub: Story = {
  args: {
    ...CUSTOM_GOALS,
    size: 'TODO_SUB',
  },
  render: (args) => <Mandalart {...args} />,
};

export const TodoMain: Story = {
  args: {
    ...CUSTOM_GOALS,
    size: 'TODO_MAIN',
  },
  render: (args) => <Mandalart {...args} />,
};

export const TodoEdit: Story = {
  args: {
    ...CUSTOM_GOALS,
    size: 'TODO_EDIT',
  },
  render: (args) => <Mandalart {...args} />,
};

export const MyMandal: Story = {
  args: {
    ...CUSTOM_GOALS,
    size: 'MY_MANDAL',
  },
  render: (args) => <Mandalart {...args} />,
};
