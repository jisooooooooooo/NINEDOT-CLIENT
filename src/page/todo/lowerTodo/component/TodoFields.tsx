import * as styles from '../LowerTodo.css';
import { ORDER_LABELS } from '@/common/constants/todo';

import { DEFAULT_PLACEHOLDER } from '@/common/component/TextField/mandalart/constants';
import { MandalartTextField } from '@/common/component/TextField/mandalart';
import CycleDropDown from '@/common/component/CycleDropDown/CycleDropDown';
import { Square } from '@/common/component/Mandalart/Square/Square';
import { truncateText } from '@/common/util/format';

interface TodoItem {
  title: string;
  cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
}

interface TodoFieldsProps {
  values: TodoItem[];
  onChange: (values: TodoItem[]) => void;
  onEnter?: (index: number, todo: TodoItem) => void;
  selectedCoreGoalTitle?: string;
}
const TodoFields = ({ values, onChange, onEnter, selectedCoreGoalTitle }: TodoFieldsProps) => {
  const updatedValues = (index: number, newTodo: TodoItem) =>
    values.map((v, i) => (i === index ? newTodo : v));

  const handleTitleChange = (index: number, newTitle: string) => {
    const newTodo = { ...values[index], title: newTitle };
    onChange(updatedValues(index, newTodo));
  };

  const handleCycleChange = (index: number, newCycle: TodoItem['cycle']) => {
    const newTodo = { ...values[index], cycle: newCycle };
    onChange(updatedValues(index, newTodo));

    if (onEnter) {
      onEnter(index, newTodo);
    }
  };

  const getHandleFieldCommit = (index: number) => (value: string, reason: 'enter' | 'blur') => {
    if (reason === 'enter' && onEnter) {
      const currentTodo = { ...values[index], title: value };
      onEnter(index, currentTodo);
    }
  };

  return (
    <div className={styles.todoWritingSection}>
      <div className={styles.smallMandalartContainer}>
        <div className={styles.smallMandalartGrid}>
          {Array.from({ length: 9 }, (_, index) => {
            if (index === 4) {
              return (
                <Square.Main
                  key={index}
                  content={truncateText(selectedCoreGoalTitle || '상위목표', 23)}
                  type="TODO_SUB"
                />
              );
            }
            const valueIndex = index > 4 ? index - 1 : index;
            return (
              <Square.Sub
                key={index}
                content={truncateText(values[valueIndex]?.title || '', 23)}
                type="TODO_SUB"
                isCompleted={!!values[valueIndex]?.title}
                onClick={() => {}}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.todoInputFields}>
        {values.map((todo, index) => (
          <div key={index} className={styles.todoFieldWrapper}>
            <div className={styles.dropdownWrapper}>
              <CycleDropDown
                initialType={todo.cycle}
                onChange={(cycle) => handleCycleChange(index, cycle)}
              />
            </div>
            <MandalartTextField
              variant="todo"
              value={todo.title}
              onChange={(val) => handleTitleChange(index, val)}
              onCommit={getHandleFieldCommit(index)}
              placeholder={`${ORDER_LABELS[index]} ${DEFAULT_PLACEHOLDER.todo}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoFields;
