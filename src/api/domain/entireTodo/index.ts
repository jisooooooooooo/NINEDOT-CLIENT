import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';

export interface CreateEntireTodoRequest {
  title: string;
}

export interface CreateEntireTodoResponse {
  id: number;
  title: string;
}

export const postEntireTodo = async (
  body: CreateEntireTodoRequest,
): Promise<CreateEntireTodoResponse> => {
  const res = await axiosInstance.post<{
    data: CreateEntireTodoResponse;
  }>(END_POINT.MANDALART, body);
  return res.data.data;
};
