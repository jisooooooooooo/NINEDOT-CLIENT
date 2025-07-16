import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constants/endPoint';
import type { MandalartData } from '@/page/mandal/types/mandal';

interface ApiResponse {
  code: number;
  message: string;
  data: MandalartData;
}

export const getMandalAll = async (mandalartId: number) => {
  const response = await axiosInstance.get<ApiResponse>(
    `${END_POINT.MANDALART}/${mandalartId}/board`,
  );
  return response.data.data;
};
