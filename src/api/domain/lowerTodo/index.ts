import type { GetCoreGoalsResponse } from './type/coreGoals';
import type { GetSubGoalsRequest, GetSubGoalsResponse } from './type/subGoals';

import { get } from '@/api';
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
