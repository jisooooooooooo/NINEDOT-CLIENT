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
    subGoals: mandalartData.coreGoals.map((goal) => ({
      id: goal.id,
      title: goal.title,
      position: goal.position,
    })),
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
