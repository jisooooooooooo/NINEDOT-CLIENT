import { useQuery } from '@tanstack/react-query';

import { getMandalAll } from '.';

export const MANDAL_ALL_KEY = {
  all: ['mandalAll'] as const,
  detail: (mandalartId: number) => [...MANDAL_ALL_KEY.all, mandalartId] as const,
};

export const useMandalAll = (mandalartId: number) => {
  return useQuery({
    queryKey: MANDAL_ALL_KEY.detail(mandalartId),
    queryFn: () => getMandalAll(mandalartId),
  });
};
