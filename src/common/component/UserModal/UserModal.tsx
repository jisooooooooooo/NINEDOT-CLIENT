import { useEffect, useRef } from 'react';

import { IcDivider } from '@/assets/svg';
import * as styles from '@/common/component/UserModal/UserModal.css';
import { useGetUser } from '@/api/domain/signup/hook/useGetUser';

interface UserModalProps {
  setIsLoggedIn: (value: boolean) => void;
  onClose: () => void;
}

const UserModal = ({ setIsLoggedIn, onClose }: UserModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { data: user, isLoading, isError } = useGetUser();

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

  if (isLoading || isError || !user) {
    return null;
  }

  return (
    <div className={styles.modalContainer} ref={modalRef}>
      <div className={styles.profileContainer}>
        <img src={user.profileImageUrl} className={styles.profileImage} alt="프로필 이미지" />
        <div className={styles.textContainer}>
          <strong className={styles.nameText}>{user.name}</strong>
          <p className={styles.emailText}>{user.email}</p>
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
