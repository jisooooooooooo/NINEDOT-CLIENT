import { useEffect } from 'react';

import getGoogleAuthCode from '@/api/auth/googleLogin/util/getGoogleAuthCode';
import getAccessToken from '@/api/auth/googleLogin/util/getAccessToken';

export const useGoogleAuthEffect = () => {
  useEffect(() => {
    const getToken = async () => {
      const code = getGoogleAuthCode();

      if (!code) {
        return;
      }

      try {
        const data = await getAccessToken(code);
        console.log('로그인 성공:', data);
      } catch (error) {
        console.error('로그인 실패:', error);
      }
    };

    getToken();
  }, []);
};
