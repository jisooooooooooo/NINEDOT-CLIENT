import { useState } from 'react';

import { Main, Sub } from './Square';
import * as styles from './Mandalart.css';
import { MOCK_MANDALART_DATA } from './mock';
import MandalartGrid from './MandalartGrid/MandalartGrid';

import { useMandalAll } from '@/api/domain/mandalAll/hook';
import type { CoreGoal, MainGoal, SubGoal } from '@/page/mandal/types/mandal';

export type Cycle = 'DAILY' | 'WEEKLY' | 'ONCE';
export type MandalartType =
  | 'TODO_SUB'
  | 'TODO_MAIN'
  | 'TODO_EDIT'
  | 'MY_MANDAL'
  | 'MY_MANDAL_CENTER'
  | 'TODO_SUB_COLORED';

interface MandalartProps {
  type: MandalartType;
  data?: CoreGoal | MainGoal;
  onGoalClick?: (position: number, id?: number) => void;
  isCenter?: boolean;
  mainGoal?: string;
  subGoals?: SubGoal[];
}

const CENTER_INDEX = 4;

const indexToPosition = (index: number): number => {
  return index + 1;
};

const Mandalart = ({
  type,
  data,
  onGoalClick,
  isCenter = false,
  mainGoal,
  subGoals,
}: MandalartProps) => {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
  const { data: mandalartData } = useMandalAll(1);

  const handleGoalClick = (index: number, subGoal: SubGoal) => {
    const position = indexToPosition(index);
    setSelectedGoal(selectedGoal === position ? null : position);
    onGoalClick?.(position, subGoal.id);
  };

  const renderSquare = (index: number) => {
    const squareType = type === 'MY_MANDAL' ? 'MY_MANDAL' : isCenter ? 'MY_MANDAL_CENTER' : type;

    if (index === CENTER_INDEX) {
      return (
        <Main
          key={index}
          content={mainGoal || data?.title || mandalartData?.title || MOCK_MANDALART_DATA.mainGoal}
          type={squareType}
        />
      );
    }

    const subGoalIndex = index > CENTER_INDEX ? index - 1 : index;
    const subGoal =
      subGoals?.[subGoalIndex] ||
      data?.subGoals?.[subGoalIndex] ||
      mandalartData?.coreGoals?.[subGoalIndex]?.subGoals?.[0] ||
      MOCK_MANDALART_DATA.subGoals[subGoalIndex];

    const isEmptyGoal = !subGoal?.title || subGoal.title.trim() === '';

    return (
      <Sub
        key={index}
        content={subGoal.title}
        isCompleted={selectedGoal === indexToPosition(index)}
        onClick={() => handleGoalClick(index, subGoal)}
        type={squareType}
        disableInteraction={isEmptyGoal}
      />
    );
  };

  return <MandalartGrid className={styles.grid[type]}>{renderSquare}</MandalartGrid>;
};

export default Mandalart;
