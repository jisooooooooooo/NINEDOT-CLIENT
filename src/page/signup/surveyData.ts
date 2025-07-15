import type { QuestionType } from '@/page/signup/type/questionType';

export const questionList: QuestionType[] = [
  {
    id: 1,
    type: '객관식',
    content: '어떤 방식으로 목표를 실천하는 것을 선호하시나요?',
    optionList: [
      { id: 1, content: '구체적인 실행 계획이 필요해요' },
      { id: 2, content: '감성적 동기부여가 중요해요' },
      { id: 3, content: '간단한 할 일을 쌓아가는 게 좋아요' },
      { id: 4, content: '일정 기반으로 진행하는 걸 좋아해요' },
      { id: 5, content: '해당하는 게 없어요' },
    ],
  },
  {
    id: 2,
    type: '객관식',
    content: '혼자 할 때와 함께할 때, 어떤 게 더 동기부여가 되나요?',
    optionList: [
      { id: 1, content: '혼자 조용히 하는 게 편해요' },
      { id: 2, content: '누군가와 함께 하면 더 힘이 나요' },
      { id: 3, content: '둘 다 비슷해요' },
    ],
  },
  {
    id: 3,
    type: '객관식',
    content: '당신이 목표를 이루는 데 어려움을 겪는 가장 큰 이유는 무엇인가요?',
    optionList: [
      { id: 1, content: '의지는 있지만 자꾸 미뤄요' },
      { id: 2, content: '중간에 동기 부여가 떨어져요' },
      { id: 3, content: '외부 자극이 없으면 움직이지 않아요' },
      { id: 4, content: '시간 관리가 잘 안 돼요' },
      { id: 5, content: '해당하는 게 없어요' },
    ],
  },
];
