import { useState } from 'react';

import { IcDropdown } from '@/assets/svg';
import CycleList from '@/common/component/CycleDropDown/CycleList';
import {
  cycleContainer,
  cycleText,
  dropdownIcon,
} from '@/common/component/CycleDropDown/CycleDropDown.css';

const CYCLE_TYPE = ['매일', '매주', '한 번'] as const;

type CycleType = (typeof CYCLE_TYPE)[number];

const CycleDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<CycleType>(CYCLE_TYPE[0]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleType = (type: CycleType) => {
    setSelectedType(type);
    setIsOpen(false);
  };

  const state = isOpen ? 'clicked' : 'default';

  return (
    <>
      <button className={cycleContainer} onClick={toggleDropdown}>
        <span className={cycleText({ state })}>{selectedType}</span>
        <IcDropdown className={dropdownIcon({ state })} />
      </button>

      {isOpen && <CycleList selectedType={selectedType} onSelect={handleType} />}
    </>
  );
};

export default CycleDropDown;
