import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';

import { getUpperGoalIds, getSubGoalIds, getCoreGoals, updateCoreGoal } from '.';
import type { UpdateCoreGoalRequest } from '.';

import type { BaseResponse } from '@/type/api';
import { QUERY_KEY } from '@/api/constant/queryKey';

export const EDIT_QUERY_KEY = {
  all: ['edit'] as const,
  upperGoalIds: (mandalartId: number) =>
    [...EDIT_QUERY_KEY.all, 'upperGoalIds', mandalartId] as const,
  subGoalIds: (coreGoalId: number) => [...EDIT_QUERY_KEY.all, 'subGoalIds', coreGoalId] as const,
  coreGoals: (mandalartId: number) => [...EDIT_QUERY_KEY.all, 'coreGoals', mandalartId] as const,
};

export const useUpperGoalIds = (mandalartId: number) => {
  return useQuery({
    queryKey: EDIT_QUERY_KEY.upperGoalIds(mandalartId),
    queryFn: () => getUpperGoalIds(mandalartId),
  });
};

interface SubGoalIdsResponse {
  subGoalIds: {
    id: number;
    position: number;
  }[];
}

export const useSubGoalIds = (
  coreGoalId: number,
  options?: Omit<UseQueryOptions<BaseResponse<SubGoalIdsResponse>>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    queryKey: EDIT_QUERY_KEY.subGoalIds(coreGoalId),
    queryFn: () => getSubGoalIds(coreGoalId),
    ...options,
  });
};

export const useUpdateCoreGoal = (mandalartId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateCoreGoalRequest) => updateCoreGoal(mandalartId, data),
    onSuccess: () => {
      // 만달아트 전체 데이터 갱신 (mandalartId 포함)
      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEY.MANDAL_ALL, mandalartId],
        exact: true,
      });

      // 편집 관련 쿼리들 갱신
      queryClient.invalidateQueries({
        queryKey: EDIT_QUERY_KEY.upperGoalIds(mandalartId),
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: EDIT_QUERY_KEY.coreGoals(mandalartId),
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
