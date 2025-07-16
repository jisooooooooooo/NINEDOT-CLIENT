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

  const selectedCoreGoal = mandalartData.coreGoals[0];

  return (
    <div className={styles.viewContainer}>
      <Toggle defaultValue="onlygoal" onChange={handleViewChange} />
      {viewType === 'onlygoal' ? (
        <Mandalart type="MY_MANDAL" data={selectedCoreGoal} />
      ) : (
        <EntireMandal coreGoals={mandalartData.coreGoals} />
      )}
      <div className={styles.editBtnContainer}>
        <EditBtn />
      </div>
    </div>
  );
};

export default Mandal;
