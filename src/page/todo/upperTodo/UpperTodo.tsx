import { useState } from 'react';
import Mandalart from '@common/component/Mandalart/Mandalart';
import { useNavigate } from 'react-router-dom';

import * as styles from './UpperTodo.css';
import SubGoalFields from './component/SubGoalFields';

import { PATH } from '@/route';
import { IcSmallNext } from '@/assets/svg';
import GradientBackground from '@/common/component/\bBackground/GradientBackground';
import Tooltip from '@/common/component/Tooltip/Tooltip';
import { useModal } from '@/common/hook/useModal';
import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';

interface UpperTodoProps {
  userName?: string;
  mainGoal?: string;
}

const UpperTodo = ({ userName = '@@', mainGoal = '사용자가 작성한 대목표' }: UpperTodoProps) => {
  const { openModal, ModalWrapper, closeModal } = useModal();
  const navigate = useNavigate();
  const [subGoals, setSubGoals] = useState(Array(8).fill(''));

  const hasFilledSubGoals = subGoals.filter((v) => v.trim() !== '').length > 0;

  const handleNavigateLower = () => {
    navigate(PATH.TODO_LOWER);
  };

  return (
    <main className={styles.upperTodoContainer}>
      <GradientBackground />

      <section className={styles.upperTodoBoxWrapper}>
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
            <Tooltip className={styles.aiAssistTooltip} />
            <button
              className={styles.aiAssistButton}
              type="button"
              aria-label="AI로 빈칸 채우기"
              onClick={() => openModal(<AiRecommendModal onClose={closeModal} />)}
            >
              AI로 빈칸 채우기
            </button>
          </div>
        </header>

        <div className={styles.upperTodoBox}>
          <Mandalart
            type="TODO_MAIN"
            mainGoal={mainGoal}
            subGoals={subGoals.map((v, i) => ({
              title: v,
              position: i,
              cycle: 'ONCE' as const,
            }))}
          />
          <SubGoalFields values={subGoals} onChange={setSubGoals} />
        </div>

        <button
          className={styles.mandalCompleteBox}
          type="button"
          aria-label="만다르트 완성하기"
          onClick={handleNavigateLower}
          disabled={!hasFilledSubGoals}
        >
          <span
            className={
              hasFilledSubGoals
                ? styles.mandalCompleteText.active
                : styles.mandalCompleteText.inactive
            }
          >
            만다르트를 완성했어요
          </span>
          <IcSmallNext
            className={
              hasFilledSubGoals
                ? styles.mandalCompleteIcon.active
                : styles.mandalCompleteIcon.inactive
            }
          />
        </button>
        {ModalWrapper}
      </section>
    </main>
  );
};

export default UpperTodo;
