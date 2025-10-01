export type MandalartVariant = 'bigGoal' | 'subGoal' | 'todo';

export const DEFAULT_PLACEHOLDER = {
  bigGoal: '이루고 싶은 목표를 작성하세요',
  subGoal: '세부 목표를 입력해주세요',
  todo: '할 일을 입력해주세요',
} as const;

export const MANDALART_TEXT_MAX_LENGTH = 30;
