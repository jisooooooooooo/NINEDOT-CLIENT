import * as styles from './Mandal.css';
import Toggle from './component/Toggle/Toggle';

import Mandalart from '@/common/component/Mandalart/Mandalart';

const Mandal = () => {
  return (
    <div className={styles.viewContainer}>
      <Toggle />
      <Mandalart type={'MY_MANDAL'} />
    </div>
  );
};

export default Mandal;
