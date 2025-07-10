import * as styles from './EditBtn.css';

import { IcPencil } from '@/assets/svg';

interface EditBtnProps {
  onClick?: () => void;
}

const EditBtn = ({ onClick }: EditBtnProps) => {
  return (
    <button type="button" className={styles.editBtnWrapper} onClick={onClick}>
      <IcPencil className={styles.editIcon} />
    </button>
  );
};

export default EditBtn;
