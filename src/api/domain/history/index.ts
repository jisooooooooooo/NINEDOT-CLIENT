import axiosInstance from '@/api/axiosInstance';
import type { historyResponse } from '@/api/domain/history/type/historyResponse';
import type { BaseResponse } from '@/type/api';

export const getHistory = async (mandalartId: number) => {
  const { data } = await axiosInstance.get<BaseResponse<historyResponse>>(
    `/mandalarts/${mandalartId}/histories`,
  );
  return data;
};
