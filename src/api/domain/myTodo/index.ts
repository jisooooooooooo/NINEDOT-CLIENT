import type { RecommendationResponse } from './type/recommendation';
import type { CoreGoal } from './type/myTodo';

import { END_POINT } from '@/api/constant/endPoint';
import axiosInstance from '@/api/axiosInstance';
import type { BaseResponse } from '@/type/api';
import type { RecommendationParams } from '@/api/domain/myTodo/type/recommendationParams';

export const getRecommendation = async (mandalartId: number, params: RecommendationParams) => {
  const { data } = await axiosInstance.get<BaseResponse<RecommendationResponse>>(
    `/${END_POINT.MANDALART}/${mandalartId}/histories/recommendation`,
    { params },
  );
  return data.data;
};

export const getMandalAll = async (mandalartId: number) => {
  const response = await axiosInstance.get<BaseResponse<{ title: string }>>(
    `/${END_POINT.MANDALART}/${mandalartId}`,
  );
  return response.data.data;
};

export const getMandalCoreGoals = async (
  mandalartId: number,
): Promise<BaseResponse<{ coreGoals: CoreGoal[] }>> => {
  const res = await axiosInstance.get(
    `/${END_POINT.ONBOARDING}/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.CORE_GOAL}`,
  );
  return res.data;
};
