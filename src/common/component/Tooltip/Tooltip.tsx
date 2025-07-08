import { useState } from 'react';

import { IcTooltipDelete, IcTriangle } from '@/assets/svg';
import {
  tooltipContainer,
  tooltipText,
  closeIcon,
  triangleIcon,
} from '@/common/component/Tooltip/Tooltip.css';

const TOOLTIP_TEXT = '한 번만 도움받을 수 있어요';

interface TooltipProps {
  className?: string;
}

const Tooltip = ({ className }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleDelete = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className={`${tooltipContainer} ${className ?? ''}`}>
        <span className={tooltipText}>{TOOLTIP_TEXT}</span>
        <button onClick={handleDelete}>
          <IcTooltipDelete className={closeIcon} />
        </button>
        <IcTriangle className={triangleIcon} />
      </div>
    )
  );
};

export default Tooltip;
