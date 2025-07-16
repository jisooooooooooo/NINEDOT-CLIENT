import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { historyResponse } from '@/api/domain/history/type/historyResponse';
import type { BaseResponse } from '@/type/api';

export const getHistory = async (mandalartId: number) => {
  const { data } = await axiosInstance.get<BaseResponse<historyResponse>>(
    `/${END_POINT.MANDALART}/${mandalartId}/histories`,
  );
  return data.data;
};
