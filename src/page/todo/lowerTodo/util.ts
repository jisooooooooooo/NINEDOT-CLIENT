export function isValidSubGoal(subGoal?: string) {
  return Boolean(subGoal && subGoal.trim() !== '');
} 