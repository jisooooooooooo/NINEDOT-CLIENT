import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import type { CreateOverallTodoRequest, CreateOverallTodoResponse } from './index';

import { postOverallTodo } from '@/api/domain/entireTodo';
import { QUERY_KEY } from '@/api/constant/queryKey';

export const useCreateOverallTodo = (
  options?: UseMutationOptions<CreateOverallTodoResponse, unknown, CreateOverallTodoRequest>,
) => {
  return useMutation<CreateOverallTodoResponse, unknown, CreateOverallTodoRequest>({
    mutationKey: QUERY_KEY.OVERALL_TODO,
    mutationFn: postOverallTodo,
    ...options,
  });
};
