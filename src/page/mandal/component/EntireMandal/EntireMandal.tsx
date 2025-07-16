import * as styles from './EntireMandal.css';
import type { CoreGoal } from '../../types/mandal';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import MandalartGrid from '@/common/component/Mandalart/MandalartGrid/MandalartGrid';

const CENTER_INDEX = 4;

interface EntireMandalProps {
  coreGoals: CoreGoal[];
}

const EntireMandal = ({ coreGoals }: EntireMandalProps) => {
  const renderMandalart = (index: number) => {
    const coreGoal = coreGoals[index];
    if (!coreGoal) {
      return null;
    }

    return (
      <Mandalart
        key={coreGoal.id}
        type="TODO_SUB"
        data={coreGoal}
        isCenter={index === CENTER_INDEX}
      />
    );
  };

  return <MandalartGrid className={styles.entireContainer}>{renderMandalart}</MandalartGrid>;
};

export default EntireMandal;
