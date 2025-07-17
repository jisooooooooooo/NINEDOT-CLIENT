export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  JOB_LIST: ['jobList'],
  RECOMMENDED_TODO: (mandalartId: number) => ['recommendedTodo', mandalartId],
} as const;
