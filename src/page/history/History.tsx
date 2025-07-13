import { useState } from 'react';

import * as styles from '@/page/history/History.css';
import { dayData } from '@/page/history/sampleData/dayData';
import StreakTracker from '@/page/history/StreakTrackerSection/StreakTrackerSection';

const STREAK_BANNER_MESSAGE = '작은 실천을 66일 이어가면 나의 목표에 도달합니다';
const STREAK_DESCRIPTION_MESSAGE = '하루에 하나라도 실천하면 오늘의 점이 찍혀요!';

const History = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleOutsideClick = () => {
    setSelectedDay(null);
  };
  return (
    <div className={styles.historyContainer} onClick={handleOutsideClick}>
      <div className={styles.layoutContainer}>
        <h1 className={styles.titleContainer}>{dayData.title}</h1>
        <p className={styles.descriptionContainer}>
          @@님, 목표를 향해 <br />
          {dayData.progressDays}일째 달려가고 있어요
        </p>
        <section className={styles.streakTrackerWrapper}>
          <h3 className={styles.streakTitle}>{STREAK_BANNER_MESSAGE}</h3>
          <p className={styles.streakDescription}>{STREAK_DESCRIPTION_MESSAGE}</p>
          <StreakTracker selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        </section>
      </div>
    </div>
  );
};

export default History;
