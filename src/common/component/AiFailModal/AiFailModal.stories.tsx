import type { Meta, StoryObj } from '@storybook/react-vite';

import AiFailModal from './AiFailModal';

import { useOverlayModal } from '@/common/hook/useOverlayModal';

const meta = {
  title: 'Common/AiFailModal',
  component: AiFailModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
  },
} satisfies Meta<typeof AiFailModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
    message: '다시 한 번 시도해주세요.',
  },
};

export const InOverlay: Story = {
  render: (args) => {
    const Demo = () => {
      const { openModal } = useOverlayModal();
      return (
        <button
          type="button"
          onClick={() => openModal(<AiFailModal {...args} />)}
          style={{ padding: 12 }}
        >
          모달 열기
        </button>
      );
    };
    return <Demo />;
  },
  args: {
    onClose: () => {},
    message: '다시 한 번 시도해주세요.',
  },
};
