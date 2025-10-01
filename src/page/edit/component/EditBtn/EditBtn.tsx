import * as styles from './EditBtn.css';

import { IcSmallNext } from '@/assets/svg';
import { colors } from '@/style/token';

interface EditBtnProps {
  onClick: () => void;
  disabled?: boolean;
}

const EditBtn = ({ onClick, disabled }: EditBtnProps) => {
  return (
    <button className={styles.editBtnContainer} onClick={onClick} disabled={disabled}>
      <p className={styles.editBtnText}>수정 완료했어요</p>
      <div className={styles.iconWrapper}>
        <IcSmallNext color={disabled ? colors.grey05_32 : colors.grey11} />
      </div>
    </button>
  );
};
export default EditBtn;
