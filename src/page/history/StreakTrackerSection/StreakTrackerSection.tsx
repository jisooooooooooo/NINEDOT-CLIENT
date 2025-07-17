import { useState } from 'react';

import StreakDetail from '@/page/history/component/StreakDetail/StreakDetail';
import StreakGrid from '@/page/history/component/StreakGrid/StreakGrid';
import * as styles from '@/page/history/StreakTrackerSection/StreakTrackerSection.css';
import { useGetStreak } from '@/api/domain/history/hook/useGetStreak';
import Loading from '@/common/component/Loading/Loading';

const MANDALART_ID = 1;

type StreakTrackerProps = {
  selectedDay: number | null;
  setSelectedDay: (day: number | null) => void;
};

const StreakTracker = ({ selectedDay, setSelectedDay }: StreakTrackerProps) => {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const isLocked = selectedDay !== null;
  const visibleDay = isLocked ? selectedDay : hoveredDay;

  const { data, isLoading } = useGetStreak(MANDALART_ID);

  if (isLoading || !data) {
    return <Loading type="history" />;
  }
  const detailData =
    visibleDay !== null
      ? data.streaks.find((streak) => streak.streakDay === visibleDay)
      : undefined;

  return (
    <div className={styles.streakTrackerContainer}>
      <div onClick={(e) => e.stopPropagation()}>
        <StreakGrid streaks={data.streaks} onHover={setHoveredDay} onSelect={setSelectedDay} />
      </div>
      <StreakDetail detailData={detailData} />
    </div>
  );
};

export default StreakTracker;
