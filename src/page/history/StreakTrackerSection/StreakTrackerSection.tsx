import StreakDetail from '@/page/history/component/StreakDetail/StreakDetail';
import StreakGrid from '@/page/history/component/StreakGrid/StreakGrid';
import { dayData } from '@/page/history/sampleData/dayData';
import { todoData } from '@/page/history/sampleData/todoData';
import * as styles from '@/page/history/StreakTrackerSection/StreakTrackerSection.css';
import { useState } from 'react';

const StreakTracker = () => {
  const [selectedDay, setSelectedDay] = useState(dayData.progressDays);

  const detailData = todoData.streaks.find((streak) => streak.streakDay === selectedDay);

  return (
    <div className={styles.streakTrackerContainer}>
      <StreakGrid progressDays={dayData.progressDays} onClick={setSelectedDay} />
      <StreakDetail detailData={detailData} />
    </div>
  );
};

export default StreakTracker;
