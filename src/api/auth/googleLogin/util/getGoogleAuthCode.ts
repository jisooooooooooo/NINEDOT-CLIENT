const getGoogleAuthCode = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('code');
};

export default getGoogleAuthCode;
