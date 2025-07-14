import { useState } from 'react';
import * as styles from './HoverContent.css';
import { MANDALART_MOCK_DATA } from './mock';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import ModifyTextField from '@/common/component/ModifyTextField';
import CycleDropDown from '@/common/component/CycleDropDown/CycleDropDown';

interface Goal {
  id: string;
  title: string;
}

interface EditedContent {
  subGoal: string;
  cycle: 'DAILY' | 'WEEKLY' | 'MONTHLY';
}

interface HoverContentProps {
  isVisible: boolean;
  content: EditedContent;
  onChange: (type: keyof EditedContent, value: EditedContent[keyof EditedContent]) => void;
}

const HoverContent = ({ isVisible, content, onChange }: HoverContentProps) => {
  const [selectedGoalIndex, setSelectedGoalIndex] = useState<number>(0);
  const [subGoals, setSubGoals] = useState(MANDALART_MOCK_DATA.subGoals);

  const handleSubGoalChange = (value: string) => {
    if (value.length <= 96) {
      onChange('subGoal', value);
    }
  };

  const handleTodoChange = (index: number, value: string) => {
    if (value.length <= 96) {
      const newSubGoals = [...subGoals];
      newSubGoals[index] = { ...newSubGoals[index], title: value };
      setSubGoals(newSubGoals);
    }
  };

  const handleGoalClick = (position: number) => {
    setSelectedGoalIndex(position);
  };

  return (
    <div
      className={styles.hoverContentContainer}
      style={{ display: isVisible ? 'flex' : 'none' }}
      onClick={(e) => e.stopPropagation()}
    >
      <Mandalart
        type="TODO_SUB"
        data={{ ...MANDALART_MOCK_DATA, subGoals }}
        onGoalClick={handleGoalClick}
      />
      <div className={styles.inputContainer}>
        <ModifyTextField
          variant="subGoal"
          value={content.subGoal}
          onChange={handleSubGoalChange}
          placeholder="수정할 목표를 입력해주세요."
        />
        <div className={styles.todoListContainer}>
          {subGoals.map((goal: Goal, index: number) => (
            <div key={goal.id} className={styles.todoInputRow}>
              <CycleDropDown />
              <ModifyTextField
                variant="todo"
                value={goal.title}
                onChange={(value) => handleTodoChange(index, value)}
                placeholder="수정할 목표를 입력해주세요."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverContent;
