import { useQuery } from '@tanstack/react-query';

import { getCoreGoals } from '../index';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useCoreGoals = (mandalartId: number) => {
  return useQuery({
    queryKey: QUERY_KEY.MANDALART_CORE_GOALS(mandalartId),
    queryFn: () => getCoreGoals(mandalartId),
  });
};
