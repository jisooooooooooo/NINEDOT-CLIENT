import type { Meta, StoryObj } from '@storybook/react';
import { Mandalart } from './Mandalart';

const meta = {
  title: 'Components/Mandalart',
  component: Mandalart.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Mandalart.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  args: {
    children: null,
  },
};

export const Default: Story = {
  ...Template,
  render: () => (
    <Mandalart.Root>
      <Mandalart.Main content="상위 목표" />
      <Mandalart.Sub content="세부 목표 1" />
      <Mandalart.Sub content="세부 목표 2" />
    </Mandalart.Root>
  ),
};

export const WithInteraction: Story = {
  ...Template,
  render: () => (
    <Mandalart.Root>
      <Mandalart.Main content="상위 목표" onClick={() => alert('상위 목표 클릭')} />
      <Mandalart.Sub content="완료된 세부 목표" isCompleted={true} />
      <Mandalart.Sub
        content="진행중인 세부 목표"
        isCompleted={false}
        onClick={() => alert('세부 목표 2 클릭')}
      />
    </Mandalart.Root>
  ),
};
