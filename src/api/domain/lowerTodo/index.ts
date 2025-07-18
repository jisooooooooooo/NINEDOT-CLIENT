import type { GetCoreGoalsResponse } from './type/coreGoals';
import type { GetSubGoalsRequest, GetSubGoalsResponse } from './type/subGoals';
import type { GetSubGoalIdsRequest, GetSubGoalIdsResponse } from './type/subGoalIds';
import type { CreateSubGoalRequest, CreateSubGoalResponse } from './type/createSubGoal';
import type {
  AiRecommendSubGoalRequest,
  AiRecommendSubGoalResponse,
} from './type/aiRecommendSubGoal';

import { get, post } from '@/api';
import { END_POINT } from '@/api/constant/endPoint';
import type { BaseResponse } from '@/type/api';

export const getCoreGoals = async (mandalartId: number) => {
  const { data } = await get<BaseResponse<GetCoreGoalsResponse>>(
    `${END_POINT.ONBOARDING}/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.CORE_GOAL}`,
  );
  return data;
};

export const getSubGoals = async ({ mandalartId, coreGoalId, cycle }: GetSubGoalsRequest) => {
  const queryParams = new URLSearchParams();
  if (coreGoalId !== undefined) {
    queryParams.append('coreGoalId', coreGoalId.toString());
  }
  if (cycle) {
    queryParams.append('cycle', cycle);
  }

  const queryString = queryParams.toString();
  const url = `${END_POINT.MANDALART}/${mandalartId}/${END_POINT.SUB_GOAL}${queryString ? `?${queryString}` : ''}`;

  const { data } = await get<BaseResponse<GetSubGoalsResponse>>(url);
  return data;
};

export const getSubGoalIds = async ({ coreGoalId }: GetSubGoalIdsRequest) => {
  const { data } = await get<BaseResponse<GetSubGoalIdsResponse>>(
    `${END_POINT.CORE_GOAL}/${coreGoalId}/${END_POINT.SUB_GOAL}`,
  );
  return data;
};

export const createSubGoal = async (coreGoalId: number, request: CreateSubGoalRequest) => {
  const { data } = await post<CreateSubGoalResponse>(
    `/core-goals/${coreGoalId}/sub-goals`,
    request,
  );
  return data;
};

export const postAiRecommendSubGoal = async (
  coreGoalSnapshotId: number,
  body: AiRecommendSubGoalRequest,
) => {
  console.log('[2] postAiRecommendSubGoal 호출', { coreGoalSnapshotId, body });
  const { data } = await post<AiRecommendSubGoalResponse>(
    `/core-goals/${coreGoalSnapshotId}/ai`,
    body,
  );
  return data;
};

export const postSubGoal = async (mandalartId: number, request: CreateSubGoalRequest) => {
  const { data } = await post<CreateSubGoalResponse>(
    `/mandalarts/${mandalartId}/onboarding/recommendation`,
    request,
  );
  return data;
};

export const completeMandalart = async (mandalartId: number) => {
  const { data } = await post<BaseResponse<void>>(
    `/mandalarts/${mandalartId}/onboarding/recommendation`,
  );
  return data;
};

export const postAiRecommendSubGoals = async (
  coreGoalSnapshotId: number,
  goals: { title: string; cycle: string }[],
) => {
  const { data } = await post(`/core-goals/${coreGoalSnapshotId}/sub-goals/ai`, { goals });
  return data;
};
