import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';

import { getUpperGoalIds, getSubGoals, getCoreGoals, updateSubGoal } from '.';
import type { UpdateSubGoalRequest, SubGoalsResponse } from '.';
import type { BaseResponse } from '@/type/api';
import { QUERY_KEY } from '@/api/constant/queryKey';

type CycleType = 'DAILY' | 'WEEKLY' | 'ONCE';

export const EDIT_QUERY_KEY = {
  all: ['edit'] as const,
  upperGoalIds: (mandalartId: number) =>
    [...EDIT_QUERY_KEY.all, 'upperGoalIds', mandalartId] as const,
  subGoals: (mandalartId: number, coreGoalId?: number, cycle?: CycleType) =>
    [...EDIT_QUERY_KEY.all, 'subGoals', mandalartId, coreGoalId, cycle] as const,
  coreGoals: (mandalartId: number) => [...EDIT_QUERY_KEY.all, 'coreGoals', mandalartId] as const,
};

export const useUpperGoalIds = (mandalartId: number) => {
  return useQuery({
    queryKey: EDIT_QUERY_KEY.upperGoalIds(mandalartId),
    queryFn: () => getUpperGoalIds(mandalartId),
  });
};

export const useSubGoals = (
  mandalartId: number,
  coreGoalId?: number,
  cycle?: CycleType,
  options?: Omit<UseQueryOptions<BaseResponse<SubGoalsResponse>>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    queryKey: EDIT_QUERY_KEY.subGoals(mandalartId, coreGoalId, cycle),
    queryFn: () => getSubGoals(mandalartId, coreGoalId, cycle),
    ...options,
  });
};

export const useUpdateSubGoal = (mandalartId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateSubGoalRequest) => updateSubGoal(mandalartId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY.MANDAL_ALL, mandalartId],
        exact: true,
      });

      queryClient.invalidateQueries({
        queryKey: EDIT_QUERY_KEY.subGoals(mandalartId),
        exact: true,
      });
    },
  });
};

export const useCoreGoals = (mandalartId: number) => {
  return useQuery({
    queryKey: EDIT_QUERY_KEY.coreGoals(mandalartId),
    queryFn: () => getCoreGoals(mandalartId),
  });
};
