export const QUERY_KEY = {
  OVERALL_TODO: ['overallTodo'],
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
} as const;
