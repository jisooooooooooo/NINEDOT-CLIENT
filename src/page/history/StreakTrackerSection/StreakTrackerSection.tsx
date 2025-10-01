import { useState } from 'react';

import { StreakDetail, StreakGrid } from '@/page/history/component';
import * as styles from '@/page/history/StreakTrackerSection/StreakTrackerSection.css';
import { useGetStreak } from '@/api/domain/history/hook/useGetStreak';
import { useMandalartId } from '@/common/hook/useMandalartId';
import Loading from '@/common/component/Loading/Loading';

type StreakTrackerProps = {
  selectedDay: number | null;
  setSelectedDay: (day: number | null) => void;
};

const StreakTracker = ({ selectedDay, setSelectedDay }: StreakTrackerProps) => {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const isLocked = selectedDay !== null;
  const visibleDay = isLocked ? selectedDay : hoveredDay;

  const mandalartId = useMandalartId();

  const { data, isLoading } = useGetStreak(mandalartId);

  if (isLoading || !data) {
    return <Loading type="history" />;
  }
  const detailData =
    visibleDay !== null
      ? data.streaks.find((streak) => streak.streakDay === visibleDay)
      : undefined;

  return (
    <div className={styles.streakTrackerContainer}>
      <div onClick={(e) => e.stopPropagation()} className={styles.streakGridContainer}>
        <StreakGrid streaks={data.streaks} onHover={setHoveredDay} onSelect={setSelectedDay} />
      </div>
      <StreakDetail detailData={detailData} />
    </div>
  );
};

export default StreakTracker;
