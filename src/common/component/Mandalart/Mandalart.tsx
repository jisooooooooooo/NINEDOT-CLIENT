import { useState } from 'react';

import { Main, Sub } from './Square';
import * as styles from './Mandalart.css';
import { MOCK_MANDALART_DATA } from './mock';

export type Cycle = 'DAILY' | 'WEEKLY' | 'ONCE';
export type MandalartType = 'TODO_SUB' | 'TODO_MAIN' | 'TODO_EDIT' | 'MY_MANDAL';

export interface SubGoal {
  title: string;
  position: number;
  cycle: Cycle;
}

interface MandalartProps {
  mainGoal?: string;
  subGoals?: SubGoal[];
  type: MandalartType;
  onGoalClick?: (position: number) => void;
}

const CENTER_INDEX = 4;

const Mandalart = ({
  mainGoal = MOCK_MANDALART_DATA.mainGoal,
  subGoals = MOCK_MANDALART_DATA.subGoals,
  type,
  onGoalClick,
}: MandalartProps) => {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);

  const handleGoalClick = (position: number) => {
    setSelectedGoal(selectedGoal === position ? null : position);
    onGoalClick?.(position);
  };

  const renderSquare = (index: number) => {
    if (index === CENTER_INDEX) {
      return <Main key={index} content={mainGoal} type={type} />;
    }

    const subGoalIndex = index > CENTER_INDEX ? index - 1 : index;
    const subGoal = subGoals[subGoalIndex];

    return (
      <Sub
        key={index}
        content={subGoal.title}
        isCompleted={selectedGoal === subGoalIndex}
        onClick={() => handleGoalClick(subGoalIndex)}
        type={type}
      />
    );
  };

  const squares = Array(9)
    .fill(null)
    .map((_, index) => renderSquare(index));

  return <div className={styles.grid[type]}>{squares}</div>;
};

export default Mandalart;
