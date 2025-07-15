import { generateGoogleLoginUrl } from './util/generateGoogleLoginUrl';

import * as styles from '@/api/auth/googleLogin/GoogleLogin.css';
import { IcGoogleLogo } from '@/assets/svg';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    const loginUrl = generateGoogleLoginUrl();
    window.location.href = loginUrl;
  };

  return (
    <button onClick={handleGoogleLogin} className={styles.buttonWrapper}>
      <IcGoogleLogo className={styles.googleIcon} />
      <span className={styles.loginText}>Google 계정으로 로그인</span>
    </button>
  );
};

export default GoogleLoginButton;
