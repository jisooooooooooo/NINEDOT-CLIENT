import * as styles from '../UpperTodo.css';

import Tooltip from '@/common/component/Tooltip/Tooltip';

interface UpperTodoHeaderProps {
  userName: string;
  mainGoal?: string;
  isTooltipOpen: boolean;
  setIsTooltipOpen: (open: boolean) => void;
  isAiUsed: boolean;
  handleOpenAiModal: () => void;
}

const UpperTodoHeader = ({
  userName,
  mainGoal,
  isTooltipOpen,
  setIsTooltipOpen,
  isAiUsed,
  handleOpenAiModal,
}: UpperTodoHeaderProps) => {
  return (
    <header className={styles.upperTodoHeader}>
      <div className={styles.upperTodoHeaderLeft}>
        <h1 className={styles.upperTodoHeaderTitle}>
          {userName}님,
          <br />
          <span className={styles.upperTodoHeaderGoal}>'{mainGoal}'</span>에<br />
          필요한 8가지 세부 목표를 작성해주세요.
        </h1>
      </div>

      <div className={styles.aiAssistWrapper}>
        <Tooltip
          className={styles.aiAssistTooltip}
          isOpen={isTooltipOpen}
          onClose={() => setIsTooltipOpen(false)}
        />
        <button
          className={isAiUsed ? styles.aiAssistButton.inactive : styles.aiAssistButton.active}
          type="button"
          aria-label="AI로 빈칸 채우기"
          onClick={handleOpenAiModal}
          disabled={isAiUsed}
        >
          AI로 빈칸 채우기
        </button>
      </div>
    </header>
  );
};

export default UpperTodoHeader;
