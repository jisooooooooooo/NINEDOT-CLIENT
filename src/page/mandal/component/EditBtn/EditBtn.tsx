import { useNavigate } from 'react-router-dom';

import * as styles from './EditBtn.css';

import { IcPencil } from '@/assets/svg';
import { PATH } from '@/route/path';

interface EditBtnProps {
  onClick?: () => void;
}

const EditBtn = ({ onClick }: EditBtnProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick?.();
    navigate(PATH.EDIT);
  };

  return (
    <button type="button" className={styles.editBtnWrapper} onClick={handleClick}>
      <span className={styles.editText}>수정하기</span>
      <div className={styles.editIcon}>
        <IcPencil className={styles.iconSvg} />
      </div>
    </button>
  );
};

export default EditBtn;
