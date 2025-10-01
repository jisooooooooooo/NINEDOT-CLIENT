import {
  GOOGLE_REDIRECT_URI,
  GOOGLE_REDIRECT_URI_LOCAL,
} from '@/api/auth/googleLogin/authConstants';
import axiosInstance from '@/api/axiosInstance';

const getAccessToken = async (code: string) => {
  const isLocal =
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  const redirectUri = isLocal ? GOOGLE_REDIRECT_URI_LOCAL : GOOGLE_REDIRECT_URI;

  const response = await axiosInstance.post(
    `/auth/oauth2/google/callback?redirect_uri=${redirectUri}`,
    { code },
  );

  return response.data.data;
};

export default getAccessToken;
