import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { BaseResponse } from '@/type/api';

export const getMandalAll = async (mandalartId: number) => {
  const response = await axiosInstance.get<BaseResponse<{ title: string }>>(
    `/${END_POINT.MANDALART}/${mandalartId}`,
  );
  return response.data.data;
};
