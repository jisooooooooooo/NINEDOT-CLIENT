import { useState } from 'react';

import * as styles from './Toggle.css';

type ToggleType = 'onlygoal' | 'whole';

interface ToggleProps {
  defaultValue?: ToggleType;
  onChange?: (type: ToggleType) => void;
}

const Toggle = ({ defaultValue = 'onlygoal', onChange }: ToggleProps) => {
  const [activeType, setActiveType] = useState<ToggleType>(defaultValue);

  const handleClick = (type: ToggleType) => {
    setActiveType(type);
    onChange?.(type);
  };

  return (
    <div className={styles.toggleWrapper}>
      <button
        type="button"
        className={`${styles.toggleButton} ${
          activeType === 'onlygoal' ? styles.leftActiveButton : ''
        }`}
        onClick={() => handleClick('onlygoal')}
      >
        목표만
      </button>
      <button
        type="button"
        className={`${styles.toggleButton} ${
          activeType === 'whole' ? styles.rightActiveButton : ''
        }`}
        onClick={() => handleClick('whole')}
      >
        전체
      </button>
    </div>
  );
};

export default Toggle;
