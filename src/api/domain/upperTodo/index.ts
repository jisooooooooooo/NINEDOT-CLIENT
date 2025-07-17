import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { BaseResponse } from '@/type/api';

export type CoreGoalIdPosition = {
  id: number;
  position: number;
};

export const getMandalAll = async (mandalartId: number) => {
  const response = await axiosInstance.get<BaseResponse<{ title: string }>>(
    `/${END_POINT.MANDALART}/${mandalartId}`,
  );
  return response.data.data;
};

export const getCoreGoalIdPositions = async (mandalartId: number) => {
  const res = await axiosInstance.get<BaseResponse<{ coreGoalIds: CoreGoalIdPosition[] }>>( // 응답 구조 변경
    `/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.CORE_GOAL}/id-positions`,
  );
  return res.data.data;
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

export const patchOnboardingCoreGoal = async ({
  coreGoalId,
  title,
}: {
  coreGoalId: number;
  title: string;
}) => {
  const response = await axiosInstance.patch<BaseResponse<{ id: number }>>(
    `/${END_POINT.ONBOARDING}/${END_POINT.CORE_GOAL}/${coreGoalId}`,
    { title },
  );
  return response.data.data;
};

export const deleteOnboardingCoreGoal = async (coreGoalId: number) => {
  const response = await axiosInstance.delete<BaseResponse<null>>(
    `/${END_POINT.ONBOARDING}/${END_POINT.CORE_GOAL}/${coreGoalId}`,
  );
  return response.data;
};

export const postAiRecommendCoreGoal = async (
  mandalartId: number,
  body: {
    mandalart: string;
    coreGoal: { title: string }[];
  },
) => {
  const res = await axiosInstance.post<BaseResponse<{ aiRecommendedList: { title: string }[] }>>(
    `/${END_POINT.MANDALART}/${mandalartId}/ai`,
    body,
  );
  return res.data.data.aiRecommendedList;
};

export const postAiRecommendToCoreGoals = async (
  mandalartId: number,
  body: { goals: string[] },
) => {
  const response = await axiosInstance.post<
    BaseResponse<{ coreGoals: { id: number; position: number; title: string }[] }>
  >(`/${END_POINT.MANDALART}/${mandalartId}/${END_POINT.CORE_GOAL}/ai`, body);
  return response.data.data;
};
