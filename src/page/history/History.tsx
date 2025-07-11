import * as styles from '@/page/history/History.css';
import StreakTracker from '@/page/history/StreakTrackerSection/StreakTrackerSection';

const STREAK_BANNER_MESSAGE = '작은 실천을 66일 이어가면 나의 목표에 도달합니다';
const STREAK_DESCRIPTION_MESSAGE = '하루에 하나라도 실천하면 오늘의 점이 찍혀요!';

const History = () => {
  return (
    <div className={styles.historyContainer}>
      <div className={styles.layoutContainer}>
        <section className={styles.streakTrackerWrapper}>
          <h3 className={styles.streakTitle}>{STREAK_BANNER_MESSAGE}</h3>
          <p className={styles.streakDescription}>{STREAK_DESCRIPTION_MESSAGE}</p>
          <StreakTracker />
        </section>
      </div>
    </div>
  );
};

export default History;
