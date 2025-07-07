import { IcDropdown } from '@/assets/svg';
import {
  cycleContainer,
  cycleText,
  dropdownIcon,
} from '@/common/component/CycleDropDown/CycleDropDown.css';

const CYCLE_TYPE = '매일';

const CycleDropDown = () => {
  return (
    <span className={cycleContainer}>
      <p className={cycleText}>{CYCLE_TYPE}</p>
      <IcDropdown className={dropdownIcon} />
    </span>
  );
};

export default CycleDropDown;
