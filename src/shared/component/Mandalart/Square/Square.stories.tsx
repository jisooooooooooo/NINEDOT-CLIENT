import type { Meta, StoryObj } from '@storybook/react';
import { Square } from './Square';
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

export const States: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>기본 상태</h3>
          <Square.Sub content="세부 목표" />
        </div>

        <div>
          <h3 style={{ color: colors.white01, marginBottom: '1rem' }}>클릭해보세요</h3>
          <Square.Sub content="클릭하면 완료 상태로 변경됩니다" />
        </div>
      </div>
    ),
  },
};
