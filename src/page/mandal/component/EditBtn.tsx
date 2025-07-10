import * as styles from './EditBtn.css';

import { IcPencil } from '@/assets/svg';

interface EditBtnProps {
  onClick?: () => void;
}

const EditBtn = ({ onClick }: EditBtnProps) => {
  return (
    <button type="button" className={styles.editBtnWrapper} onClick={onClick}>
      <span className={styles.editText}>수정하기</span>
      <div className={styles.editIcon}>
        <IcPencil className={styles.iconSvg} />
      </div>
    </button>
  );
};

export default EditBtn;
