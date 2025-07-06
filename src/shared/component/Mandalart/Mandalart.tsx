import { useState } from 'react';
import { Square } from './Square/Square';
import * as styles from './Mandalart.css';

interface MandalartProps {
  mainGoal?: string;
  subGoals?: string[];
}

const Mandalart = ({
  mainGoal = '상위 목표를 입력하세요',
  subGoals = Array(8).fill('세부 목표를 입력하세요'),
}: MandalartProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (index === 4) return;
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const squares = Array(9)
    .fill(null)
    .map((_, index) => {
      const centerIndex = 4;

      if (index === centerIndex) {
        return <Square.Main key={index} content={mainGoal} />;
      }

      const subGoalIndex = index > centerIndex ? index - 1 : index;
      return (
        <Square.Sub
          key={index}
          content={subGoals[subGoalIndex]}
          isCompleted={selectedIndex === index}
          onClick={() => handleClick(index)}
        />
      );
    });

  return <div className={styles.grid}>{squares}</div>;
};

export default Mandalart;
