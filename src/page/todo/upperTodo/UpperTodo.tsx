import { useNavigate } from 'react-router-dom';
import Mandalart from '@common/component/Mandalart/Mandalart';

import * as styles from './UpperTodo.css';
import { SubGoalFields, UpperTodoHeader, MandalCompleteButton } from './component';
import { useUpperTodoState, useUpperTodoAI } from './hook';

import GradientBackground from '@/common/component/Background/GradientBackground';
import { PATH } from '@/route';
import { useGetUser } from '@/api/domain/signup/hook/useGetUser';
import { useMandalartId } from '@/common/hook/useMandalartId';

const UpperTodo = () => {
  const mandalartId = useMandalartId();
  const navigate = useNavigate();

  const { data: user } = useGetUser();

  const {
    data,
    subGoals,
    setSubGoals,
    isTooltipOpen,
    setIsTooltipOpen,
    coreGoalIds,
    handleSubGoalEnter,
    refetch,
    refetchCoreGoalIds,
  } = useUpperTodoState(mandalartId);

  const mainGoal = data?.title || '사용자가 작성한 대목표';
  const displayUserName = user?.name ?? '김도트';

  const handleNavigateLower = () => {
    if (!mandalartId) {
      alert('전체 목표가 설정되지 않았습니다.');
      return;
    }
    navigate(PATH.TODO_LOWER);
  };

  const { isAiUsed, handleOpenAiModal } = useUpperTodoAI({
    mandalartId,
    mainGoal,
    subGoals,
    setSubGoals,
    refetch,
    refetchCoreGoalIds,
    setIsTooltipOpen,
  });

  const hasFilledSubGoals = subGoals.filter((v) => v.trim() !== '').length > 0;

  const handleEnter = (index: number, value: string) => {
    handleSubGoalEnter(index, value);
  };

  return (
    <main className={styles.upperTodoContainer}>
      <GradientBackground />

      <section className={styles.upperTodoBoxWrapper}>
        <UpperTodoHeader
          userName={displayUserName}
          mainGoal={mainGoal}
          isTooltipOpen={isTooltipOpen}
          setIsTooltipOpen={setIsTooltipOpen}
          isAiUsed={isAiUsed}
          handleOpenAiModal={handleOpenAiModal}
        />

        <div className={styles.upperTodoBox}>
          <Mandalart
            type="TODO_MAIN"
            mainGoal={mainGoal}
            subGoals={subGoals.map((v, i) => ({
              id: i + 1,
              title: v,
              position: i + 1,
              cycle: 'ONCE' as const,
            }))}
          />
          <SubGoalFields
            values={subGoals}
            onChange={setSubGoals}
            idPositions={coreGoalIds?.coreGoalIds || []}
            onEnter={handleEnter}
          />
        </div>

        <MandalCompleteButton
          hasFilledSubGoals={hasFilledSubGoals}
          handleNavigateLower={handleNavigateLower}
        />
      </section>
    </main>
  );
};

export default UpperTodo;
