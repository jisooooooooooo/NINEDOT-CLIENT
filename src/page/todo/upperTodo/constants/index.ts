export const GOAL_COUNT = 8 as const;

export const DEFAULT_TEXT = {
  mainGoal: '사용자가 작성한 대목표',
} as const;

export const ALERT = {
  noMandalartId: '전체 목표가 설정되지 않았습니다.',
  goalsAlreadyFilled: '이미 모든 목표가 채워져 있습니다.',
  aiSaveFail: 'AI 추천 목표 저장 실패',
  aiFetchFail: 'AI 추천을 불러오지 못했어요. 잠시 후 다시 시도해주세요.',
} as const;

export const ORDER_LABELS = [
  '첫번째',
  '두번째',
  '세번째',
  '네번째',
  '다섯번째',
  '여섯번째',
  '일곱번째',
  '여덟번째',
] as const;
