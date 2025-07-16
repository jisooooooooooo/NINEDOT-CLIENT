import { createPortal } from 'react-dom';

import { IcModalDelete } from '@/assets/svg';
import * as styles from '@/common/component/LoginModal/LoginModal.css';
import loginLogo from '@/assets/image/login_logo.svg';
import GoogleLoginButton from '@/api/auth/googleLogin/GoogleLoginButton';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.iconWrapper} onClick={onClose}>
          <IcModalDelete className={styles.closeIcon} />
        </button>
        <div className={styles.contentWrapper}>
          <img src={loginLogo} alt="구글 로그인" />
          <GoogleLoginButton />
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default LoginModal;
