import { useNavigate } from 'react-router-dom';
import Mandalart from '@common/component/Mandalart/Mandalart';

import * as styles from './LowerTodo.css';
import { LowerTodoHeader, MandalCompleteButton, TodoFields } from './component';
import { useLowerTodoState, useLowerTodoAI } from './hook';
import { toMainSubGoals } from './utils/goal';
import { DEFAULT_TEXT, ALERT } from './constants';

import GradientBackground from '@/common/component/Background/GradientBackground';
import { PATH } from '@/route';
import { useGetUser } from '@/api/domain/signup/hook/useGetUser';
import { useMandalartId } from '@/common/hook/useMandalartId';

const LowerTodo = () => {
  const mandalartId = useMandalartId();
  const navigate = useNavigate();

  const { data: user } = useGetUser();

  const {
    data,
    coreGoalsData,
    selectedGoalIndex,
    selectedCoreGoalId,
    allTodos,
    currentTodos,
    isTooltipOpen,
    setIsTooltipOpen,
    handleTodoEnter,
    handleTodoChange,
    handleSubGoalClick,
    isAiUsed,
    setIsAiUsed,
  } = useLowerTodoState(mandalartId);

  const displayUserName = user?.name ?? '김도트';

  const mainGoal = data?.title || DEFAULT_TEXT.overallGoal;

  const selectedGoalTitle =
    coreGoalsData?.coreGoals?.[selectedGoalIndex]?.title ||
    coreGoalsData?.coreGoals?.sort((a: any, b: any) => a.position - b.position)[0]?.title ||
    mainGoal;

  const handleNavigateComplete = () => {
    if (!mandalartId) {
      alert(ALERT.noMandalartId);
      return;
    }
    navigate(PATH.MANDAL);
  };

  const { handleOpenAiModal } = useLowerTodoAI({
    selectedCoreGoalId,
    selectedCoreGoalTitle: selectedGoalTitle,
    selectedGoalIndex,
    currentTodos,
    setCurrentTodos: handleTodoChange,
    setIsTooltipOpen,
    isAiUsed,
    setIsAiUsed,
    handleTodoEnter,
  });

  const hasFilledSubGoals = allTodos.some((todos) =>
    todos.some((todo) => todo.title.trim() !== ''),
  );

  const handleEnter = (index: number, todo: any) => {
    handleTodoEnter(index, todo);
  };

  return (
    <main className={styles.lowerTodoContainer}>
      <GradientBackground />

      <section className={styles.lowerTodoBoxWrapper}>
        <LowerTodoHeader
          userName={displayUserName}
          title={selectedGoalTitle}
          isTooltipOpen={isTooltipOpen}
          setIsTooltipOpen={setIsTooltipOpen}
          isAiDisabled={isAiUsed[selectedGoalIndex]}
          handleOpenAiModal={handleOpenAiModal}
        />

        <div className={styles.lowerTodoBox}>
          <Mandalart
            type="TODO_MAIN"
            mainGoal={mainGoal}
            subGoals={toMainSubGoals(coreGoalsData?.coreGoals || [])}
            onGoalClick={handleSubGoalClick}
            selectedGoalIndex={selectedGoalIndex}
          />
          <TodoFields
            values={currentTodos}
            onChange={handleTodoChange}
            onEnter={handleEnter}
            selectedCoreGoalTitle={selectedGoalTitle}
          />
        </div>

        <MandalCompleteButton
          hasFilledSubGoals={hasFilledSubGoals}
          handleNavigateComplete={handleNavigateComplete}
        />
      </section>
    </main>
  );
};

export default LowerTodo;
