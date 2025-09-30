import {
  GOOGLE_AUTH_BASE_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
  GOOGLE_REDIRECT_URI_LOCAL,
  GOOGLE_SCOPE,
  GOOGLE_RESPONSE_TYPE,
} from '../authConstants';

export const generateGoogleLoginUrl = () => {
  const isLocal =
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  const redirectUri = isLocal ? GOOGLE_REDIRECT_URI_LOCAL : GOOGLE_REDIRECT_URI;

  const url = `${GOOGLE_AUTH_BASE_URL}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=${GOOGLE_RESPONSE_TYPE}&scope=${GOOGLE_SCOPE}`;
  return url;
};
