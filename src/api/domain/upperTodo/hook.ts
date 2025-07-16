import { useQuery } from '@tanstack/react-query';

import { getMandalAll, getCoreGoalIdPositions } from './index';

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
