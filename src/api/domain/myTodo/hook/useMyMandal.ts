import { useQuery } from '@tanstack/react-query';

import { getMandalAll } from '../../mandalAll';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useGetMandalAll = (mandalartId: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.OVERALL_TODO, mandalartId],
    queryFn: () => getMandalAll(mandalartId),
  });
};
