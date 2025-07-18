import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { JobResponse } from '@/api/domain/signup/type/JobResponse';
import type { PersonaResponse } from '@/api/domain/signup/type/PersonaResponse';
import type { SignupResponse } from '@/api/domain/signup/type/SignupResponse';
import type { UserInfoResponse } from '@/api/domain/signup/type/UserInfoResponse';
import type { BaseResponse } from '@/type/api';

export const getJobList = async () => {
  const { data } = await axiosInstance.get<BaseResponse<JobResponse>>('/jobs');
  return data.data;
};

export const getPersona = async () => {
  const { data } = await axiosInstance.get<BaseResponse<PersonaResponse>>(`/${END_POINT.PERSONA}`);
  return data.data;
};
export const postSignUp = async (payload: SignupResponse) => {
  const { data } = await axiosInstance.post('/auth/signup', payload);
  return data.data;
};

export const getUser = async () => {
  const { data } = await axiosInstance.get<BaseResponse<UserInfoResponse>>('/users/info');
  return data.data;
};

export const postLogout = async () => {
  const { data } = await axiosInstance.post('/auth/logout');
  return data.data;
};
