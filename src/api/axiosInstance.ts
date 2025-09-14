import axios from 'axios';

import { HTTP_STATUS } from '@/api/constant/httpStatus';

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
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === HTTP_STATUS.UNAUTHORIZED) {
        // 인증 실패 처리
      }

      if (status === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        // 서버 오류 처리
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
