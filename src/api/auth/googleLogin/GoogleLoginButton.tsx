import { generateGoogleLoginUrl } from './util/generateGoogleLoginUrl';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    const loginUrl = generateGoogleLoginUrl();
    window.location.href = loginUrl;
  };

  return <button onClick={handleGoogleLogin}>구글 로그인 버튼</button>;
};

export default GoogleLoginButton;
