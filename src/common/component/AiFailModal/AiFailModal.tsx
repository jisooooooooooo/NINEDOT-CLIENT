import * as styles from './AiFailModal.css';

import MandalButton from '@/common/component/Button/Button';
import { IcModalDelete } from '@/assets/svg';

interface AiFailModalProps {
  onClose: () => void;
}

const AiFailModal = ({ onClose }: AiFailModalProps) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.contentWrapper}>
        <button type="button" className={styles.iconWrapper}>
          <IcModalDelete className={styles.closeIcon} onClick={onClose} />
        </button>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>AI 추천 실패</h2>
          <p className={styles.description}>다시 한 번 시도해주세요.</p>
          <MandalButton text="다시 시도" />
        </div>
      </div>
    </div>
  );
};

export default AiFailModal;
