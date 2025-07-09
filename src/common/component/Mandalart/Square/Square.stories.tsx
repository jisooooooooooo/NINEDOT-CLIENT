import type { Meta, StoryObj } from '@storybook/react-vite';

import { Main, Sub } from '.';
import type { MandalartSize } from '../Mandalart';

import { colors } from '@/style/token';

const meta = {
  title: 'Components/Square',
  component: Main,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['TODO_SUB', 'TODO_MAIN', 'TODO_EDIT', 'MY_MANDAL'],
    },
  },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleClick = () => {};

const SizePreview = ({ title, size }: { title: string; size: MandalartSize }) => (
  <div>
    <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>{title}</h3>
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Main content="상위 목표" size={size} />
      <Sub content="세부 목표" isCompleted={false} onClick={handleClick} size={size} />
      <Sub content="완료된 목표" isCompleted={true} onClick={handleClick} size={size} />
    </div>
  </div>
);

export const Default: Story = {
  args: {
    content: '상위 목표',
    size: 'TODO_MAIN',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <SizePreview title="TODO_SUB (96px)" size="TODO_SUB" />
      <SizePreview title="TODO_MAIN (196px)" size="TODO_MAIN" />
      <SizePreview title="TODO_EDIT (160px)" size="TODO_EDIT" />
      <SizePreview title="MY_MANDAL (298px)" size="MY_MANDAL" />
    </div>
  ),
};

export const MainGoal: Story = {
  args: {
    content: '메인 목표를 입력하세요',
    size: 'TODO_MAIN',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>TODO_SUB (96px)</h3>
        <Main content="메인 목표를 입력하세요" size="TODO_SUB" />
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>TODO_MAIN (196px)</h3>
        <Main content="메인 목표를 입력하세요" size="TODO_MAIN" />
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>TODO_EDIT (160px)</h3>
        <Main content="메인 목표를 입력하세요" size="TODO_EDIT" />
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>MY_MANDAL (298px)</h3>
        <Main content="메인 목표를 입력하세요" size="MY_MANDAL" />
      </div>
    </div>
  ),
};

export const SubGoalStates: Story = {
  args: {
    content: '세부 목표를 입력하세요',
    size: 'TODO_MAIN',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>TODO_SUB (96px)</h3>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Sub
            content="세부 목표를 입력하세요"
            isCompleted={false}
            onClick={handleClick}
            size="TODO_SUB"
          />
          <Sub
            content="완료된 목표입니다"
            isCompleted={true}
            onClick={handleClick}
            size="TODO_SUB"
          />
        </div>
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>TODO_MAIN (196px)</h3>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Sub
            content="세부 목표를 입력하세요"
            isCompleted={false}
            onClick={handleClick}
            size="TODO_MAIN"
          />
          <Sub
            content="완료된 목표입니다"
            isCompleted={true}
            onClick={handleClick}
            size="TODO_MAIN"
          />
        </div>
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>TODO_EDIT (160px)</h3>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Sub
            content="세부 목표를 입력하세요"
            isCompleted={false}
            onClick={handleClick}
            size="TODO_EDIT"
          />
          <Sub
            content="완료된 목표입니다"
            isCompleted={true}
            onClick={handleClick}
            size="TODO_EDIT"
          />
        </div>
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>MY_MANDAL (298px)</h3>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Sub
            content="세부 목표를 입력하세요"
            isCompleted={false}
            onClick={handleClick}
            size="MY_MANDAL"
          />
          <Sub
            content="완료된 목표입니다"
            isCompleted={true}
            onClick={handleClick}
            size="MY_MANDAL"
          />
        </div>
      </div>
    </div>
  ),
};
