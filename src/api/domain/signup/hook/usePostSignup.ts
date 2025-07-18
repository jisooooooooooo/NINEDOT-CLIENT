import { useMutation } from '@tanstack/react-query';

import { postSignUp } from '@/api/domain/signup';
import type { SignupResponse } from '@/api/domain/signup/type/SignupResponse';

export const usePostSignUp = () => {
  return useMutation({
    mutationFn: (payload: SignupResponse) => postSignUp(payload),
  });
};
