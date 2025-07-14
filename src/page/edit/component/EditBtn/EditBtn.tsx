import * as styles from './EditBtn.css';

import { IcSmallNext } from '@/assets/svg';

const EditBtn = () => {
  return (
    <div className={styles.editBtnContainer}>
      <p className={styles.editBtnText}>수정 완료했어요</p>
      <div className={styles.iconWrapper}>
        <IcSmallNext />
      </div>
    </div>
  );
};
export default EditBtn;
