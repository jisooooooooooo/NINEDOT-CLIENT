import { useMutation } from '@tanstack/react-query';

import { postLogout } from '@/api/domain/signup';

export const usePostLogout = () => {
  return useMutation({
    mutationFn: postLogout,
  });
};
