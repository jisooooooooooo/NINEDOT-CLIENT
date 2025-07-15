import { useEffect } from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import getGoogleAuthCode from './util/getGoogleAuthCode';
import getAccessToken from './util/getAccessToken';

const Example = () => {
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

  return (
    <>
      <GoogleLoginButton />
    </>
  );
};

export default Example;
