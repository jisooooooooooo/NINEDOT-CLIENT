import { useQuery, useMutation } from '@tanstack/react-query';

import {
  getMandalAll,
  getCoreGoalIdPositions,
  postOnboardingCoreGoal,
  patchOnboardingCoreGoal,
  postAiRecommendCoreGoal,
  postAiRecommendToCoreGoals,
  deleteOnboardingCoreGoal,
} from './index';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useGetMandalAll = (mandalartId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.OVERALL_TODO, mandalartId],
    queryFn: () => getMandalAll(mandalartId),
  });
};

export const useGetCoreGoalIdPositions = (mandalartId: number) => {
  return useQuery({
    queryKey: [...QUERY_KEY.CORE_GOAL_IDS, mandalartId],
    queryFn: () => getCoreGoalIdPositions(mandalartId),
    enabled: !!mandalartId,
  });
};

export const usePostOnboardingCoreGoal = () => {
  return useMutation({
    mutationKey: QUERY_KEY.POST_ONBOARDING_CORE_GOAL,
    mutationFn: ({
      mandalartId,
      title,
      position,
    }: {
      mandalartId: number;
      title: string;
      position: number;
    }) => postOnboardingCoreGoal(mandalartId, { title, position }),
  });
};

export const usePatchOnboardingCoreGoal = () => {
  return useMutation({
    mutationKey: QUERY_KEY.PATCH_ONBOARDING_CORE_GOAL,
    mutationFn: (params: { coreGoalId: number; title: string }) => patchOnboardingCoreGoal(params),
  });
};

export const useDeleteOnboardingCoreGoal = () => {
  return useMutation({
    mutationKey: QUERY_KEY.DELETE_ONBOARDING_CORE_GOAL,
    mutationFn: (coreGoalId: number) => deleteOnboardingCoreGoal(coreGoalId),
  });
};

export const usePostAiRecommendCoreGoal = () => {
  return useMutation({
    mutationKey: QUERY_KEY.POST_AI_RECOMMEND_CORE_GOAL,
    mutationFn: async ({
      mandalartId,
      mandalart,
      coreGoal,
    }: {
      mandalartId: number;
      mandalart: string;
      coreGoal: { title: string }[];
    }) => {
      const response = await postAiRecommendCoreGoal(mandalartId, { mandalart, coreGoal });
      return response;
    },
  });
};

export const usePostAiRecommendToCoreGoals = () => {
  return useMutation({
    mutationKey: QUERY_KEY.POST_AI_RECOMMEND_TO_CORE_GOALS,
    mutationFn: ({ mandalartId, goals }: { mandalartId: number; goals: string[] }) =>
      postAiRecommendToCoreGoals(mandalartId, { goals }),
  });
};
