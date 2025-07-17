import { useQuery } from '@tanstack/react-query';

import { getJobList } from '@/api/domain/signup';
import type { JobResponse } from '@/api/domain/signup/type/JobResponse';
import { QUERY_KEY } from '@/api/constant/queryKey';

export const useGetJobList = () => {
  return useQuery<JobResponse>({
    queryKey: QUERY_KEY.JOB_LIST,
    queryFn: getJobList,
  });
};
