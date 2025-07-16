export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  MANDALART_CORE_GOALS: (mandalartId: number) => ['mandalartCoreGoals', mandalartId],
} as const;
