import * as styles from './EntireMandal.css';
import type { CoreGoal } from '../../types/mandal';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import MandalartGrid from '@/common/component/Mandalart/MandalartGrid/MandalartGrid';

const CENTER_INDEX = 4;

interface EntireMandalProps {
  coreGoals: CoreGoal[];
}

const EntireMandal = ({ coreGoals }: EntireMandalProps) => {
  const renderMandalart = (index: number) => (
    <Mandalart
      key={coreGoals[index].id}
      type="TODO_SUB"
      data={coreGoals[index]}
      isCenter={index === CENTER_INDEX}
    />
  );

  return <MandalartGrid className={styles.entireContainer}>{renderMandalart}</MandalartGrid>;
};

export default EntireMandal;
