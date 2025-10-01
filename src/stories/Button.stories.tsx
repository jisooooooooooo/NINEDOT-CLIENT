import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

//예시입니다.

// 메타데이터 정의
const meta = {
  title: 'Components/Button', // 스토리북 사이드바에서 보여질 경로
  component: Button, // 해당 스토리의 컴포넌트
  parameters: {
    layout: 'centered', // 스토리가 중앙에 표시되도록 설정
  },
  tags: ['autodocs'], // 자동으로 문서를 생성하도록 설정
  argTypes: {
    // 각 prop에 대한 컨트롤 설정
    primary: {
      control: 'boolean',
      description: '주요 액션을 위한 버튼인지 여부',
    },
    backgroundColor: {
      control: 'color',
      description: '배경색 (옵션)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    label: {
      control: 'text',
      description: '버튼 텍스트',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    label: '버튼',
    size: 'medium',
  },
};

// Primary 버튼 스토리
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary 버튼',
  },
};

// Secondary 버튼 스토리
export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary 버튼',
  },
};

// 크기별 스토리
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small 버튼',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium 버튼',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large 버튼',
  },
};
