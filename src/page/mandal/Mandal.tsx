import { useMandalView } from './hook/useMandalView';
import * as styles from './Mandal.css';
import Toggle from './component/Toggle/Toggle';
import { mockMandalartData } from './mock/mandalartData';
import EntireMandal from './component/EntireMandal/EntireMandal';
import EditBtn from './component/EditBtn/EditBtn';

import Mandalart from '@/common/component/Mandalart/Mandalart';

const Mandal = () => {
  const { viewType, handleViewChange } = useMandalView();
  const { coreGoals } = mockMandalartData.data;

  return (
    <div className={styles.viewContainer}>
      <Toggle defaultValue="onlygoal" onChange={handleViewChange} />
      {viewType === 'onlygoal' ? (
        <Mandalart type="MY_MANDAL" />
      ) : (
        <EntireMandal coreGoals={coreGoals} />
      )}
      <div className={styles.editBtnContainer}>
        <EditBtn />
      </div>
    </div>
  );
};

export default Mandal;
