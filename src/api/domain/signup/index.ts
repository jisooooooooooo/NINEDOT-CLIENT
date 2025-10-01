import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { JobResponse } from '@/api/domain/signup/type/JobResponse';
import type { PersonaResponse } from '@/api/domain/signup/type/PersonaResponse';
import type { SignupRequest } from '@/api/domain/signup/type/SignupRequest';
import type { UserType } from '@/store/types/authTypes';
import type { BaseResponse } from '@/type/api';

export const getJobList = async () => {
  const { data } = await axiosInstance.get<BaseResponse<JobResponse>>('/jobs');
  return data.data;
};

export const getPersona = async () => {
  const { data } = await axiosInstance.get<BaseResponse<PersonaResponse>>(`/${END_POINT.PERSONA}`);
  return data.data;
};
export const postSignUp = async (payload: SignupRequest) => {
  const { data } = await axiosInstance.post('/auth/signup', payload);
  return data.data;
};

export const getUser = async () => {
  const { data } = await axiosInstance.get<BaseResponse<UserType>>('/users/info');
  return data.data;
};

export const postLogout = async () => {
  const { data } = await axiosInstance.post('/auth/logout');
  return data.data;
};
