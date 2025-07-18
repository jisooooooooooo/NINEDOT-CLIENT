import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateSubGoal } from '../index';
import type { UpdateSubGoalRequest } from '../type/updateSubGoal.request';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useUpdateSubGoal = (subGoalId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateSubGoalRequest) => updateSubGoal(subGoalId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.SUB_GOAL_IDS(subGoalId),
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: ['subGoals'],
        refetchType: 'active',
      });
    },
  });
};
