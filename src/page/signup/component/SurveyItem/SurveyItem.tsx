import { useState, type ReactNode } from 'react';

import {
  checkedIcon,
  defaultIcon,
  itemContainer,
  itemText,
} from '@/page/signup/component/SurveyItem/SurveyItem.css';
import { IcRadioDefault, IcRadioChecked } from '@/assets/svg';

const SurveyItem = ({ children }: { children: ReactNode }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={itemContainer}>
      {isChecked ? (
        <IcRadioDefault className={defaultIcon} />
      ) : (
        <IcRadioChecked className={checkedIcon} />
      )}
      <p className={itemText}>{children}</p>
    </div>
  );
};

export default SurveyItem;
