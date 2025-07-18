import { useMutation } from '@tanstack/react-query';

import { deleteRecommendation } from '@/api/domain/myTodo';

export const useDeleteRecommendation = () => {
  return useMutation({
    mutationFn: (subGoalId: number) => deleteRecommendation(subGoalId),
  });
};
