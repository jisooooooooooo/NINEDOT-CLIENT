import * as styles from '../UpperTodo.css';

import { IcSmallNext } from '@/assets/svg';

interface MandalCompleteButtonProps {
  hasFilledSubGoals: boolean;
  handleNavigateLower: () => void;
}

const MandalCompleteButton = ({
  hasFilledSubGoals,
  handleNavigateLower,
}: MandalCompleteButtonProps) => {
  return (
    <button
      className={styles.mandalCompleteBox}
      type="button"
      aria-label="만다르트 완성하기"
      onClick={handleNavigateLower}
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
