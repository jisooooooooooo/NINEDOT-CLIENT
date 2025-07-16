import * as styles from './EditBtn.css';

import { IcSmallNext } from '@/assets/svg';

interface EditBtnProps {
  onClick: () => void;
}

const EditBtn = ({ onClick }: EditBtnProps) => {
  return (
    <button className={styles.editBtnContainer} onClick={onClick}>
      <p className={styles.editBtnText}>수정 완료했어요</p>
      <div className={styles.iconWrapper}>
        <IcSmallNext />
      </div>
    </button>
  );
};
export default EditBtn;
