import { useMandalView } from './hook/useMandalView';
import * as styles from './Mandal.css';
import Toggle from './component/Toggle/Toggle';
import { mockMandalartData } from './mock/mandalartData';
import type { CoreGoal } from './types/mandal';

import Mandalart from '@/common/component/Mandalart/Mandalart';

const CENTER_INDEX = 4;

const Mandal = () => {
  const { viewType, handleViewChange } = useMandalView();
  const { coreGoals } = mockMandalartData.data;

  return (
    <div className={styles.viewContainer}>
      <Toggle defaultValue="onlygoal" onChange={handleViewChange} />
      {viewType === 'onlygoal' ? (
        <Mandalart type="MY_MANDAL" />
      ) : (
        <div className={styles.entireContainer}>
          {coreGoals.map((goal: CoreGoal, index: number) => (
            <Mandalart
              key={goal.id}
              type="TODO_SUB"
              data={goal}
              isCenter={index === CENTER_INDEX}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Mandal;
