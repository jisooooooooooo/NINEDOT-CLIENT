import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { BaseResponse } from '@/type/api';
import type {
  CreateOverallTodoRequest,
  CreateOverallTodoResponse,
} from '@/api/domain/entireTodo/type/entireTodo';

export const postOverallTodo = async (
  body: CreateOverallTodoRequest,
): Promise<BaseResponse<CreateOverallTodoResponse>> => {
  const res = await axiosInstance.post<BaseResponse<CreateOverallTodoResponse>>(
    END_POINT.MANDALART,
    body,
  );
  return res.data;
};
