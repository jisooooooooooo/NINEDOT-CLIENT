import { chipBase, selectorChip, displayChip } from './CycleChip.css';

export type CycleType = '매일' | '매주' | '한번';

export interface CycleChipProps {
  type: 'selector' | 'display';
  value: CycleType;
  selected?: boolean;
  onClick?: (cycle: CycleType) => void;
}

const CycleChip = ({ type, value, selected, onClick }: CycleChipProps) => {
  return type === 'selector' ? (
    <button
      type="button"
      aria-pressed={selected}
      className={`${chipBase} ${selected ? selectorChip.selected : selectorChip.deselected}`}
      onClick={() => onClick?.(value)}
    >
      {value}
    </button>
  ) : (
    <span className={`${chipBase} ${displayChip}`}>{value}</span>
  );
};

export default CycleChip;
