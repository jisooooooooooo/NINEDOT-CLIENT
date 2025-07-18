import axiosInstance from '@/api/axiosInstance';

const getAccessToken = async (code: string) => {
  const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

  const response = await axiosInstance.post(
    `/auth/oauth2/google/callback?redirect_uri=${redirectUri}`,
    { code },
  );
  return response.data.data;
};

export default getAccessToken;
