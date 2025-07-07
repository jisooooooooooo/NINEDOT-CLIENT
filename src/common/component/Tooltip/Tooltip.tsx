import { IcTooltipDelete, IcTriangle } from '@/assets/svg';
import {
  tooltipContainer,
  tooltipText,
  closeIcon,
  triangleIcon,
} from '@/common/component/Tooltip/Tooltip.css';

const TOOLTIP_TEXT = '한 번만 도움받을 수 있어요';

const Tooltip = () => {
  return (
    <div className={tooltipContainer}>
      <span className={tooltipText}>{TOOLTIP_TEXT}</span>
      <IcTooltipDelete className={closeIcon} />
      <IcTriangle className={triangleIcon} />
    </div>
  );
};

export default Tooltip;
