import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AiRecommendModal from './AiRecommendModal';

import { useOverlayModal } from '@/common/hook/useOverlayModal';

const queryClient = new QueryClient();

const meta = {
  title: 'Common/AiRecommendModal',
  component: AiRecommendModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof AiRecommendModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => {},
    onSubmit: (selected) => console.log('Selected options:', selected),
    values: ['', '', '', '', '', '', '', ''],
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
    mandalartId: 0,
  },
};

export const InOverlay: Story = {
  render: (args) => {
    const Demo = () => {
      const { openModal } = useOverlayModal();
      return (
        <button
          type="button"
          onClick={() => openModal(<AiRecommendModal {...args} />)}
          style={{ padding: 12 }}
        >
          모달 열기
        </button>
      );
    };
    return <Demo />;
  },
  args: {
    onSubmit: (selected) => console.log('Selected:', selected),
    values: ['', '', '', '', '', '', '', ''],
    options: ['추천1', '추천2', '추천3', '추천4'],
    mandalartId: 0,
    onClose: () => {},
  },
};
