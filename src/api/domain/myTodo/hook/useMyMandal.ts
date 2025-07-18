import { useQuery } from '@tanstack/react-query';

import { getMandalAll } from '../../mandalAll';
import { getMandalCoreGoals } from '..';
import type { CoreGoal } from '../type/myTodo';

import type { BaseResponse } from '@/type/api';
import { QUERY_KEY } from '@/api/constant/queryKey';

type MandalCoreGoalsResponse = BaseResponse<{
  coreGoals: CoreGoal[];
}>;

export const useGetMandalAll = (mandalartId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.OVERALL_TODO, mandalartId],
    queryFn: () => getMandalAll(mandalartId),
  });
};

export const useGetMandalCoreGoals = (mandalartId: number) => {
  return useQuery<MandalCoreGoalsResponse>({
    queryKey: [QUERY_KEY.CORE_GOALS, mandalartId],
    queryFn: () => getMandalCoreGoals(mandalartId),
  });
};
