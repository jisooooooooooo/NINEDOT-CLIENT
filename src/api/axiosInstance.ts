import axios from 'axios';

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

      if (status === 401) {
        // 인증 실패 - 로그아웃 처리나 리다이렉트 로직 추가 예정
      }

      if (status === 500) {
        // 서버 오류 발생
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
