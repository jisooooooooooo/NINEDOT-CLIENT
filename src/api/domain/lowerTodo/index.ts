import type { GetCoreGoalsResponse } from './type/coreGoals';

import { get } from '@/api';
import { END_POINT } from '@/api/constant/endPoint';
import type { BaseResponse } from '@/type/api';

export const getCoreGoals = async (mandalartId: number) => {
  const { data } = await get<BaseResponse<GetCoreGoalsResponse>>(
    `${END_POINT.ONBOARDING}/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.CORE_GOAL}`
  );
  return data;
};
