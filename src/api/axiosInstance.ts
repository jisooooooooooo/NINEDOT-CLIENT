import axios from 'axios';

import { HTTP_STATUS } from '@/api/constant/httpStatus';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === HTTP_STATUS.UNAUTHORIZED) {
        // console.warn('인증 실패');
      }

      if (status === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        // console.error('서버 오류가 발생');
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
