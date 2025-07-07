import { useState } from 'react';

import { IcDropdown } from '@/assets/svg';
import {
  cycleContainer,
  cycleText,
  dropdownIcon,
} from '@/common/component/CycleDropDown/CycleDropDown.css';

const CYCLE_TYPE = '매일';

const CycleDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const state = isOpen ? 'clicked' : 'default';

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <span className={cycleContainer} onClick={toggleDropdown}>
      <p className={cycleText({ state })}>{CYCLE_TYPE}</p>
      <IcDropdown className={dropdownIcon({ state })} />
    </span>
  );
};

export default CycleDropDown;
