import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteSubGoal } from '../index';

import { QUERY_KEY } from '@/api/constant/queryKey';

export const useDeleteSubGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (subGoalId: number) => deleteSubGoal(subGoalId),
    onSuccess: (_, subGoalId) => {
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
