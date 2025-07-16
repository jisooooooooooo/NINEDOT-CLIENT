import axiosInstance from '../../axiosInstance';

import type { MandalartData } from '@/page/mandal/types/mandal';

interface ApiResponse {
  code: number;
  message: string;
  data: MandalartData;
}

export const getMandalAll = async (mandalartId: number) => {
  const response = await axiosInstance.get<ApiResponse>(`/api/v1/mandalarts/${mandalartId}/board`);
  return response.data.data;
};
