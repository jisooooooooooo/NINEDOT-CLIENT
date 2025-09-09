import AiModalBase from '@/common/component/AiModalBase/AiModalBase';
import Button from '@/common/component/Button/Button';

interface AiFailModalProps {
  onClose: () => void;
  message?: string;
}

const TEXT = {
  title: 'AI 추천 실패',
  defaultMessage: '다시 한 번 시도해주세요.',
  retryButton: '다시 시도',
} as const;

const AiFailModal = ({ onClose, message = TEXT.defaultMessage }: AiFailModalProps) => (
  <AiModalBase
    onClose={onClose}
    title={TEXT.title}
    description={message}
    titleId="ai-fail-title"
    footer={<Button text={TEXT.retryButton} onClick={onClose} />}
  />
);

export default AiFailModal;
