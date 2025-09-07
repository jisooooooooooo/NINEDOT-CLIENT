import * as styles from './AiFailModal.css';

import Button from '@/common/component/Button/Button';
import { IcModalDelete } from '@/assets/svg';

interface AiFailModalProps {
  onClose: () => void;
  message?: string;
}

const AiFailModal = ({ onClose, message = '다시 한 번 시도해주세요.' }: AiFailModalProps) => (
  <div className={styles.modalContainer} role="dialog" aria-modal="true">
    <div className={styles.contentWrapper}>
      <div className={styles.iconWrapper}>
        <IcModalDelete className={styles.closeIcon} onClick={onClose} />
      </div>
      <div className={styles.textWrapper}>
        <h2 id="ai-fail-title" className={styles.title}>
          AI 추천 실패
        </h2>
        <p className={styles.description}>{message}</p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button text="다시 시도" onClick={onClose} />
      </div>
    </div>
  </div>
);

export default AiFailModal;
