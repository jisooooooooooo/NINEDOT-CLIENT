import * as styles from './UpperGoal.css';

import { GradientCircle } from '@/common/component/GradientCircle/GradientCircle';

const UpperGoal = () => {
  return (
    <main className={styles.upperGoalContainer}>
      <GradientCircle variant="topRight" />
      <GradientCircle variant="bottomLeft1" />
      <GradientCircle variant="bottomLeft2" />
    </main>
  );
};

export default UpperGoal;
