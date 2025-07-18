import type { RecommendationResponse } from './type/recommendation';

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

export const postRecommendation = async (subGoalId: number) => {
  const data = await axiosInstance.post(`/${END_POINT.SUB_GOAL}/${subGoalId}/histories`);
  return data.data;
};

export const deleteRecommendation = async (subGoalId: number) => {
  const { data } = await axiosInstance.delete(`/${END_POINT.SUB_GOAL}/${subGoalId}/histories`);
  return data.data;
};
