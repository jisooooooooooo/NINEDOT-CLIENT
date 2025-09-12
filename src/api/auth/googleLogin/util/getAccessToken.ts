import { GOOGLE_REDIRECT_URI } from '@/api/auth/googleLogin/authConstants';
import axiosInstance from '@/api/axiosInstance';

const getAccessToken = async (code: string) => {
  const response = await axiosInstance.post(
    `/auth/oauth2/google/callback?redirect_uri=${GOOGLE_REDIRECT_URI}`,
    { code },
  );

  return response.data.data;
};

export default getAccessToken;
