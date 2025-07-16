import { TRUNCATE_TEXT_LENGTH } from './mock';

export function isValidSubGoal(subGoal?: string) {
  return Boolean(subGoal && subGoal.trim() !== '');
}

export function truncateText(text: string, cutLength: number = TRUNCATE_TEXT_LENGTH) {
  if (!text) {
    return '';
  }
  return text.length > cutLength ? `${text.substring(0, cutLength)}...` : text;
}

export function getFirstValidGoalIndex(subGoals: string[]) {
  const idx = subGoals.findIndex((goal) => goal && goal.trim() !== '');
  return idx === -1 ? -1 : idx;
}
