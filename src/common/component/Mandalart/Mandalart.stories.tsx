import type { Meta, StoryObj } from '@storybook/react-vite';

import Mandalart from './Mandalart';
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
  argTypes: {
    type: {
      control: 'select',
      options: ['TODO_SUB', 'TODO_MAIN', 'TODO_EDIT', 'MY_MANDAL', 'MY_MANDAL_CENTER'],
    },
  },
} satisfies Meta<typeof Mandalart>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCoreGoal = {
  id: 1,
  title: MOCK_MANDALART_DATA.mainGoal,
  position: 0,
  subGoals: MOCK_MANDALART_DATA.subGoals,
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
        <Mandalart type="TODO_SUB" data={{ ...mockCoreGoal, id: 1, position: 0 }} />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>TODO_MAIN (196px)</h3>
        <Mandalart type="TODO_MAIN" data={{ ...mockCoreGoal, id: 2, position: 1 }} />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>TODO_EDIT (160px)</h3>
        <Mandalart type="TODO_EDIT" data={{ ...mockCoreGoal, id: 3, position: 2 }} />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>MY_MANDAL (298px)</h3>
        <Mandalart type="MY_MANDAL" data={{ ...mockCoreGoal, id: 4, position: 3 }} />
      </div>
    </div>
  ),
};
