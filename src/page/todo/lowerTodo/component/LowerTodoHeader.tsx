import * as styles from '../LowerTodo.css';

import Tooltip from '@/common/component/Tooltip/Tooltip';

interface LowerTodoHeaderProps {
  userName: string;
  title?: string;
  isTooltipOpen: boolean;
  setIsTooltipOpen: (open: boolean) => void;
  isAiDisabled: boolean;
  handleOpenAiModal: () => void;
}
const LowerTodoHeader = ({
  userName,
  title,
  isTooltipOpen,
  setIsTooltipOpen,
  isAiDisabled,
  handleOpenAiModal,
}: LowerTodoHeaderProps) => {
  return (
    <header className={styles.lowerTodoHeader}>
      <div className={styles.lowerTodoHeaderLeft}>
        <h1 className={styles.lowerTodoHeaderTitle}>
          {userName}님,
          <br />
          <span className={styles.lowerTodoHeaderGoal}>'{title}'</span>에<br />
          필요한 8가지 할 일을 작성해주세요.
        </h1>
      </div>

      <div className={styles.aiAssistWrapper}>
        <Tooltip
          className={styles.aiAssistTooltip}
          isOpen={isTooltipOpen}
          onClose={() => setIsTooltipOpen(false)}
        />
        <button
          className={isAiDisabled ? styles.aiAssistButton.inactive : styles.aiAssistButton.active}
          type="button"
          aria-label="AI로 빈칸 채우기"
          onClick={handleOpenAiModal}
          disabled={isAiDisabled}
        >
          AI로 빈칸 채우기
        </button>
      </div>
    </header>
  );
};

export default LowerTodoHeader;
