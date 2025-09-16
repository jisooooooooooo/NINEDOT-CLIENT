import * as styles from '../UpperTodo.css';

import { DEFAULT_PLACEHOLDER } from '@/common/component/TextField/mandalart/constants';
import { MandalartTextField } from '@/common/component/TextField/mandalart';

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

  const getHandleFieldCommit =
    (index: number, id?: number) => (value: string, reason: 'enter' | 'blur') => {
      if (reason === 'enter' && onEnter) {
        onEnter(index, value, id);
      }
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
