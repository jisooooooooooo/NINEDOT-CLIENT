import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import {
  postEntireTodo,
  type CreateEntireTodoRequest,
  type CreateEntireTodoResponse,
} from '@/api/domain/entireTodo';
import { QUERY_KEY } from '@/api/constant/queryKey';

export const useCreateEntireTodo = (
  options?: UseMutationOptions<CreateEntireTodoResponse, unknown, CreateEntireTodoRequest>,
) => {
  return useMutation<CreateEntireTodoResponse, unknown, CreateEntireTodoRequest>({
    mutationKey: [...QUERY_KEY.ENTIRE_TODO, 'create'],
    mutationFn: postEntireTodo,
    ...options,
  });
};
