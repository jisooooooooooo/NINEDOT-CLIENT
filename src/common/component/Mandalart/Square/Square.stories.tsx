import type { Meta, StoryObj } from '@storybook/react-vite';

import { Square } from '.';

import { colors } from '@/style/token';

const meta = {
  title: 'Components/Square',
  component: Square.Main,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Square.Main>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleClick = () => {};

export const Default: Story = {
  args: {
    content: '상위 목표',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>Default 사이즈</h3>
        <p style={{ color: colors.white01, marginBottom: '1rem' }}>
          메인: title03 / 서브: subtitle01
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Square.Main {...args} />
          <Square.Sub content="세부 목표" isCompleted={false} onClick={handleClick} />
        </div>
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>Small 사이즈</h3>
        <p style={{ color: colors.white01, marginBottom: '1rem' }}>
          메인: body04 / 서브: subtitle05
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Square.Main content="상위 목표" size="small" />
          <Square.Sub content="세부 목표" isCompleted={false} onClick={handleClick} size="small" />
        </div>
      </div>
    </div>
  ),
};

export const MainGoal: Story = {
  args: {
    content: '메인 목표를 입력하세요',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>Default 사이즈 (title03)</h3>
        <Square.Main {...args} />
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>Small 사이즈 (body04)</h3>
        <Square.Main content="메인 목표를 입력하세요" size="small" />
      </div>
    </div>
  ),
};

export const SubGoalStates: Story = {
  args: {
    content: '세부 목표를 입력하세요',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>Default 사이즈 (subtitle01)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h4 style={{ color: colors.white01, marginBottom: '1rem' }}>기본 상태</h4>
            <Square.Sub content={args.content} isCompleted={false} onClick={handleClick} />
          </div>
          <div>
            <h4 style={{ color: colors.white01, marginBottom: '1rem' }}>완료 상태</h4>
            <Square.Sub content="완료된 목표입니다" isCompleted={true} onClick={handleClick} />
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>Small 사이즈 (subtitle05)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h4 style={{ color: colors.white01, marginBottom: '1rem' }}>기본 상태</h4>
            <Square.Sub
              content={args.content}
              isCompleted={false}
              onClick={handleClick}
              size="small"
            />
          </div>
          <div>
            <h4 style={{ color: colors.white01, marginBottom: '1rem' }}>완료 상태</h4>
            <Square.Sub
              content="완료된 목표입니다"
              isCompleted={true}
              onClick={handleClick}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
