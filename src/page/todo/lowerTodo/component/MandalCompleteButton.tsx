import * as styles from '../LowerTodo.css';

import { IcSmallNext } from '@/assets/svg';

interface MandalCompleteButtonProps {
  hasFilledSubGoals: boolean;
  handleNavigateComplete: () => void;
}
const MandalCompleteButton = ({
  hasFilledSubGoals,
  handleNavigateComplete,
}: MandalCompleteButtonProps) => {
  return (
    <button
      className={styles.mandalCompleteBox}
      type="button"
      aria-label="만다라트 완성하기"
      onClick={handleNavigateComplete}
      disabled={!hasFilledSubGoals}
    >
      <span
        className={
          hasFilledSubGoals ? styles.mandalCompleteText.active : styles.mandalCompleteText.inactive
        }
      >
        만다라트를 완성했어요
      </span>
      <IcSmallNext
        className={
          hasFilledSubGoals ? styles.mandalCompleteIcon.active : styles.mandalCompleteIcon.inactive
        }
      />
    </button>
  );
};

export default MandalCompleteButton;
