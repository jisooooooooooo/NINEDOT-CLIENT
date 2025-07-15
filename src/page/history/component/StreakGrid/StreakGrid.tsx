import { IcStreakerDot, IcStreakerDotDefault } from '@/assets/svg';
import * as styles from '@/page/history/component/StreakGrid/StreakGrid.css';
import { todoData } from '@/page/history/sampleData/todoData';

const TOTAL_DOTS = 66;

type StreakGridProps = {
  onHover: (day: number | null) => void;
  onSelect: (day: number) => void;
};

const StreakGrid = ({ onHover, onSelect }: StreakGridProps) => {
  const dots = Array.from({ length: TOTAL_DOTS }, (_, i) => {
    const day = i + 1;

    const streak = todoData.streaks.find((s) => s.streakDay === day);
    const isFilled = streak !== undefined && streak.completedTodoCount > 0;

    const DotIcon = isFilled ? IcStreakerDot : IcStreakerDotDefault;

    return (
      <button
        key={i}
        onMouseEnter={isFilled ? () => onHover(day) : undefined}
        onMouseLeave={() => onHover(null)}
        onClick={isFilled ? () => onSelect(day) : undefined}
      >
        <DotIcon className={styles.dotIcon({ clickable: isFilled })} />
      </button>
    );
  });

  return <div className={styles.gridContainer}>{dots}</div>;
};

export default StreakGrid;
