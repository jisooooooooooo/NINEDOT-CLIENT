import { IcDivider } from '@/assets/svg';
import { userData } from '@/common/component/UserModal/userData';
import * as styles from '@/common/component/UserModal/UserModal.css';

const UserModal = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.profileContainer}>
        <img src={userData.profileImageUrl} className={styles.profileImage} />
        <div className={styles.textContainer}>
          <strong className={styles.nameText}> {userData.name}</strong>
          <p className={styles.emailText}>{userData.email}</p>
        </div>
      </div>
      <IcDivider className={styles.dividerIcon} />
      <button className={styles.logoutButton}>로그아웃</button>
    </div>
  );
};

export default UserModal;
