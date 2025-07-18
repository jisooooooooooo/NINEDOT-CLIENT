export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
  MANDALART_CORE_GOALS: (mandalartId: number) => ['mandalartCoreGoals', mandalartId],
  MANDALART_SUB_GOALS: (mandalartId: number, coreGoalId?: number, cycle?: string) =>
    ['mandalartSubGoals', mandalartId, coreGoalId, cycle].filter(Boolean),
  SUB_GOAL_IDS: (coreGoalId: number) => ['subGoalIds', coreGoalId],
  SUB_GOALS: (mandalartId: number, coreGoalId?: number, cycle?: string) =>
    ['subGoals', mandalartId, coreGoalId, cycle].filter(Boolean),
  AI_RECOMMEND_SUB_GOAL: (coreGoalId: number) => ['aiRecommendSubGoal', coreGoalId],
  CORE_GOAL_IDS: ['coreGoalIds'],
  POST_ONBOARDING_CORE_GOAL: ['postOnboardingCoreGoal'],
  PATCH_ONBOARDING_CORE_GOAL: ['patchOnboardingCoreGoal'],
  DELETE_ONBOARDING_CORE_GOAL: ['deleteOnboardingCoreGoal'],
  POST_AI_RECOMMEND_CORE_GOAL: ['postAiRecommendCoreGoal'],
  POST_AI_RECOMMEND_TO_CORE_GOALS: ['postAiRecommendToCoreGoals'],
  HISTORY: (mandalartId: number) => ['mandalartHistoryList', mandalartId],
  STREAK: (mandalartId: number) => ['streaks', mandalartId],
  JOB_LIST: ['jobList'],
  RECOMMENDED_TODO: (mandalartId: number) => ['recommendedTodo', mandalartId],
  MANDAL_ALL: ['mandalAll'] as const,
  CORE_GOALS: ['coreGoals'],
  PERSONA: 'persona',
} as const;
