import { listContainer, listItem, listText } from '@/common/component/CycleDropDown/CycleList.css';

const CYCLE_TYPE = ['매일', '매주', '한 번'] as const;
type CycleType = (typeof CYCLE_TYPE)[number];

type CycleProps = {
  selectedType: CycleType;
  onSelect: (type: CycleType) => void;
};

const CycleList = ({ selectedType, onSelect }: CycleProps) => {
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
