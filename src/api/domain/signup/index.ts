import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { JobResponse } from '@/api/domain/signup/type/JobResponse';
import type { PersonaResponse } from '@/api/domain/signup/type/PersonaResponse';
import type { BaseResponse } from '@/type/api';

export const getJobList = async () => {
  const { data } = await axiosInstance.get<BaseResponse<JobResponse>>('/jobs');
  return data.data;
};

export const getPersona = async () => {
  const { data } = await axiosInstance.get<BaseResponse<PersonaResponse>>(`/${END_POINT.PERSONA}`);
  return data.data;
};
