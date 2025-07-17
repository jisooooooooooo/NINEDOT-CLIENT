export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  RECOMMENDED_TODO: (mandalartId: number) => ['recommendedTodo', mandalartId],
  MANDAL_ALL: ['mandalAll'] as const,
} as const;
