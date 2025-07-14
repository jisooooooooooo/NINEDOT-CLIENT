import { useState } from 'react';

import StreakDetail from '@/page/history/component/StreakDetail/StreakDetail';
import StreakGrid from '@/page/history/component/StreakGrid/StreakGrid';
import { todoData } from '@/page/history/sampleData/todoData';
import * as styles from '@/page/history/StreakTrackerSection/StreakTrackerSection.css';

type StreakTrackerProps = {
  selectedDay: number | null;
  setSelectedDay: (day: number | null) => void;
};

const StreakTracker = ({ selectedDay, setSelectedDay }: StreakTrackerProps) => {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const isLocked = selectedDay !== null;
  const visibleDay = isLocked ? selectedDay : hoveredDay;

  const detailData =
    visibleDay !== null
      ? todoData.streaks.find((streak) => streak.streakDay === visibleDay)
      : undefined;

  return (
    <div className={styles.streakTrackerContainer}>
      <div onClick={(e) => e.stopPropagation()}>
        <StreakGrid onHover={setHoveredDay} onSelect={setSelectedDay} />
      </div>
      <StreakDetail detailData={detailData} />
    </div>
  );
};

export default StreakTracker;
