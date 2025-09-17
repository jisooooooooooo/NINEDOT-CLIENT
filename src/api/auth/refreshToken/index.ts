import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { BaseResponse } from '@/type/api';

export type RefreshResponse = {
  accessToken: string;
  message: string;
};

export const postRefreshToken = async () => {
  const { data } = await axiosInstance.post<BaseResponse<RefreshResponse>>(
    `/${END_POINT.AUTH}/refresh`,
  );
  return data.data;
};
