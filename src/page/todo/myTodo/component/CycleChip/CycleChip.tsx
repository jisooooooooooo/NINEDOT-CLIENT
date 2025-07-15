import { chipBase, selectorChip, displayChip } from './CycleChip.css';

export type CycleType = 'DAILY' | 'WEEKLY' | 'ONCE';

const CYCLE_LABEL_MAP = {
  DAILY: '매일',
  WEEKLY: '매주',
  ONCE: '한 번',
} as const;

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
      {CYCLE_LABEL_MAP[value]}
    </button>
  ) : (
    <span className={`${chipBase} ${displayChip}`}>{CYCLE_LABEL_MAP[value]}</span>
  );
};

export default CycleChip;
