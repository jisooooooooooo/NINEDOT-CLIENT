import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/api/constant/queryKey';
import { getRecommendation } from '@/api/domain/myTodo';

export const useGetRecommendation = (mandalartId: number, date: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.RECOMMENDED_TODO(mandalartId), date],
    queryFn: () => getRecommendation(mandalartId, { date }),
  });
};
