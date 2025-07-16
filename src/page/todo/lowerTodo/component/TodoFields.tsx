import * as styles from '../LowerTodo.css';

import TextField from '@/common/component/MandalartTextField/MandalartTextField';
import CycleDropDown from '@/common/component/CycleDropDown/CycleDropDown';

interface TodoFieldsProps {
  values: string[];
  onChange: (values: string[]) => void;
  disabled?: boolean;
}

const TodoFields = ({ values, onChange, disabled = false }: TodoFieldsProps) => {
  const handleChange = (index: number, newValue: string) => {
    if (disabled) {
      return;
    }
    const newValues = values.map((v, i) => (i === index ? newValue : v));
    onChange(newValues);
  };

  return (
    <div className={styles.todoWritingSection}>
      {values.map((value, index) => (
        <div key={index} className={styles.todoFieldWrapper}>
          <div className={styles.dropdownWrapper}>
            <CycleDropDown />
          </div>
          <TextField
            variant="todo"
            value={value}
            onChange={(newValue) => handleChange(index, newValue)}
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
