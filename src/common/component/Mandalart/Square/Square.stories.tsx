import type { Meta, StoryObj } from '@storybook/react-vite';

import { Main, Sub } from './Square';
import type { MandalartType } from '../Mandalart';

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
    type: {
      control: 'select',
      options: ['TODO_SUB', 'TODO_MAIN', 'TODO_EDIT', 'MY_MANDAL'],
    },
  },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleClick = () => {};

const TypePreview = ({ title, type }: { title: string; type: MandalartType }) => (
  <div>
    <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>{title}</h3>
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Main content="상위 목표" type={type} />
      <Sub content="세부 목표" isCompleted={false} onClick={handleClick} type={type} />
      <Sub content="완료된 목표" isCompleted={true} onClick={handleClick} type={type} />
    </div>
  </div>
);

export const Default: Story = {
  args: {
    content: '상위 목표',
    type: 'TODO_MAIN',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <TypePreview title="TODO_SUB (96px)" type="TODO_SUB" />
      <TypePreview title="TODO_MAIN (196px)" type="TODO_MAIN" />
      <TypePreview title="TODO_EDIT (160px)" type="TODO_EDIT" />
      <TypePreview title="MY_MANDAL (298px)" type="MY_MANDAL" />
    </div>
  ),
};

export const MainGoal: Story = {
  args: {
    content: '메인 목표를 입력하세요',
    type: 'TODO_MAIN',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>TODO_SUB (96px)</h3>
        <Main content="메인 목표를 입력하세요" type="TODO_SUB" />
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>TODO_MAIN (196px)</h3>
        <Main content="메인 목표를 입력하세요" type="TODO_MAIN" />
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>TODO_EDIT (160px)</h3>
        <Main content="메인 목표를 입력하세요" type="TODO_EDIT" />
      </div>
      <div>
        <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>MY_MANDAL (298px)</h3>
        <Main content="메인 목표를 입력하세요" type="MY_MANDAL" />
      </div>
    </div>
  ),
};

export const SubGoalStates: Story = {
  args: {
    content: '세부 목표를 입력하세요',
    type: 'TODO_MAIN',
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
            type="TODO_SUB"
          />
          <Sub
            content="완료된 목표입니다"
            isCompleted={true}
            onClick={handleClick}
            type="TODO_SUB"
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
            type="TODO_MAIN"
          />
          <Sub
            content="완료된 목표입니다"
            isCompleted={true}
            onClick={handleClick}
            type="TODO_MAIN"
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
            type="TODO_EDIT"
          />
          <Sub
            content="완료된 목표입니다"
            isCompleted={true}
            onClick={handleClick}
            type="TODO_EDIT"
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
            type="MY_MANDAL"
          />
          <Sub
            content="완료된 목표입니다"
            isCompleted={true}
            onClick={handleClick}
            type="MY_MANDAL"
          />
        </div>
      </div>
    </div>
  ),
};
