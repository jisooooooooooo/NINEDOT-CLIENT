import StreakDetail from '@/page/history/component/StreakDetail/StreakDetail';
import StreakGrid from '@/page/history/component/StreakGrid/StreakGrid';
import { dayData } from '@/page/history/sampleData/dayData';
import * as styles from '@/page/history/StreakTrackerSection/StreakTrackerSection.css';

const StreakTracker = () => {
  return (
    <div className={styles.streakTrackerContainer}>
      <StreakGrid progressDays={dayData.progressDays} />
      <StreakDetail />
    </div>
  );
};

export default StreakTracker;
