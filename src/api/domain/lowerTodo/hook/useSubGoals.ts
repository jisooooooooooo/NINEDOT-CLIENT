import { useQuery } from '@tanstack/react-query';

import { getSubGoals } from '../index';
import type { GetSubGoalsRequest } from '../type/subGoals';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useSubGoals = ({ mandalartId, coreGoalId, cycle }: GetSubGoalsRequest) => {
  return useQuery({
    queryKey: QUERY_KEY.MANDALART_SUB_GOALS(mandalartId, coreGoalId, cycle),
    queryFn: () => getSubGoals({ mandalartId, coreGoalId, cycle }),
    enabled: !!mandalartId,
  });
};
