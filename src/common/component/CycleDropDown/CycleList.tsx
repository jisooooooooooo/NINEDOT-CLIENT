import { listContainer, listItem, listText } from './CycleList.css';

const CYCLE_TYPE = ['매일', '매주', '한 번'] as const;
type DisplayCycleType = (typeof CYCLE_TYPE)[number];

interface CycleListProps {
  selectedType: DisplayCycleType;
  onSelect: (type: DisplayCycleType) => void;
}

const CycleList = ({ selectedType, onSelect }: CycleListProps) => {
  return (
    <div className={listContainer}>
      {CYCLE_TYPE.map((type) => {
        const state = selectedType === type ? 'selected' : 'default';

        return (
          <button key={type} className={listItem} onClick={() => onSelect(type)}>
            <span className={listText({ state })}>{type}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CycleList;
