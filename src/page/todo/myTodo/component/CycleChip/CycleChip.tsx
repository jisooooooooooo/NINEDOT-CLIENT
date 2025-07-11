import { chipBase, selectorChip, displayChip } from './CycleChip.css';
import type { CycleChipProps } from './CycleChip.types';

const CycleChip = ({ type, value, selected, onClick }: CycleChipProps) => {
  return type === 'selector' ? (
    <button
      type="button"
      className={`${chipBase} ${selected ? selectorChip.selected : selectorChip.deselected}`}
      onClick={() => onClick?.(value)}
      tabIndex={0}
    >
      {value}
    </button>
  ) : (
    <span className={`${chipBase} ${displayChip}`}>{value}</span>
  );
};

export default CycleChip;
