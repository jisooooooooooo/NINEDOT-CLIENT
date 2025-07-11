export type CycleType = '매일' | '매주' | '한번';

export interface CycleChipProps {
  type: 'selector' | 'display';
  value: CycleType;
  selected?: boolean;
  onClick?: (cycle: CycleType) => void;
}
