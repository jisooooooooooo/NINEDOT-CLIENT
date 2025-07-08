import { useState } from 'react';

import { Square } from './Square';
import * as styles from './Mandalart.css';
import { MOCK_MANDALART_DATA } from './mock';

export type Cycle = 'DAILY' | 'WEEKLY' | 'ONCE';

export interface SubGoal {
  title: string;
  position: number;
  cycle: Cycle;
}

export interface MainGoal {
  title: string;
  position: number;
}

interface MandalartProps {
  mainGoal?: MainGoal;
  subGoals?: SubGoal[];
  onSubGoalSelect?: (position: number) => void;
}

const DEFAULT_MAIN_GOAL: MainGoal = MOCK_MANDALART_DATA.mainGoal;
const DEFAULT_SUB_GOALS: SubGoal[] = MOCK_MANDALART_DATA.subGoals;

const CENTER_INDEX = 4;

const Mandalart = ({
  mainGoal = DEFAULT_MAIN_GOAL,
  subGoals = DEFAULT_SUB_GOALS,
  onSubGoalSelect,
}: MandalartProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (index === CENTER_INDEX) {
      return;
    }
    const newSelectedIndex = selectedIndex === index ? null : index;
    setSelectedIndex(newSelectedIndex);

    if (newSelectedIndex !== null) {
      const subGoalIndex =
        newSelectedIndex > CENTER_INDEX ? newSelectedIndex - 1 : newSelectedIndex;
      onSubGoalSelect?.(subGoalIndex);
    }
  };

  const renderSquare = (index: number) => {
    if (index === CENTER_INDEX) {
      return <Square.Main key={index} content={mainGoal.title} />;
    }

    const subGoalIndex = index > CENTER_INDEX ? index - 1 : index;
    const subGoal = subGoals[subGoalIndex];

    return (
      <Square.Sub
        key={index}
        content={subGoal.title}
        isCompleted={selectedIndex === index}
        onClick={() => handleClick(index)}
      />
    );
  };

  const squares = Array(9)
    .fill(null)
    .map((_, index) => renderSquare(index));

  return <div className={styles.grid}>{squares}</div>;
};

export default Mandalart;
