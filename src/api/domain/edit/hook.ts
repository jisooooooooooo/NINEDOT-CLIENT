import { useQuery } from '@tanstack/react-query';

import { getUpperGoalIds, getSubGoalIds, getCoreGoals } from '.';

export const EDIT_QUERY_KEY = {
  all: ['edit'] as const,
  upperGoalIds: (mandalartId: number) =>
    [...EDIT_QUERY_KEY.all, 'upperGoalIds', mandalartId] as const,
  subGoalIds: (coreGoalId: number) => [...EDIT_QUERY_KEY.all, 'subGoalIds', coreGoalId] as const,
  coreGoals: (mandalartId: number) => [...EDIT_QUERY_KEY.all, 'coreGoals', mandalartId] as const,
};

export const useUpperGoalIds = (mandalartId: number) => {
  return useQuery({
    queryKey: EDIT_QUERY_KEY.upperGoalIds(mandalartId),
    queryFn: () => getUpperGoalIds(mandalartId),
  });
};

export const useSubGoalIds = (coreGoalId: number) => {
  return useQuery({
    queryKey: EDIT_QUERY_KEY.subGoalIds(coreGoalId),
    queryFn: () => getSubGoalIds(coreGoalId),
  });
};

export const useCoreGoals = (mandalartId: number) => {
  return useQuery({
    queryKey: EDIT_QUERY_KEY.coreGoals(mandalartId),
    queryFn: () => getCoreGoals(mandalartId),
  });
};
