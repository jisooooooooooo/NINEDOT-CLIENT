import axiosInstance from '@/api/axiosInstance';

const getAccessToken = async (code: string) => {
  // const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI_LOCAL;

  const response = await axiosInstance.post(`/auth/oauth2/google/callback`, { code });

  return response.data.data;
};

export default getAccessToken;
