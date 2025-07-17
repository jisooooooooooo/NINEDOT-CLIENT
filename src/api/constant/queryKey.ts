export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  HISTORY: (mandalartId: number) => ['mandalartHistoryList', mandalartId],
  STREAK: (mandalartId: number) => ['streaks', mandalartId],
  JOB_LIST: ['jobList'],
  RECOMMENDED_TODO: (mandalartId: number) => ['recommendedTodo', mandalartId],
  MANDAL_ALL: ['mandalAll'] as const,
} as const;
