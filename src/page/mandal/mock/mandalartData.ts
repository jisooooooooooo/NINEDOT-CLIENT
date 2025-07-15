import type { MandalartData } from '../types/mandal';

export const mockMandalartData: MandalartData = {
  code: 200,
  message: '성공적으로 만다라트를 조회하였습니다.',
  data: {
    title: '디자인의 신이 되기',
    coreGoals: [
      {
        id: 1,
        title: 'UX 공부하기',
        position: 1,
        subGoals: [
          {
            id: 11,
            title: 'UX 기본 개념 익히기',
            position: 1,
          },
          {
            id: 12,
            title: '사례 분석하기',
            position: 2,
          },
        ],
      },
      {
        id: 2,
        title: 'UI 디자인 마스터',
        position: 2,
        subGoals: [
          {
            id: 21,
            title: '디자인 시스템 구축',
            position: 1,
          },
          {
            id: 22,
            title: '컴포넌트 설계',
            position: 2,
          },
        ],
      },
      {
        id: 3,
        title: '프로토타이핑',
        position: 3,
        subGoals: [],
      },
      {
        id: 4,
        title: '디자인 트렌드',
        position: 4,
        subGoals: [],
      },
      {
        id: 5,
        title: '포트폴리오 제작',
        position: 5,
        subGoals: [],
      },
      {
        id: 6,
        title: '디자인 리서치',
        position: 6,
        subGoals: [],
      },
      {
        id: 7,
        title: '협업 프로세스',
        position: 7,
        subGoals: [],
      },
      {
        id: 8,
        title: '디자인 툴 마스터',
        position: 8,
        subGoals: [],
      },
      {
        id: 9,
        title: '사용성 테스트',
        position: 9,
        subGoals: [],
      },
    ],
  },
};
