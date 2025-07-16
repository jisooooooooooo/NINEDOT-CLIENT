import { useState } from 'react';

import * as styles from './HoverContent.css';
import { MANDALART_MOCK_DATA } from './mock';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import ModifyTextField from '@/common/component/ModifyTextField';
import CycleDropDown from '@/common/component/CycleDropDown/CycleDropDown';
import type { SubGoal, CoreGoal } from '@/page/mandal/types/mandal';

type CycleType = '매일' | '매주' | '한 번';

type SubGoalWithCycle = SubGoal & {
  cycle?: CycleType;
  subGoals: SubGoal[];
};

interface HoverContentProps {
  content: string;
  onChange: (value: string) => void;
  initialSubGoals?: SubGoal[];
  position?: number;
  id?: number;
}

const HoverContent = ({
  content,
  onChange,
  initialSubGoals = MANDALART_MOCK_DATA.subGoals,
  position = 0,
  id = 0,
}: HoverContentProps) => {
  console.log('HoverContent props:', { content, onChange, initialSubGoals, position, id });

  const [subGoals, setSubGoals] = useState<SubGoalWithCycle[]>(() => {
    const defaultSubGoals = Array.from({ length: 8 }, (_, index) => ({
      id: 0,
      title: '',
      position: index + 1,
      cycle: undefined,
      subGoals: [],
    }));

    return defaultSubGoals.map((defaultGoal) => {
      const existingGoal = initialSubGoals.find((goal) => goal.position === defaultGoal.position);
      return existingGoal ? { ...existingGoal, cycle: undefined, subGoals: [] } : defaultGoal;
    });
  });

  const handleTodoChange = (index: number, value: string) => {
    setSubGoals((prev) => prev.map((goal, i) => (i === index ? { ...goal, title: value } : goal)));
  };

  const handleCycleChange = (index: number, cycle: CycleType) => {
    setSubGoals((prev) => prev.map((goal, i) => (i === index ? { ...goal, cycle } : goal)));
  };

  const coreGoalData: CoreGoal = {
    id,
    title: content,
    position,
    subGoals: subGoals.map(({ id, title, position }) => ({ id, title, position })),
  };

  console.log('Rendering ModifyTextField with:', { content, onChange });

  return (
    <section className={styles.hoverContentContainer} onClick={(e) => e.stopPropagation()}>
      <Mandalart type="TODO_SUB" data={coreGoalData} />
      <form className={styles.inputContainer} onSubmit={(e) => e.preventDefault()}>
        <ModifyTextField
          variant="subGoal"
          value={content}
          onChange={onChange}
          placeholder="수정할 목표를 입력해주세요."
        />
        <ul className={styles.todoListContainer}>
          {subGoals.map((subGoal, index) => (
            <li key={`${subGoal.id}-${subGoal.position}`} className={styles.todoInputRow}>
              <CycleDropDown
                initialType={subGoal.cycle}
                onChange={(cycle) => handleCycleChange(index, cycle)}
              />
              <ModifyTextField
                variant="todo"
                value={subGoal.title}
                onChange={(value) => handleTodoChange(index, value)}
                placeholder={`${index + 1}번째 목표를 입력해주세요.`}
              />
            </li>
          ))}
        </ul>
      </form>
    </section>
  );
};

export default HoverContent;
