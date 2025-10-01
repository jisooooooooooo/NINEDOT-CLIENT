import AiModalBase from '@/common/component/AiModalBase/AiModalBase';
import * as modalStyles from '@/common/component/AiModalBase/AiModalBase.css';
import Button from '@/common/component/Button/Button';

interface AiFailModalProps {
  onClose: () => void;
  message?: string;
  onRetry?: () => void;
}

const TEXT = {
  title: 'AI 추천 실패',
  defaultMessage: '다시 한 번 시도해주세요.',
  retryButton: '다시 시도',
} as const;

const AiFailModal = ({ onClose, message = TEXT.defaultMessage, onRetry }: AiFailModalProps) => {
  const handleRetry = () => {
    onClose();
    if (onRetry) {
      setTimeout(onRetry, 0);
    }
  };

  return (
    <AiModalBase
      onClose={onClose}
      title={TEXT.title}
      description={message}
      descriptionClassName={modalStyles.failDescription}
      titleId="ai-fail-title"
      footer={<Button text={TEXT.retryButton} onClick={handleRetry} />}
    />
  );
};

export default AiFailModal;
