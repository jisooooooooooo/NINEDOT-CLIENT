export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  MANDALART_CORE_GOALS: (mandalartId: number) => ['mandalartCoreGoals', mandalartId],
  MANDALART_SUB_GOALS: (mandalartId: number, coreGoalId?: number, cycle?: string) =>
    ['mandalartSubGoals', mandalartId, coreGoalId, cycle].filter(Boolean),
  SUB_GOAL_IDS: (coreGoalId: number) => ['subGoalIds', coreGoalId],
  SUB_GOALS: (mandalartId: number, coreGoalId?: number, cycle?: string) =>
    ['subGoals', mandalartId, coreGoalId, cycle].filter(Boolean),
  AI_RECOMMEND_SUB_GOAL: (coreGoalId: number) => ['aiRecommendSubGoal', coreGoalId],
  JOB_LIST: ['jobList'],
  RECOMMENDED_TODO: (mandalartId: number) => ['recommendedTodo', mandalartId],
  MANDAL_ALL: ['mandalAll'] as const,
} as const;
