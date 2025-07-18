import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/api/constant/queryKey';
import { getPersona } from '@/api/domain/signup';

export const useGetPersona = () => {
  return useQuery({
    queryKey: [QUERY_KEY.PERSONA],
    queryFn: getPersona,
  });
};
