import { useRef, forwardRef, useImperativeHandle } from 'react';

import * as styles from '../LowerTodo.css';

import { MandalartTextField } from '@/common/component/TextField/mandalart';
import CycleDropDown from '@/common/component/CycleDropDown/CycleDropDown';

interface TodoItem {
  title: string;
  cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
}

interface TodoFieldsProps {
  values: TodoItem[];
  onChange: (values: TodoItem[]) => void;
  onSave: (todo: TodoItem, index: number) => void;
  lastSavedTodos: TodoItem[];
  selectedGoalIndex: number;
  disabled?: boolean;
}

const LABEL_TO_CYCLE: Record<'매일' | '매주' | '한 번', TodoItem['cycle']> = {
  매일: 'DAILY',
  매주: 'WEEKLY',
  '한 번': 'ONCE',
};

type CycleLabel = '매일' | '매주' | '한 번';

const TodoFields = forwardRef(function TodoFields(
  {
    values,
    onChange,
    onSave,
    disabled = false,
  }: Omit<TodoFieldsProps, 'lastSavedTodos' | 'selectedGoalIndex'>,
  ref,
) {
  const saveFlags = useRef<boolean[]>(Array(values.length).fill(false));
  const isComposingArr = useRef<boolean[]>(Array(values.length).fill(false));

  useImperativeHandle(ref, () => ({
    isComposing: isComposingArr.current,
  }));

  const handleSave = (todo: TodoItem, index: number) => {
    if (isComposingArr.current[index]) {
      return;
    }
    if (saveFlags.current[index]) {
      return;
    }
    if (!todo.title.trim()) {
      return;
    }
    saveFlags.current[index] = true;
    onSave(todo, index);
    setTimeout(() => {
      saveFlags.current[index] = false;
    }, 100);
  };

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

  const getHandleFieldCommit = (index: number) => (_value: string, reason: 'enter' | 'blur') => {
    if (reason === 'enter') {
      handleSave(values[index], index);
    }
  };

  return (
    <div className={styles.todoWritingSection}>
      {values.map((item, index) => (
        <div key={index} className={styles.todoFieldWrapper}>
          <div className={styles.dropdownWrapper}>
            <CycleDropDown
              initialType={item.cycle}
              onChange={(label) => handleCycleChange(index, label as CycleLabel)}
            />
          </div>
          <MandalartTextField
            variant="todo"
            value={item.title}
            onChange={(newValue) => handleTitleChange(index, newValue)}
            onCommit={getHandleFieldCommit(index)}
            disabled={disabled}
            maxLength={30}
          />
        </div>
      ))}
    </div>
  );
});

export default TodoFields;
