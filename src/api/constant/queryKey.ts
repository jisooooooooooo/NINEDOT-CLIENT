export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  RECOMMENDED_TODO: (mandalartId: number) => ['recommendedTodo', mandalartId],
} as const;
