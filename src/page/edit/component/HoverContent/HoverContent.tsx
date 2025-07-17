import { useState } from 'react';

import * as styles from './HoverContent.css';
import { MANDALART_MOCK_DATA } from './mock';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import ModifyTextField from '@/common/component/ModifyTextField';
import CycleDropDown from '@/common/component/CycleDropDown/CycleDropDown';
import type { SubGoal } from '@/page/mandal/types/mandal';

type CycleType = '매일' | '매주' | '한 번';

interface SubGoalWithCycle extends SubGoal {
  cycle?: CycleType;
}

interface HoverContentProps {
  content: string;
  onChange: (value: string) => void;
}

const HoverContent = ({ content, onChange }: HoverContentProps) => {
  const [subGoals, setSubGoals] = useState<SubGoalWithCycle[]>(MANDALART_MOCK_DATA.subGoals);

  const handleTodoChange = (index: number, value: string) => {
    setSubGoals((prev) => prev.map((goal, i) => (i === index ? { ...goal, title: value } : goal)));
  };

  const handleCycleChange = (index: number, cycle: CycleType) => {
    setSubGoals((prev) => prev.map((goal, i) => (i === index ? { ...goal, cycle } : goal)));
  };

  return (
    <section className={styles.hoverContentContainer} onClick={(e) => e.stopPropagation()}>
      <Mandalart type="TODO_SUB" data={{ ...MANDALART_MOCK_DATA, subGoals }} />
      <form className={styles.inputContainer} onSubmit={(e) => e.preventDefault()}>
        <ModifyTextField
          variant="subGoal"
          value={content}
          onChange={onChange}
          placeholder="수정할 목표를 입력해주세요."
        />
        <ul className={styles.todoListContainer}>
          {subGoals.map((subGoal, index) => (
            <li key={subGoal.id} className={styles.todoInputRow}>
              <CycleDropDown
                initialType={subGoal.cycle}
                onChange={(cycle) => handleCycleChange(index, cycle)}
              />
              <ModifyTextField
                variant="todo"
                value={subGoal.title}
                onChange={(value) => handleTodoChange(index, value)}
                placeholder="수정할 목표를 입력해주세요."
              />
            </li>
          ))}
        </ul>
      </form>
    </section>
  );
};

export default HoverContent;
