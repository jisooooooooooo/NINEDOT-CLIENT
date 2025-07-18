import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/api/domain/signup';
import { QUERY_KEY } from '@/api/constant/queryKey';

export const useGetUser = () => {
  return useQuery({
    queryKey: QUERY_KEY.USER_INFO,
    queryFn: getUser,
  });
};
