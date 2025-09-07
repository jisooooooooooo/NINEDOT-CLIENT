import * as styles from './AiFailModal.css';

import AiModalBase from '@/common/component/AiModalBase/AiModalBase';
import Button from '@/common/component/Button/Button';

interface AiFailModalProps {
  onClose: () => void;
  message?: string;
}

const AiFailModal = ({ onClose, message = '다시 한 번 시도해주세요.' }: AiFailModalProps) => (
  <AiModalBase onClose={onClose} title="AI 추천 실패" description={message} titleId="ai-fail-title">
    <div className={styles.buttonWrapper}>
      <Button text="다시 시도" onClick={onClose} />
    </div>
  </AiModalBase>
);

export default AiFailModal;
