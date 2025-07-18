import type { RecommendationResponse } from './type/recommendation';
import type { CoreGoal } from './type/myTodo';
import type { SubGoal } from '../lowerTodo/type/subGoals';

import type { CycleType } from '@/page/todo/myTodo/component/CycleChip';
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

export const checkSubGoal = async (subGoalId: number, date: string): Promise<void> => {
  await axiosInstance.post(`/${END_POINT.SUB_GOAL}/${subGoalId}/histories`, null, {
    params: { date },
  });
};

export const uncheckSubGoal = async (subGoalId: number): Promise<void> => {
  await axiosInstance.delete(`/${END_POINT.SUB_GOAL}/${subGoalId}/histories`);
};

export const getMandalCoreGoals = async (
  mandalartId: number,
): Promise<BaseResponse<{ coreGoals: CoreGoal[] }>> => {
  const res = await axiosInstance.get(
    `/${END_POINT.ONBOARDING}/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.CORE_GOAL}`,
  );
  return res.data;
};

export const getSubGoals = async (
  mandalartId: number,
  coreGoalId?: number,
  cycle?: CycleType,
): Promise<{ subGoals: SubGoal[] }> => {
  const response = await axiosInstance.get<BaseResponse<{ subGoals: SubGoal[] }>>(
    `/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.SUB_GOAL}`,
    {
      params: {
        ...(coreGoalId !== undefined && { coreGoalId }),
        ...(cycle && { cycle }),
      },
    },
  );
  return response.data.data;
};

export const postRecommendation = async (subGoalId: number) => {
  const data = await axiosInstance.post(`/${END_POINT.SUB_GOAL}/${subGoalId}/histories`);
  return data.data;
};

export const deleteRecommendation = async (subGoalId: number) => {
  const { data } = await axiosInstance.delete(`/${END_POINT.SUB_GOAL}/${subGoalId}/histories`);
  return data.data;
};
