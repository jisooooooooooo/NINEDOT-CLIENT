import { IcTooltipDelete, IcTriangle } from '@/assets/svg';
import {
  tooltipContainer,
  tooltipText,
  closeIcon,
  triangleIcon,
} from '@/common/component/Tooltip/Tooltip.css';

const TOOLTIP_TEXT = '각 목표별로 한 번만 도움받을 수 있어요';

interface TooltipProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Tooltip = ({ className, isOpen, onClose }: TooltipProps) => {
  if (!isOpen) {
    return null;
  }

  const handleDelete = () => {
    onClose();
  };

  return (
    <div className={`${tooltipContainer} ${className ?? ''}`}>
      <span className={tooltipText}>{TOOLTIP_TEXT}</span>
      <button onClick={handleDelete}>
        <IcTooltipDelete className={closeIcon} />
      </button>
      <IcTriangle className={triangleIcon} />
    </div>
  );
};

export default Tooltip;
