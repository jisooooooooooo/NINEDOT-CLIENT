import * as styles from './UpperTodo.css';

import { IcSmallNext } from '@/assets/svg';
import { GradientCircle } from '@/common/component/GradientCircle/GradientCircle';
import Tooltip from '@/common/component/Tooltip/Tooltip';
import TextField from '@/common/component/MandalartTextField/MandalartTextField';
import Mandalart, { type MainGoal } from '@shared/component/Mandalart/Mandalart';

interface UpperTodoProps {
  userName?: string;
  mainGoal?: string;
}

const UpperTodo = ({ userName = '@@', mainGoal = '사용자가 작성한 대목표' }: UpperTodoProps) => {
  const mandalartMainGoal: MainGoal = {
    title: mainGoal,
    position: 0,
  };

  return (
    <main className={styles.upperTodoContainer}>
      <GradientCircle variant="topRight" />
      <GradientCircle variant="bottomLeft1" />
      <GradientCircle variant="bottomLeft2" />

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
            <button className={styles.aiAssistButton} type="button" aria-label="AI로 빈칸 채우기">
              AI로 빈칸 채우기
            </button>
          </div>
        </header>

        <div className={styles.upperTodoBox}>
          <Mandalart mainGoal={mandalartMainGoal} />
          <div className={styles.textFieldColumn}>
            {[...Array(8)].map((_, index) => (
              <TextField key={index} variant="subGoal" value="" onChange={() => {}} />
            ))}
          </div>
        </div>

        <button className={styles.mandalCompleteBox} type="button" aria-label="만다르트 완성하기">
          <span className={styles.mandalCompleteText}>만다르트를 완성했어요</span>
          <IcSmallNext className={styles.mandalCompleteIcon} />
        </button>
      </section>
    </main>
  );
};

export default UpperTodo;
