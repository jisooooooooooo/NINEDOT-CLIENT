import type { CoreGoal } from '@/page/mandal/types/mandal';

export const MANDALART_MOCK_DATA: CoreGoal = {
  id: 1,
  title: '프론트엔드 개발자되기',
  position: 4,
  subGoals: [
    { id: 1, title: '리액트 마스터하기', position: 0 },
    { id: 2, title: '타입스크립트 익히기', position: 1 },
    { id: 3, title: '알고리즘 공부하기', position: 2 },
    { id: 4, title: '프로젝트 경험 쌓기', position: 3 },
    { id: 5, title: '클린 코드 작성하기', position: 5 },
    { id: 6, title: 'UI/UX 이해하기', position: 6 },
    { id: 7, title: '성능 최적화하기', position: 7 },
    { id: 8, title: '테스트 코드 작성하기', position: 8 },
  ],
};
