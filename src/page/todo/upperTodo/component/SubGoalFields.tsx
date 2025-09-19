import * as styles from '../UpperTodo.css';
import { ORDER_LABELS } from '../constants';

import { DEFAULT_PLACEHOLDER } from '@/common/component/TextField/mandalart/constants';
import { MandalartTextField } from '@/common/component/TextField/mandalart';

interface SubGoalFieldsProps {
  values: string[];
  onChange: (values: string[]) => void;
  idPositions?: { id: number; position: number }[];
  onEnter?: (index: number, value: string, coreGoalId?: number) => void;
}

const SubGoalFields = ({ values, onChange, idPositions, onEnter }: SubGoalFieldsProps) => {
  const updatedValues = (index: number, newValue: string) =>
    values.map((v, i) => (i === index ? newValue : v));

  const handleChange = (index: number, newValue: string) => {
    const newValues = updatedValues(index, newValue);
    onChange(newValues);
  };

  const getHandleFieldCommit =
    (index: number, coreGoalId?: number) => (value: string, reason: 'enter' | 'blur') => {
      if (reason === 'enter' && onEnter) {
        onEnter(index, value, coreGoalId);
      }
    };

  return (
    <div className={styles.textFieldColumn}>
      {values.map((value, index) => (
        <MandalartTextField
          key={index}
          variant="subGoal"
          value={value}
          onChange={(val) => handleChange(index, val)}
          onCommit={getHandleFieldCommit(index, idPositions?.[index]?.id)}
          placeholder={`${ORDER_LABELS[index]} ${DEFAULT_PLACEHOLDER.subGoal}`}
        />
      ))}
    </div>
  );
};

export default SubGoalFields;
