import * as styles from '../UpperTodo.css';

import { DEFAULT_PLACEHOLDER } from '@/common/component/MandalartTextField/constant/constants';
import TextField from '@/common/component/MandalartTextField/MandalartTextField';

const ORDER_LABELS = [
  '첫번째',
  '두번째',
  '세번째',
  '네번째',
  '다섯번째',
  '여섯번째',
  '일곱번째',
  '여덟번째',
];

interface SubGoalFieldsProps {
  values: string[];
  onChange: (values: string[]) => void;
  idPositions?: { id: number; position: number }[];
  onEnter?: (index: number, value: string, coreGoalId?: number) => void;
  aiResponseData?: { id: number; position: number; title: string }[];
}

const SubGoalFields = ({
  values,
  onChange,
  idPositions,
  onEnter,
  aiResponseData,
}: SubGoalFieldsProps) => {
  const updatedValues = (index: number, newValue: string) =>
    values.map((v, i) => (i === index ? newValue : v));

  const handleChange = (index: number, newValue: string) => {
    const newValues = updatedValues(index, newValue);
    onChange(newValues);
  };

  const appliedValues = [...values];
  if (aiResponseData) {
    aiResponseData.forEach(({ position, title }) => {
      appliedValues[position - 1] = title;
    });
  }

  return (
    <div className={styles.textFieldColumn}>
      {appliedValues.map((value, index) => (
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
