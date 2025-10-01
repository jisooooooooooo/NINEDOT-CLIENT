import {
  itemContainer,
  itemText,
  radioIcon,
} from '@/page/signup/component/SurveyItem/SurveyItem.css';
import { IcRadioDefault, IcRadioChecked } from '@/assets/svg';
import type { OptionType } from '@/page/signup/type/optionType';

type itemProps = {
  item: OptionType;
  isChecked: boolean;
  onClick: () => void;
};

const SurveyItem = ({ item, isChecked, onClick }: itemProps) => {
  const RadioIcon = isChecked ? IcRadioChecked : IcRadioDefault;

  return (
    <div className={itemContainer}>
      <button onClick={onClick}>
        <RadioIcon className={radioIcon} />
      </button>
      <span className={itemText}>{item.content}</span>
    </div>
  );
};

export default SurveyItem;
