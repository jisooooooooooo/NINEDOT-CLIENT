import * as styles from '../UpperTodo.css';

import { DEFAULT_PLACEHOLDER } from '@/common/component/MandalartTextField/constant/constants';
import TextField from '@/common/component/MandalartTextField/MandalartTextField';

const ORDER_PREFIX = [
  '첫번째',
  '두번째',
  '세번째',
  '네번째',
  '다섯번째',
  '여섯번째',
  '일곱번째',
  '여덟번째',
];

const SubGoalFields = () => {
  return (
    <div className={styles.textFieldColumn}>
      {[...Array(8)].map((_, index) => (
        <TextField
          key={index}
          variant="subGoal"
          value=""
          onChange={() => {}}
          placeholder={`${ORDER_PREFIX[index]} ${DEFAULT_PLACEHOLDER.subGoal}`}
        />
      ))}
    </div>
  );
};

export default SubGoalFields;
