import Button from '@/common/component/Button/Button';
import Modal from '@/common/component/Modal/Modal';

interface AiFailModalProps {
  onClose: () => void;
  message?: string;
}

const AiFailModal = ({ onClose, message = '다시 한 번 시도해주세요.' }: AiFailModalProps) => (
  <Modal onClose={onClose}>
    <h2>AI 추천 실패</h2>
    <p>{message}</p>
    <Button text="다시 시도" onClick={onClose} />
  </Modal>
);

export default AiFailModal;
