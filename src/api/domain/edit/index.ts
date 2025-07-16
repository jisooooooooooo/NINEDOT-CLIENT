import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { BaseResponse } from '@/type/api';

interface GoalIdPosition {
  id: number;
  position: number;
}

interface CoreGoalIdsResponse {
  coreGoalIds: GoalIdPosition[];
}

interface SubGoalIdsResponse {
  subGoalIds: GoalIdPosition[];
}

interface CoreGoal {
  id: number;
  title: string;
  position: number;
  aiGeneratable: boolean;
}

interface CoreGoalsResponse {
  coreGoals: CoreGoal[];
}

// 상위 목표 id, position 조회 API
export const getUpperGoalIds = async (
  mandalartId: number,
): Promise<BaseResponse<CoreGoalIdsResponse>> => {
  const response = await axiosInstance.get<BaseResponse<CoreGoalIdsResponse>>(
    `${END_POINT.MANDALART}/${mandalartId}/core-goals/id-positions`,
  );
  return response.data;
};

// 하위 목표 id, position 조회 API
export const getSubGoalIds = async (
  coreGoalId: number,
): Promise<BaseResponse<SubGoalIdsResponse>> => {
  const response = await axiosInstance.get<BaseResponse<SubGoalIdsResponse>>(
    `${END_POINT.CORE_GOAL}/${coreGoalId}/sub-goals`,
  );
  return response.data;
};

// 상위 목표 정보 조회 API
export const getCoreGoals = async (
  mandalartId: number,
): Promise<BaseResponse<CoreGoalsResponse>> => {
  const response = await axiosInstance.get<BaseResponse<CoreGoalsResponse>>(
    `${END_POINT.ONBOARDING}/${END_POINT.MANDALART}/${mandalartId}/core-goals`,
  );
  return response.data;
};
