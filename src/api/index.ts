import axios from 'axios';

const getAccessToken = (): string | null => {
  const user = localStorage.getItem('user');

  if (user) {
    const userObj = JSON.parse(user);
    return userObj?.accessToken || '';
  }

  return '';
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export const get = <T>(...args: Parameters<typeof api.get>) => {
  return api.get<T>(...args);
};

export const post = <T>(...args: Parameters<typeof api.post>) => {
  return api.post<T>(...args);
};

export const put = <T>(...args: Parameters<typeof api.put>) => {
  return api.put<T>(...args);
};

export const del = <T>(...args: Parameters<typeof api.delete>) => {
  return api.delete<T>(...args);
};
