import { useQuery } from '@tanstack/react-query';

import { getSubGoalIds } from '../index';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useSubGoalIds = (coreGoalId: number) => {
  return useQuery({
    queryKey: QUERY_KEY.SUB_GOAL_IDS(coreGoalId),
    queryFn: () => getSubGoalIds({ coreGoalId }),
    enabled: !!coreGoalId && coreGoalId > 0,
  });
};
