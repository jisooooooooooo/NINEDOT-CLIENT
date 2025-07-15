import { useEffect, useRef } from 'react';

import { IcDivider } from '@/assets/svg';
import { userData } from '@/common/component/UserModal/userData';
import * as styles from '@/common/component/UserModal/UserModal.css';

interface UserModalProps {
  setIsLoggedIn: (value: boolean) => void;
  onClose: () => void;
}

const UserModal = ({ setIsLoggedIn, onClose }: UserModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    onClose();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.modalContainer} ref={modalRef}>
      <div className={styles.profileContainer}>
        <img src={userData.profileImageUrl} className={styles.profileImage} alt="프로필 이미지" />
        <div className={styles.textContainer}>
          <strong className={styles.nameText}> {userData.name}</strong>
          <p className={styles.emailText}>{userData.email}</p>
        </div>
      </div>
      <IcDivider className={styles.dividerIcon} />
      <button onClick={handleLogout} className={styles.logoutButton}>
        로그아웃
      </button>
    </div>
  );
};

export default UserModal;
