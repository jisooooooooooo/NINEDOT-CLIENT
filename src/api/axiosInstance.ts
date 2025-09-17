import axios from 'axios';
import { HTTP_STATUS } from '@/api/constant/httpStatus';
import { postRefreshToken } from '@/api/auth/refreshToken';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response) {
      const { status } = error.response;

      if (status === HTTP_STATUS.UNAUTHORIZED) {
        try {
          const { accessToken } = await postRefreshToken();
          localStorage.setItem('accessToken', accessToken);

          axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        } catch (refreshError) {
          console.error('리프레시 토큰 만료, 재로그인 필요');
          return Promise.reject(refreshError);
        }
      }

      if (status === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        console.error('서버 오류가 발생');
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
