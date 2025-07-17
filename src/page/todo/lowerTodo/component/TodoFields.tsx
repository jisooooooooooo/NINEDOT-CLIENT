import * as styles from '../LowerTodo.css';

import TextField from '@/common/component/MandalartTextField/MandalartTextField';
import CycleDropDown from '@/common/component/CycleDropDown/CycleDropDown';

interface TodoItem {
  title: string;
  cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
}

interface TodoFieldsProps {
  values: TodoItem[];
  onChange: (values: TodoItem[]) => void;
  disabled?: boolean;
}

const CYCLE_LABELS: Record<TodoItem['cycle'], '매일' | '매주' | '한 번'> = {
  DAILY: '매일',
  WEEKLY: '매주',
  ONCE: '한 번',
};
const LABEL_TO_CYCLE: Record<'매일' | '매주' | '한 번', TodoItem['cycle']> = {
  '매일': 'DAILY',
  '매주': 'WEEKLY',
  '한 번': 'ONCE',
};

type CycleLabel = '매일' | '매주' | '한 번';

const TodoFields = ({ values, onChange, disabled = false }: TodoFieldsProps) => {
  const handleTitleChange = (index: number, newTitle: string) => {
    if (disabled) {
      return;
    }
    const newValues = values.map((v, i) => (i === index ? { ...v, title: newTitle } : v));
    onChange(newValues);
  };

  const handleCycleChange = (index: number, newLabel: CycleLabel) => {
    if (disabled) {
      return;
    }
    const newCycle = LABEL_TO_CYCLE[newLabel] || 'DAILY';
    const newValues = values.map((v, i) => (i === index ? { ...v, cycle: newCycle } : v));
    onChange(newValues);
  };

  return (
    <div className={styles.todoWritingSection}>
      {values.map((item, index) => (
        <div key={index} className={styles.todoFieldWrapper}>
          <div className={styles.dropdownWrapper}>
            <CycleDropDown
              initialType={CYCLE_LABELS[item.cycle]}
              onChange={(label) => handleCycleChange(index, label as CycleLabel)}
            />
          </div>
          <TextField
            variant="todo"
            value={item.title}
            onChange={(newValue) => handleTitleChange(index, newValue)}
            placeholder="할 일을 입력해주세요"
            disabled={disabled}
            maxLength={30}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoFields;
