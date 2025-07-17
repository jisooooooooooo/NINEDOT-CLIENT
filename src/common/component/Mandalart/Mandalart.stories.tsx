import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Mandalart from './Mandalart';

const queryClient = new QueryClient();

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
  argTypes: {
    type: {
      control: 'select',
      options: ['TODO_SUB', 'TODO_MAIN', 'TODO_EDIT', 'MY_MANDAL', 'MY_MANDAL_CENTER'],
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof Mandalart>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCoreGoal = {
  id: 1,
  title: '대표 목표',
  position: 1,
  subGoals: Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `세부 목표 ${i + 1}`,
    position: i + 1,
    cycle: 'DAILY' as const,
  })),
};

const mockMainGoalData = {
  title: '대표 목표',
  subGoals: Array.from({ length: 8 }, (_, i) => ({
    ...mockCoreGoal,
    id: i + 1,
    position: i + 1,
    title: `목표 ${i + 1}`,
  })),
};

export const Default: Story = {
  args: {
    type: 'TODO_MAIN',
    data: mockCoreGoal,
  },
};

export const AllTypes: Story = {
  args: {
    type: 'TODO_MAIN',
    data: mockCoreGoal,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>TODO_SUB (96px)</h3>
        <Mandalart type="TODO_SUB" data={{ ...mockCoreGoal, id: 1, position: 1 }} />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>TODO_MAIN (196px)</h3>
        <Mandalart type="TODO_MAIN" data={{ ...mockCoreGoal, id: 2, position: 2 }} />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>TODO_EDIT (160px)</h3>
        <Mandalart type="TODO_EDIT" data={mockMainGoalData} />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>MY_MANDAL (298px)</h3>
        <Mandalart type="MY_MANDAL" data={{ ...mockCoreGoal, id: 4, position: 4 }} />
      </div>
    </div>
  ),
};
