import * as styles from './EntireMandal.css';
import type { CoreGoal } from '../../types/mandal';

import Mandalart from '@/common/component/Mandalart/Mandalart';

const CENTER_INDEX = 4;

interface EntireMandalProps {
  coreGoals: CoreGoal[];
}

const EntireMandal = ({ coreGoals }: EntireMandalProps) => {
  return (
    <div className={styles.entireContainer}>
      {coreGoals.map((goal: CoreGoal, index: number) => (
        <Mandalart key={goal.id} type="TODO_SUB" data={goal} isCenter={index === CENTER_INDEX} />
      ))}
    </div>
  );
};

export default EntireMandal;
