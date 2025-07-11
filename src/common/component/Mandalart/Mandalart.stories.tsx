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
      options: ['TODO_SUB', 'TODO_MAIN', 'TODO_EDIT', 'MY_MANDAL'],
    },
  },
} satisfies Meta<typeof Mandalart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mainGoal: MOCK_MANDALART_DATA.mainGoal,
    subGoals: MOCK_MANDALART_DATA.subGoals,
    type: 'TODO_MAIN',
  },
};

export const AllTypes: Story = {
  args: {
    mainGoal: MOCK_MANDALART_DATA.mainGoal,
    subGoals: MOCK_MANDALART_DATA.subGoals,
    type: 'TODO_MAIN',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>TODO_SUB (96px)</h3>
        <Mandalart
          mainGoal={MOCK_MANDALART_DATA.mainGoal}
          subGoals={MOCK_MANDALART_DATA.subGoals}
          type="TODO_SUB"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>TODO_MAIN (196px)</h3>
        <Mandalart
          mainGoal={MOCK_MANDALART_DATA.mainGoal}
          subGoals={MOCK_MANDALART_DATA.subGoals}
          type="TODO_MAIN"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>TODO_EDIT (160px)</h3>
        <Mandalart
          mainGoal={MOCK_MANDALART_DATA.mainGoal}
          subGoals={MOCK_MANDALART_DATA.subGoals}
          type="TODO_EDIT"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>MY_MANDAL (298px)</h3>
        <Mandalart
          mainGoal={MOCK_MANDALART_DATA.mainGoal}
          subGoals={MOCK_MANDALART_DATA.subGoals}
          type="MY_MANDAL"
        />
      </div>
    </div>
  ),
};
