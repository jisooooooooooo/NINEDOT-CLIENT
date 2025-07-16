import { useMandalView } from './hook/useMandalView';
import * as styles from './Mandal.css';
import Toggle from './component/Toggle/Toggle';
import EntireMandal from './component/EntireMandal/EntireMandal';
import EditBtn from './component/EditBtn/EditBtn';

import { useMandalAll } from '@/api/domain/mandalAll/hook';
import Mandalart from '@/common/component/Mandalart/Mandalart';

const Mandal = () => {
  const { viewType, handleViewChange } = useMandalView();
  const { data: mandalartData } = useMandalAll(1);

  if (!mandalartData) {
    return null;
  }

  const mainGoalData = {
    id: 0,
    position: 0,
    title: mandalartData.title,
    subGoals: Array.from({ length: 8 }, (_, i) => i + 1).map((position) => {
      const goalsWithPosition = mandalartData.coreGoals
        .filter((goal) => goal.position === position)
        .sort((a, b) => b.id - a.id);

      const latestGoal = goalsWithPosition[0];
      return latestGoal
        ? {
            id: latestGoal.id,
            title: latestGoal.title,
            position: latestGoal.position,
            subGoals: latestGoal.subGoals || [],
          }
        : {
            id: 0,
            title: '',
            position,
            subGoals: [],
          };
    }),
  };

  return (
    <div className={styles.viewContainer}>
      <Toggle defaultValue="onlygoal" onChange={handleViewChange} />
      {viewType === 'onlygoal' ? (
        <Mandalart type="MY_MANDAL" data={mainGoalData} />
      ) : (
        <EntireMandal coreGoals={mandalartData.coreGoals} mainTitle={mandalartData.title} />
      )}
      <div className={styles.editBtnContainer}>
        <EditBtn />
      </div>
    </div>
  );
};

export default Mandal;
