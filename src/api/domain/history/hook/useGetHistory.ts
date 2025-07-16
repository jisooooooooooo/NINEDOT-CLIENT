import { useQuery } from '@tanstack/react-query';

import { getHistory } from '@/api/domain/history';
import { QUERY_KEY } from '@/api/constant/queryKey';
import type { BaseResponse } from '@/type/api';
import type { historyResponse } from '@/api/domain/history/type/historyResponse';

export const useGetHistory = (mandalartId: number) => {
  return useQuery<BaseResponse<historyResponse>>({
    queryKey: QUERY_KEY.HISTORY(mandalartId),
    queryFn: () => getHistory(mandalartId),
  });
};
