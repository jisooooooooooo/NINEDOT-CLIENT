import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';

export interface CreateOverallTodoRequest {
  title: string;
}

export interface CreateOverallTodoResponse {
  id: number;
  title: string;
}

export const postOverallTodo = async (
  body: CreateOverallTodoRequest,
): Promise<CreateOverallTodoResponse> => {
  const res = await axiosInstance.post<{
    data: CreateOverallTodoResponse;
  }>(END_POINT.MANDALART, body);
  return res.data.data;
};
