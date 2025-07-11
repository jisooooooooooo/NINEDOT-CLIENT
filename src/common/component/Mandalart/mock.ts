import type { Cycle, SubGoal } from './Mandalart';

interface MockMandalartData {
  mainGoal: string;
  subGoals: SubGoal[];
}

export const MOCK_MANDALART_DATA: MockMandalartData = {
  mainGoal: '메인 목표를 입력하세요',
  subGoals: [
    {
      title: '세부 목표를 입력하세요',
      position: 0,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '세부 목표를 입력하세요',
      position: 1,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '세부 목표를 입력하세요',
      position: 2,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '세부 목표를 입력하세요',
      position: 3,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '세부 목표를 입력하세요',
      position: 4,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '세부 목표를 입력하세요',
      position: 5,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '세부 목표를 입력하세요',
      position: 6,
      cycle: 'DAILY' as Cycle,
    },
    {
      title: '세부 목표를 입력하세요',
      position: 7,
      cycle: 'DAILY' as Cycle,
    },
  ],
};
