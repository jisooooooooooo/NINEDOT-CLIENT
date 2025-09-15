import * as styles from '../UpperTodo.css';
import { ORDER_LABELS } from '../constants';

import { DEFAULT_PLACEHOLDER } from '@/common/component/MandalartTextField/constant/constants';
import TextField from '@/common/component/MandalartTextField/MandalartTextField';

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

  return (
    <div className={styles.textFieldColumn}>
      {values.map((value, index) => (
        <TextField
          key={index}
          variant="subGoal"
          value={value}
          onChange={(val) => handleChange(index, val)}
          placeholder={`${ORDER_LABELS[index]} ${DEFAULT_PLACEHOLDER.subGoal}`}
          data-id={idPositions?.[index]?.id?.toString()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && onEnter) {
              e.preventDefault();
              onEnter(index, e.currentTarget.value, idPositions?.[index]?.id);
            }
          }}
        />
      ))}
    </div>
  );
};

export default SubGoalFields;
