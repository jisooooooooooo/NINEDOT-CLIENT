import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { BaseResponse } from '@/type/api';

export type CoreGoalIdPosition = {
  coreGoalId: number;
  position: number;
};

export const getMandalAll = async (mandalartId: number) => {
  const response = await axiosInstance.get<BaseResponse<{ title: string }>>(
    `/${END_POINT.MANDALART}/${mandalartId}`,
  );
  return response.data.data;
};

export const getCoreGoalIdPositions = async (mandalartId: number) => {
  const res = await axiosInstance.get<BaseResponse<CoreGoalIdPosition[]>>(
    `/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.CORE_GOAL}/id-positions`,
  );
  return res.data;
};

export const postOnboardingCoreGoal = async (
  mandalartId: number,
  { title, position }: { title: string; position: number },
) => {
  const response = await axiosInstance.post<BaseResponse<{ id: number }>>(
    `${END_POINT.ONBOARDING}/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.CORE_GOAL}`,
    { title, position },
  );
  return response.data.data;
};
