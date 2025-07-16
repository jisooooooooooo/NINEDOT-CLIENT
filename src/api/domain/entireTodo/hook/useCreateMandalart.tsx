import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postOverallTodo } from '@/api/domain/entireTodo';
import type {
  CreateOverallTodoRequest,
  CreateOverallTodoResponse,
} from '@/api/domain/entireTodo/type/entireTodo';
import type { BaseResponse, ErrorResponse } from '@/type/api';
import { QUERY_KEY } from '@/api/constant/queryKey';

export const useCreateOverallTodo = () => {
  const queryClient = useQueryClient();
  return useMutation<
    BaseResponse<CreateOverallTodoResponse>,
    ErrorResponse,
    CreateOverallTodoRequest
  >({
    mutationFn: postOverallTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.OVERALL_TODO });
    },
  });
};
