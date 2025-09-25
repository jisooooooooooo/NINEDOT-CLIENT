import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mandalart from '@common/component/Mandalart/Mandalart';

import * as styles from './UpperTodo.css';
import { SubGoalFields, UpperTodoHeader, MandalCompleteButton } from './component';
import { useUpperTodoState, useUpperTodoAI } from './hook';
import { toMainSubGoals } from './utils/goal';
import { DEFAULT_TEXT, ALERT, GOAL_COUNT } from './constants';

import GradientBackground from '@/common/component/Background/GradientBackground';
import { PATH } from '@/route';
import { useGetUser } from '@/api/domain/signup/hook/useGetUser';
import { useMandalartId } from '@/common/hook/useMandalartId';
import { useLoginModal } from '@/common/hook/useLoginModal';

const UpperTodo = () => {
  useLoginModal();

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

  const mainGoal = data?.title || DEFAULT_TEXT.mainGoal;
  const displayUserName = user?.name ?? '김도트';

  const handleNavigateLower = () => {
    if (!mandalartId) {
      alert(ALERT.noMandalartId);
      return;
    }
    navigate(PATH.TODO_LOWER);
  };

  const [hasAiRecommendUsed, setHasAiRecommendUsed] = useState(false);

  const { isLoading: isUpperAiLoading, handleOpenAiModal } = useUpperTodoAI({
    mandalartId,
    mainGoal,
    subGoals,
    setSubGoals,
    refetch,
    refetchCoreGoalIds,
    setIsTooltipOpen,
    hasAiBeenUsed: hasAiRecommendUsed,
    markAiUsed: () => setHasAiRecommendUsed(true),
  });

  const filledSubGoalCount = subGoals.filter((v) => v.trim() !== '').length;
  const hasFilledSubGoals = filledSubGoalCount > 0;
  const isAllSubGoalsFilled = filledSubGoalCount >= GOAL_COUNT;

  const isAiUsed = hasAiRecommendUsed || isUpperAiLoading || isAllSubGoalsFilled;

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
          <Mandalart type="TODO_MAIN" mainGoal={mainGoal} subGoals={toMainSubGoals(subGoals)} />
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
