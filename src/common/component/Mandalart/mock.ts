import type { SubGoal } from '@/page/mandal/types/mandal';

interface MockMandalartData {
  mainGoal: string;
  subGoals: SubGoal[];
}

export const MOCK_MANDALART_DATA: MockMandalartData = {
  mainGoal: '메인 목표를 입력하세요',
  subGoals: [
    {
      id: 1,
      title: '세부 목표를 입력하세요',
      position: 0,
    },
    {
      id: 2,
      title: '세부 목표를 입력하세요',
      position: 1,
    },
    {
      id: 3,
      title: '세부 목표를 입력하세요',
      position: 2,
    },
    {
      id: 4,
      title: '세부 목표를 입력하세요',
      position: 3,
    },
    {
      id: 5,
      title: '세부 목표를 입력하세요',
      position: 4,
    },
    {
      id: 6,
      title: '세부 목표를 입력하세요',
      position: 5,
    },
    {
      id: 7,
      title: '세부 목표를 입력하세요',
      position: 6,
    },
    {
      id: 8,
      title: '세부 목표를 입력하세요',
      position: 7,
    },
  ],
};
