import { IcModalDelete } from '@/assets/svg';

import * as styles from '@/common/component/LoginModal/LoginModal.css';
import loginLogo from '@/assets/image/login_logo.svg';
import IcGoogleLogo from '@/assets/svg/IcGoogleLogo';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  return (
    <div className={styles.modalContainer}>
      <button type="button" className={styles.iconWrapper} onClick={onClose}>
        <IcModalDelete className={styles.closeIcon} />
      </button>
      <div className={styles.contentWrapper}>
        <img src={loginLogo} />
        <div className={styles.buttonWrapper}>
          <IcGoogleLogo className={styles.googleIcon} />
          <span className={styles.loginText}>Google 계정으로 로그인</span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
