import {
  GOOGLE_AUTH_BASE_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
  GOOGLE_SCOPE,
  GOOGLE_RESPONSE_TYPE,
} from '../authConstants';

export const generateGoogleLoginUrl = () => {
  const url = `${GOOGLE_AUTH_BASE_URL}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=${GOOGLE_RESPONSE_TYPE}&scope=${GOOGLE_SCOPE}`;
  return url;
};
