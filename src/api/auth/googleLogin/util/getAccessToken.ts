import axiosInstance from '../../../axiosInstance';

const getAccessToken = async (code: string) => {
  const response = await axiosInstance.post('/auth/oauth2/google/callback', {
    code,
  });
  return response.data;
};

export default getAccessToken;
