import { useState } from 'react';

import { listContainer, listItem, listText } from '@/common/component/CycleDropDown/CycleList.css';

const CYCLE_TYPE = ['매일', '매주', '한 번'] as const;

type CycleType = (typeof CYCLE_TYPE)[number];

const CycleList = () => {
  const [selectedType, setSelectedType] = useState<CycleType>(CYCLE_TYPE[0]);

  const handleType = (currentType: CycleType) => {
    setSelectedType(currentType);
  };

  return (
    <div className={listContainer}>
      {CYCLE_TYPE.map((cycle) => {
        const state = selectedType === cycle ? 'selected' : 'default';

        return (
          <button key={cycle} className={listItem} onClick={() => handleType(cycle)}>
            <p className={listText({ state })}>{cycle}</p>
          </button>
        );
      })}
    </div>
  );
};

export default CycleList;
