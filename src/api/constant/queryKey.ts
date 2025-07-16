export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  MANDALART_CORE_GOALS: (mandalartId: number) => ['mandalartCoreGoals', mandalartId],
  MANDALART_SUB_GOALS: (mandalartId: number, coreGoalId?: number, cycle?: string) =>
    ['mandalartSubGoals', mandalartId, coreGoalId, cycle].filter(Boolean),
  SUB_GOAL_IDS: (coreGoalId: number) => ['subGoalIds', coreGoalId],
} as const;
