import {
  checkedIcon,
  defaultIcon,
  itemContainer,
  itemText,
} from '@/page/signup/component/SurveyItem/SurveyItem.css';
import { IcRadioDefault, IcRadioChecked } from '@/assets/svg';
import type { OptionType } from '@/page/signup/component/type/optionType';

type itemProps = {
  item: OptionType;
  isChecked: boolean;
  onClick: () => void;
};

const SurveyItem = ({ item, isChecked, onClick }: itemProps) => {
  return (
    <div className={itemContainer} onClick={onClick}>
      {isChecked ? (
        <IcRadioChecked className={checkedIcon} />
      ) : (
        <IcRadioDefault className={defaultIcon} />
      )}
      <p className={itemText}>{item.content}</p>
    </div>
  );
};

export default SurveyItem;
