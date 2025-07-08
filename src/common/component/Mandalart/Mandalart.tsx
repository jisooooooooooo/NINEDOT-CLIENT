import { useState } from 'react';

import { Square } from './Square';
import * as styles from './Mandalart.css';
import { MOCK_MANDALART_DATA } from './mock';

export type Cycle = 'DAILY' | 'WEEKLY' | 'ONCE';
export type MandalartSize = 'small' | 'default';

export interface SubGoal {
  title: string;
  position: number;
  cycle: Cycle;
}

interface MandalartProps {
  mainGoal?: string;
  subGoals?: SubGoal[];
  size?: MandalartSize;
}

const CENTER_INDEX = 4;

const Mandalart = ({
  mainGoal = MOCK_MANDALART_DATA.mainGoal,
  subGoals = MOCK_MANDALART_DATA.subGoals,
  size = 'default',
}: MandalartProps) => {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);

  const handleGoalClick = (position: number) => {
    setSelectedGoal(selectedGoal === position ? null : position);
  };

  const renderSquare = (index: number) => {
    if (index === CENTER_INDEX) {
      return <Square.Main key={index} content={mainGoal} size={size} />;
    }

    const subGoalIndex = index > CENTER_INDEX ? index - 1 : index;
    const subGoal = subGoals[subGoalIndex];

    return (
      <Square.Sub
        key={index}
        content={subGoal.title}
        isCompleted={selectedGoal === subGoalIndex}
        onClick={() => handleGoalClick(subGoalIndex)}
        size={size}
      />
    );
  };

  const squares = Array(9)
    .fill(null)
    .map((_, index) => renderSquare(index));

  return <div className={size === 'small' ? styles.gridSmall : styles.gridDefault}>{squares}</div>;
};

export default Mandalart;
