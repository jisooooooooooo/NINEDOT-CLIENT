import axiosInstance from '@/api/axiosInstance';
import type { JobResponse } from '@/api/domain/signup/type/JobResponse';
import type { BaseResponse } from '@/type/api';

export const getJobList = async () => {
  const { data } = await axiosInstance.get<BaseResponse<JobResponse>>('/jobs');
  return data.data;
};
