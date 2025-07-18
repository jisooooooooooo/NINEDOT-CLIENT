import { useState, useEffect } from 'react';

import { IcDropdown } from '@/assets/svg';
import CycleList from '@/common/component/CycleDropDown/CycleList';
import * as styles from '@/common/component/CycleDropDown/CycleDropDown.css';

const CYCLE_TYPE = ['매일', '매주', '한 번'] as const;
type DisplayCycleType = (typeof CYCLE_TYPE)[number];

const CYCLE_MAPPING = {
  매일: 'DAILY',
  매주: 'WEEKLY',
  '한 번': 'ONCE',
} as const;

type CycleType = 'DAILY' | 'WEEKLY' | 'ONCE';

type CycleDropDownProps = {
  initialType?: CycleType;
  onChange?: (type: CycleType) => void;
};

const CycleDropDown = ({ initialType = 'DAILY', onChange }: CycleDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<DisplayCycleType>(
    (Object.entries(CYCLE_MAPPING).find(([_, v]) => v === initialType)?.[0] as DisplayCycleType) ||
      '매일',
  );

  useEffect(() => {
    if (initialType) {
      const label =
        typeof initialType === 'string' &&
        (initialType === 'DAILY' || initialType === 'WEEKLY' || initialType === 'ONCE')
          ? CYCLE_TYPE[Object.values(CYCLE_MAPPING).indexOf(initialType)]
          : initialType;
      setSelectedType(label);
    }
  }, [initialType]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleType = (type: DisplayCycleType) => {
    setSelectedType(type);
    setIsOpen(false);
    onChange?.(CYCLE_MAPPING[type]);
  };

  const state = isOpen ? 'clicked' : 'default';

  return (
    <>
      <button className={styles.cycleContainer} onClick={toggleDropdown} type="button">
        <span className={styles.cycleText({ state })}>{selectedType}</span>
        <IcDropdown className={styles.dropdownIcon({ state })} />
      </button>

      <div className={styles.cycleListContainer}>
        {isOpen && <CycleList selectedType={selectedType} onSelect={handleType} />}
      </div>
    </>
  );
};

export default CycleDropDown;
