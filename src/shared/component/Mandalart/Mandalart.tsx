import { useState } from 'react';

import { Square } from './Square';
import * as styles from './Mandalart.css';

export interface MainGoal {
  title: string;
  position: number;
}

interface MandalartProps {
  mainGoal: MainGoal;
  subGoals: string[];
  onSubGoalSelect?: (position: number) => void;
}

const CENTER_INDEX = 4;

const Mandalart = ({ mainGoal, subGoals, onSubGoalSelect }: MandalartProps) => {
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
    const subGoalTitle = subGoals[subGoalIndex] || '';

    return (
      <Square.Sub
        key={index}
        content={subGoalTitle}
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
