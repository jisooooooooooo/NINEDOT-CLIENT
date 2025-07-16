import { useGetStreak } from '@/api/domain/history/hook/useGetStreak';
import { IcStreakerDot, IcStreakerDotDefault } from '@/assets/svg';
import Loading from '@/common/component/Loading/Loading';
import * as styles from '@/page/history/component/StreakGrid/StreakGrid.css';

const TOTAL_DOTS = 66;
const MANDALART_ID = 1;

type StreakGridProps = {
  onHover: (day: number | null) => void;
  onSelect: (day: number) => void;
};

const StreakGrid = ({ onHover, onSelect }: StreakGridProps) => {
  const { data, isLoading } = useGetStreak(MANDALART_ID);

  if (isLoading || !data) {
    return <Loading />;
  }

  const dots = Array.from({ length: TOTAL_DOTS }, (_, i) => {
    const day = i + 1;

    const streak = data.streaks.find((s) => s.streakDay === day);
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
