export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  HISTORY: (mandalartId: number) => ['mandalartHistoryList', mandalartId],
} as const;
