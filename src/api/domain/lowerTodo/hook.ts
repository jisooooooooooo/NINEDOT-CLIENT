import { useQuery, useMutation } from '@tanstack/react-query';

import {
  getMandalAll,
  getCoreGoals,
  getSubGoalIds,
  postOnboardingSubGoal,
  patchOnboardingSubGoal,
  deleteOnboardingSubGoal,
  postAiRecommendNewSubGoal,
  type SubGoalIdPosition,
} from './index';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useGetMandalAll = (mandalartId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.ENTIRE_GOAL, mandalartId],
    queryFn: () => getMandalAll(mandalartId),
    enabled: !!mandalartId,
  });
};

export const useGetCoreGoals = (mandalartId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.CORE_GOALS, mandalartId],
    queryFn: () => getCoreGoals(mandalartId),
    enabled: !!mandalartId,
  });
};

export const useGetSubGoalIds = (coreGoalId: number) => {
  return useQuery<{ subGoalIds: SubGoalIdPosition[] }>({
    queryKey: QUERY_KEY.SUB_GOAL_IDS(coreGoalId),
    queryFn: () => getSubGoalIds(coreGoalId),
    enabled: !!coreGoalId && coreGoalId > 0,
    retry: false,
  });
};

export const usePostOnboardingSubGoal = () => {
  return useMutation({
    mutationKey: QUERY_KEY.POST_ONBOARDING_SUB_GOAL,
    mutationFn: ({
      coreGoalId,
      title,
      position,
      cycle,
    }: {
      coreGoalId: number;
      title: string;
      position: number;
      cycle: string;
    }) => postOnboardingSubGoal(coreGoalId, { title, position, cycle }),
  });
};

export const usePatchOnboardingSubGoal = () => {
  return useMutation({
    mutationKey: QUERY_KEY.PATCH_ONBOARDING_SUB_GOAL,
    mutationFn: (params: { subGoalId: number; title: string; cycle: string }) =>
      patchOnboardingSubGoal(params),
  });
};

export const useDeleteOnboardingSubGoal = () => {
  return useMutation({
    mutationKey: QUERY_KEY.DELETE_ONBOARDING_SUB_GOAL,
    mutationFn: (subGoalId: number) => deleteOnboardingSubGoal(subGoalId),
  });
};

export const usePostAiRecommendNewSubGoal = () => {
  return useMutation({
    mutationKey: QUERY_KEY.POST_AI_RECOMMEND_NEW_SUB_GOAL,
    mutationFn: async ({
      coreGoalId,
      coreGoal,
      subGoal,
    }: {
      coreGoalId: number;
      coreGoal: string;
      subGoal: { title: string }[];
    }) => {
      const response = await postAiRecommendNewSubGoal(coreGoalId, { coreGoal, subGoal });
      return response;
    },
  });
};
