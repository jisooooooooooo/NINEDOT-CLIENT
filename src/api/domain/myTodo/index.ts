import type { RecommendationResponse } from './type/recommendation';

import { END_POINT } from '@/api/constant/endPoint';
import axiosInstance from '@/api/axiosInstance';
import type { BaseResponse } from '@/type/api';

export const getRecommendation = async (
  mandalartId: number,
  params?: Record<string, string | number>,
): Promise<RecommendationResponse> => {
  const { data } = await axiosInstance.get<BaseResponse<RecommendationResponse>>(
    `/${END_POINT.MANDALART}/${mandalartId}/histories/recommendation`,
    { params },
  );
  return data.data;
};
