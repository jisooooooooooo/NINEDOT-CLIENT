import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/api/constant/queryKey';
import type { StreakResponse } from '@/api/domain/history/type/streakResponse';
import { getStreak } from '@/api/domain/history';

export const useGetStreaks = (mandalartId: number) => {
  return useQuery<StreakResponse>({
    queryKey: QUERY_KEY.STREAKS(mandalartId),
    queryFn: () => getStreak(mandalartId),
  });
};
