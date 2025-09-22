import { useMutation } from '@tanstack/react-query';

import { postSignUp } from '@/api/domain/signup';
import type { SignupRequest } from '@/api/domain/signup/type/SignupRequest';

export const usePostSignUp = () => {
  return useMutation({
    mutationFn: (payload: SignupRequest) => postSignUp(payload),
  });
};
