import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { BaseResponse } from '@/type/api';

export type SubGoalIdPosition = {
  id: number;
  position: number;
};

export const getMandalAll = async (mandalartId: number) => {
  const response = await axiosInstance.get<BaseResponse<{ title: string }>>(
    `/${END_POINT.MANDALART}/${mandalartId}`,
  );
  return response.data.data;
};

export const getCoreGoals = async (mandalartId: number) => {
  const response = await axiosInstance.get<
    BaseResponse<{
      coreGoals: { id: number; title: string; position: number; aiGeneratable: boolean }[];
    }>
  >(`/${END_POINT.ONBOARDING}/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.CORE_GOAL}`);
  return response.data.data;
};

export const getSubGoalIds = async (coreGoalId: number) => {
  const response = await axiosInstance.get<BaseResponse<{ subGoalIds: SubGoalIdPosition[] }>>(
    `/${END_POINT.CORE_GOAL}/${coreGoalId}/${END_POINT.SUB_GOAL}`,
  );
  return response.data.data;
};

export const postOnboardingSubGoal = async (
  coreGoalId: number,
  { title, position, cycle }: { title: string; position: number; cycle: string },
) => {
  const response = await axiosInstance.post<BaseResponse<{ id: number }>>(
    `/${END_POINT.CORE_GOAL}/${coreGoalId}/${END_POINT.SUB_GOAL}`,
    { title, position, cycle },
  );
  return response.data.data;
};

export const patchOnboardingSubGoal = async ({
  subGoalId,
  title,
  cycle,
}: {
  subGoalId: number;
  title: string;
  cycle: string;
}) => {
  const response = await axiosInstance.patch<BaseResponse<null>>(
    `/${END_POINT.SUB_GOAL}/${subGoalId}`,
    { title, cycle },
  );
  return response.data;
};

export const deleteOnboardingSubGoal = async (subGoalId: number) => {
  const response = await axiosInstance.delete<BaseResponse<null>>(
    `/${END_POINT.SUB_GOAL}/${subGoalId}`,
  );
  return response.data;
};

export const postAiRecommendNewSubGoal = async (
  coreGoalId: number,
  body: { coreGoal: string; subGoal: { title: string }[] },
) => {
  const response = await axiosInstance.post<
    BaseResponse<{ aiRecommendedList: { title: string; cycle: string }[] }>
  >(`/${END_POINT.CORE_GOAL}/${coreGoalId}/ai`, body);
  return response.data.data;
};
