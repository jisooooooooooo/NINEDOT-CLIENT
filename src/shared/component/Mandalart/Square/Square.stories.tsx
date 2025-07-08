import type { Meta, StoryObj } from '@storybook/react-vite';

import { Square } from '.';
import { colors } from '@/style/token';

const meta = {
  title: 'Components/Square',
  component: Square.Root,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Square.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Square.Main content="상위 목표" />
        <Square.Sub content="세부 목표" />
      </>
    ),
  },
};

export const MainGoal: Story = {
  args: {
    children: <Square.Main content="메인 목표를 입력하세요" />,
  },
};

export const SubGoalStates: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>기본 상태</h3>
          <Square.Sub content="세부 목표를 입력하세요" />
        </div>
        <div>
          <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>완료 상태</h3>
          <Square.Sub content="완료된 목표입니다" isCompleted={true} />
        </div>
      </div>
    ),
  },
};
