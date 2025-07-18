import { useMutation } from '@tanstack/react-query';

import { postRecommendation } from '@/api/domain/myTodo';

export const usePostRecommendation = () => {
  return useMutation({
    mutationFn: postRecommendation,
  });
};
