import type { SubGoal } from './Mandalart';

export const MOCK_MANDALART_DATA = {
  mainGoal: '나인도트 1등하기',
  subGoals: [
    {
      title: '이현준 갈구기',
      position: 0,
      cycle: 'DAILY',
    },
    {
      title: '매일 운동하기',
      position: 1,
      cycle: 'DAILY',
    },
    {
      title: '일찍 일어나기',
      position: 2,
      cycle: 'DAILY',
    },
    {
      title: '계획 세우기',
      position: 3,
      cycle: 'WEEKLY',
    },
    {
      title: '시간 관리하기',
      position: 4,
      cycle: 'WEEKLY',
    },
    {
      title: '건강 관리하기',
      position: 5,
      cycle: 'DAILY',
    },
    {
      title: '긍정적으로 생각하기',
      position: 6,
      cycle: 'DAILY',
    },
    {
      title: '꾸준히 노력하기',
      position: 7,
      cycle: 'DAILY',
    },
  ] as SubGoal[],
  completedGoals: [],
};
