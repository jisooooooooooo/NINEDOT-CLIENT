export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  HISTORY_LIST: (mandalartId: number) => ['mandalartHistoryList', mandalartId],
} as const;
