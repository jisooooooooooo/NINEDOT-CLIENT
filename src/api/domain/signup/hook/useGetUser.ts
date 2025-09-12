import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/api/domain/signup';
import { QUERY_KEY } from '@/api/constant/queryKey';

export const useGetUser = () => {
  const token = localStorage.getItem('accessToken');

  return useQuery({
    queryKey: QUERY_KEY.USER_INFO,
    queryFn: getUser,
    enabled: !!token,
  });
};
