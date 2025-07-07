import { useState } from 'react';

import { IcDropdown } from '@/assets/svg';
import {
  cycleContainer,
  cycleText,
  dropdownIcon,
} from '@/common/component/CycleDropDown/CycleDropDown.css';
import CycleList from '@/common/component/CycleDropDown/CycleList';

const CYCLE_TYPE = '매일';

const CycleDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = isOpen ? 'clicked' : 'default';

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button className={cycleContainer} onClick={toggleDropdown}>
        <p className={cycleText({ state })}>{CYCLE_TYPE}</p>
        <IcDropdown className={dropdownIcon({ state })} />
      </button>

      {isOpen && <CycleList />}
    </>
  );
};

export default CycleDropDown;
