import { useState, useEffect } from 'react';

import * as styles from './HoverContent.css';
import { MANDALART_MOCK_DATA } from './mock';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import ModifyTextField from '@/common/component/ModifyTextField';
import CycleDropDown from '@/common/component/CycleDropDown/CycleDropDown';
import type { SubGoal, CoreGoal } from '@/page/mandal/types/mandal';

type CycleType = 'DAILY' | 'WEEKLY' | 'ONCE';

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
  onSubGoalsChange?: (subGoals: SubGoal[]) => void;
}

const HoverContent = ({
  content,
  onChange,
  initialSubGoals = MANDALART_MOCK_DATA.subGoals,
  position = 0,
  id = 0,
  onSubGoalsChange,
}: HoverContentProps) => {
  const [subGoals, setSubGoals] = useState<SubGoalWithCycle[]>(() => {
    const defaultSubGoals = Array.from({ length: 8 }, (_, index) => ({
      id: 0,
      title: '',
      position: index + 1,
      cycle: 'DAILY' as const,
      subGoals: [],
    }));

    return defaultSubGoals.map((defaultGoal) => {
      const existingGoal = initialSubGoals.find((goal) => goal.position === defaultGoal.position);
      return existingGoal
        ? { ...existingGoal, cycle: existingGoal.cycle || ('DAILY' as const), subGoals: [] }
        : defaultGoal;
    });
  });

  useEffect(() => {
    const defaultSubGoals = Array.from({ length: 8 }, (_, index) => ({
      id: 0,
      title: '',
      position: index + 1,
      cycle: 'DAILY' as const,
      subGoals: [],
    }));

    setSubGoals(
      defaultSubGoals.map((defaultGoal) => {
        const existingGoal = initialSubGoals.find((goal) => goal.position === defaultGoal.position);
        return existingGoal
          ? { ...existingGoal, cycle: existingGoal.cycle || ('DAILY' as const), subGoals: [] }
          : defaultGoal;
      }),
    );
  }, [initialSubGoals]);

  const handleTodoChange = (index: number, value: string) => {
    setSubGoals((prev) => {
      const newSubGoals = prev.map((goal, i) => (i === index ? { ...goal, title: value } : goal));
      onSubGoalsChange?.(newSubGoals);
      return newSubGoals;
    });
  };

  const handleCycleChange = (index: number, cycle: CycleType) => {
    setSubGoals((prev) => {
      const newSubGoals = prev.map((goal, i) => (i === index ? { ...goal, cycle } : goal));
      onSubGoalsChange?.(newSubGoals);
      return newSubGoals;
    });
  };

  const coreGoalData: CoreGoal = {
    id,
    title: content,
    position,
    subGoals: subGoals.map(({ id, title, position }) => ({ id, title, position })),
  };

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
