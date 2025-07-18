import { useQuery } from '@tanstack/react-query';

import { getOverallGoal } from '../index';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useOverallGoal = (mandalartId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.OVERALL_GOAL, mandalartId],
    queryFn: () => getOverallGoal(mandalartId),
    enabled: !!mandalartId,
  });
};
