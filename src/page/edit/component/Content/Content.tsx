import Mandalart from '@/common/component/Mandalart/Mandalart';

import * as styles from './Content.css';
import { HOVER_GUIDE_MESSAGES } from '../../constants';

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <Mandalart type="TODO_EDIT" />
      <div className={styles.hoverGuideContainer}>
        <p className={styles.hoverGuideText}>
          {HOVER_GUIDE_MESSAGES.DESCRIPTION[0]}
          <br />
          {HOVER_GUIDE_MESSAGES.DESCRIPTION[1]}
        </p>
      </div>
    </div>
  );
};

export default Content;
