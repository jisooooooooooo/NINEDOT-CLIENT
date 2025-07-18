import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteSubGoal } from '../index';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useDeleteSubGoal = (subGoalId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteSubGoal(subGoalId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.SUB_GOAL_IDS(subGoalId),
        exact: true,
      });
    },
  });
};
