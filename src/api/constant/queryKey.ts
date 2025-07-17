export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  JOB_LIST: ['jobList'],
  RECOMMENDED_TODO: (mandalartId: number) => ['recommendedTodo', mandalartId],
  MANDAL_ALL: ['mandalAll'] as const,
} as const;
