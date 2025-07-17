import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './LowerTodo.css';
import TodoFields from './component/TodoFields';
import { DEFAULT_SUB_GOALS, EMPTY_TODOS, EMPTY_BOOL_ARR } from './mock';
import { isValidSubGoal, truncateText, getFirstValidGoalIndex } from './util';

import { PATH } from '@/route';
import { IcSmallNext } from '@/assets/svg';
import GradientBackground from '@/common/component/Background/GradientBackground';
import Tooltip from '@/common/component/Tooltip/Tooltip';
import { useModal } from '@/common/hook/useModal';
import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import Mandalart from '@/common/component/Mandalart/Mandalart';

interface LowerTodoProps {
  userName?: string;
  mainGoal?: string;
  subGoals?: string[];
}

const LowerTodo = ({
  userName = '@@',
  mainGoal = '사용자가 작성한 대목표',
  subGoals = DEFAULT_SUB_GOALS,
}: LowerTodoProps) => {
  const navigate = useNavigate();
  const { openModal, ModalWrapper, closeModal } = useModal();

  const [selectedGoalIndex, setSelectedGoalIndex] = useState(getFirstValidGoalIndex(subGoals));
  const [allTodos, setAllTodos] = useState([...EMPTY_TODOS]);
  const [aiUsedByGoal, setAiUsedByGoal] = useState([...EMPTY_BOOL_ARR]);
  const [tooltipOpenArr, setTooltipOpenArr] = useState(Array(8).fill(true));

  const todos = selectedGoalIndex === -1 ? Array(8).fill('') : allTodos[selectedGoalIndex];

  const updateTooltipState = (index: number, value: boolean) => {
    setTooltipOpenArr((arr) => arr.map((v, i) => (i === index ? value : v)));
  };

  useEffect(() => {
    if (selectedGoalIndex !== -1 && todos.every((todo) => todo.trim() !== '')) {
      updateTooltipState(selectedGoalIndex, false);
    }
  }, [todos, selectedGoalIndex]);

  const isTooltipOpen = selectedGoalIndex !== -1 ? tooltipOpenArr[selectedGoalIndex] : false;
  const handleTooltipClose = () => {
    updateTooltipState(selectedGoalIndex, false);
  };

  const hasAnyTodos = allTodos.some((goalTodos) => goalTodos.some((todo) => todo.trim() !== ''));
  const isCurrentGoalAiUsed = selectedGoalIndex === -1 ? false : aiUsedByGoal[selectedGoalIndex];
  const isCurrentGoalValid =
    selectedGoalIndex !== -1 && isValidSubGoal(subGoals[selectedGoalIndex]);
  const isAllCurrentTodosFilled = todos.every((todo) => todo.trim() !== '');
  const shouldShowTooltip = isTooltipOpen && !isAllCurrentTodosFilled;

  const handleSubGoalClick = (position: number) => {
    if (!subGoals[position] || subGoals[position].trim() === '') {
      return;
    }
    setSelectedGoalIndex(position);
  };

  const handleTodoChange = (newTodos: string[]) => {
    setAllTodos((prev) => prev.map((arr, idx) => (idx === selectedGoalIndex ? newTodos : arr)));
  };

  const handleAiSubmit = (selected: { id: number; position: number; title: string }[]) => {
    setAllTodos((prev) => {
      let selectedIdx = 0;
      return prev.map((arr, idx) =>
        idx === selectedGoalIndex
          ? arr.map((todo) =>
              todo.trim() === '' && selectedIdx < selected.length
                ? selected[selectedIdx++].title
                : todo,
            )
          : arr,
      );
    });
    setAiUsedByGoal((prev) => prev.map((v, idx) => (idx === selectedGoalIndex ? true : v)));
    updateTooltipState(selectedGoalIndex, false);
  };

  const handleAiModalClose = () => {
    setAiUsedByGoal((prev) => prev.map((v, idx) => (idx === selectedGoalIndex ? true : v)));
    updateTooltipState(selectedGoalIndex, false);
    closeModal();
  };

  const handleOpenAiModal = () => {
    openModal(
      <AiRecommendModal
        onClose={handleAiModalClose}
        onSubmit={handleAiSubmit}
        values={todos}
        options={[]}
        mandalartId={0}
      />,
    );
  };

  const handleNavigateComplete = () => {
    navigate(PATH.MANDAL);
  };

  return (
    <main className={styles.lowerTodoContainer}>
      <GradientBackground />
      <section className={styles.lowerTodoBoxWrapper}>
        <header className={styles.lowerTodoHeader}>
          <div className={styles.lowerTodoHeaderLeft}>
            <h1 className={styles.lowerTodoHeaderTitle}>
              {userName}님,
              <br />
              <span className={styles.lowerTodoHeaderGoal}>
                '
                {isValidSubGoal(subGoals[selectedGoalIndex])
                  ? subGoals[selectedGoalIndex]
                  : '세부 목표를 선택해주세요'}
                '
              </span>
              에<br />
              도움이 될 8가지 할 일을 작성해보세요.
            </h1>
          </div>
          <div className={styles.aiAssistWrapper}>
            {shouldShowTooltip && (
              <Tooltip
                className={styles.aiAssistTooltip}
                isOpen={isTooltipOpen}
                onClose={handleTooltipClose}
              />
            )}
            {!isAllCurrentTodosFilled && (
              <button
                className={
                  isCurrentGoalAiUsed
                    ? styles.aiAssistButton.inactive
                    : styles.aiAssistButton.active
                }
                type="button"
                aria-label="AI로 빈칸 채우기"
                onClick={handleOpenAiModal}
                disabled={isCurrentGoalAiUsed}
              >
                AI로 빈칸 채우기
              </button>
            )}
          </div>
        </header>
        <div className={styles.lowerTodoBox}>
          <div className={styles.mainGoalSection}>
            <Mandalart
              type="TODO_MAIN"
              data={{
                id: 0,
                position: 0,
                title: truncateText(mainGoal, 23),
                subGoals: subGoals.map((subGoal, idx) => ({
                  id: idx,
                  title: truncateText(subGoal, 23),
                  position: idx,
                })),
              }}
              onGoalClick={handleSubGoalClick}
            />
          </div>
          <div className={styles.subGoalAndTodoSection}>
            <div className={styles.subGoalSection}>
              <Mandalart
                type="TODO_SUB"
                data={{
                  id: selectedGoalIndex,
                  position: selectedGoalIndex,
                  title: truncateText(subGoals[selectedGoalIndex] || '', 23),
                  subGoals: todos.map((todo, idx) => ({
                    id: idx,
                    title: todo ? truncateText(todo, 23) : '',
                    position: idx,
                  })),
                }}
                onGoalClick={setSelectedGoalIndex}
              />
              <TodoFields
                values={todos}
                onChange={handleTodoChange}
                disabled={!isCurrentGoalValid}
              />
            </div>
            <div className={styles.scrollerSection} />
          </div>
        </div>
        <button
          className={styles.mandalCompleteBox}
          type="button"
          aria-label="만다라트 완성하기"
          onClick={handleNavigateComplete}
          disabled={!hasAnyTodos}
        >
          <span
            className={
              hasAnyTodos ? styles.mandalCompleteText.active : styles.mandalCompleteText.inactive
            }
          >
            만다라트를 완성했어요
          </span>
          <IcSmallNext
            className={
              hasAnyTodos ? styles.mandalCompleteIcon.active : styles.mandalCompleteIcon.inactive
            }
          />
        </button>
        {ModalWrapper}
      </section>
    </main>
  );
};

export default LowerTodo;
