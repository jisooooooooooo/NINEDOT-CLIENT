import * as styles from './EntireMandal.css';
import type { CoreGoal, MainGoal } from '../../types/mandal';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import MandalartGrid from '@/common/component/Mandalart/MandalartGrid/MandalartGrid';

const CENTER_INDEX = 4;

interface EntireMandalProps {
  coreGoals: CoreGoal[];
  mainTitle: string;
}

const EntireMandal = ({ coreGoals, mainTitle }: EntireMandalProps) => {
  const mainGoalData: MainGoal = {
    title: mainTitle,
    subGoals: coreGoals.map((goal) => ({
      id: goal.id,
      title: goal.title,
      position: goal.position,
    })),
  };

  const renderMandalart = (index: number) => {
    if (index === CENTER_INDEX) {
      return <Mandalart key="main" type="TODO_SUB_COLORED" data={mainGoalData} isCenter />;
    }

    const adjustedIndex = index > CENTER_INDEX ? index - 1 : index;
    const coreGoal = coreGoals[adjustedIndex];
    if (!coreGoal) {
      return null;
    }

    return <Mandalart key={coreGoal.id} type="TODO_SUB" data={coreGoal} />;
  };

  return <MandalartGrid className={styles.entireContainer}>{renderMandalart}</MandalartGrid>;
};

export default EntireMandal;
