import { IcStreakerDot, IcStreakerDotDefault } from '@/assets/svg';
import * as styles from '@/page/history/component/StreakGrid/StreakGrid.css';

const TOTAL_DOTS = 66;

type StreakGridProps = {
  progressDays: number;
};

const StreakGrid = ({ progressDays }: StreakGridProps) => {
  const dots = Array.from({ length: TOTAL_DOTS }, (_, i) => {
    const isFilled = i < progressDays;
    const DotIcon = isFilled ? IcStreakerDot : IcStreakerDotDefault;

    return <DotIcon key={i} className={styles.dotIcon({ clickable: isFilled })} />;
  });

  return <div className={styles.gridContainer}>{dots}</div>;
};
export default StreakGrid;
