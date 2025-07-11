import { IcStreakerDot, IcStreakerDotDefault } from '@/assets/svg';
import * as styles from '@/page/history/component/StreakGrid/StreakGrid.css';

const TOTAL_DOTS = 66;

type StreakGridProps = {
  progressDays: number;

  onClick: (day: number) => void;
};

const StreakGrid = ({ progressDays, onClick }: StreakGridProps) => {
  const dots = Array.from({ length: TOTAL_DOTS }, (_, i) => {
    const isFilled = i < progressDays;
    const day = i + 1;

    const DotIcon = isFilled ? IcStreakerDot : IcStreakerDotDefault;

    return (
      <button onClick={isFilled ? () => onClick(day) : undefined}>
        <DotIcon key={i} className={styles.dotIcon({ clickable: isFilled })} />
      </button>
    );
  });

  return <div className={styles.gridContainer}>{dots}</div>;
};
export default StreakGrid;
