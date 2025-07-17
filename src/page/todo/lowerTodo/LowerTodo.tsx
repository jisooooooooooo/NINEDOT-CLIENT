import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './LowerTodo.css';
import TodoFields from './component/TodoFields';
import { EMPTY_TODOS, EMPTY_BOOL_ARR } from './mock';
import { isValidSubGoal, truncateText, getFirstValidGoalIndex } from './util';

import { PATH } from '@/route';
import { IcSmallNext } from '@/assets/svg';
import GradientBackground from '@/common/component/Background/GradientBackground';
import Tooltip from '@/common/component/Tooltip/Tooltip';
import { useModal } from '@/common/hook/useModal';
import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import Mandalart from '@/common/component/Mandalart/Mandalart';
import { useCoreGoals } from '@/api/domain/lowerTodo/hook/useCoreGoals';
import { useSubGoals } from '@/api/domain/lowerTodo/hook/useSubGoals';
import { useSubGoalIds } from '@/api/domain/lowerTodo/hook/useSubGoalIds';

interface LowerTodoProps {
  userName?: string;
  mainGoal?: string;
}

interface TodoItem {
  title: string;
  cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
}

const LowerTodo = ({ userName = '@@', mainGoal = '사용자가 작성한 대목표' }: LowerTodoProps) => {
  const navigate = useNavigate();
  const { openModal, ModalWrapper, closeModal } = useModal();

  const [selectedGoalIndex, setSelectedGoalIndex] = useState(-1);
  const [allTodos, setAllTodos] = useState<TodoItem[][]>(
    Array(8)
      .fill(null)
      .map(() => Array(8).fill({ title: '', cycle: 'DAILY' })),
  );
  const [aiUsedByGoal, setAiUsedByGoal] = useState([...EMPTY_BOOL_ARR]);
  const [tooltipOpenArr, setTooltipOpenArr] = useState(Array(8).fill(true));
  const [subGoalIdsByPosition, setSubGoalIdsByPosition] = useState<{
    [position: number]: number | null;
  }>({});

  const mandalartId = 1;
  const { data: coreGoalsData } = useCoreGoals(mandalartId);

  const selectedCoreGoalId =
    selectedGoalIndex !== -1 && coreGoalsData
      ? coreGoalsData.data.coreGoals[selectedGoalIndex]?.id
      : undefined;

  const { data: subGoalsData } = useSubGoals({
    mandalartId,
    coreGoalId: selectedCoreGoalId,
  });

  const { data: subGoalIdsData } = useSubGoalIds(selectedCoreGoalId || 0);

  useEffect(() => {
    if (coreGoalsData && coreGoalsData.data.coreGoals.length > 0) {
      const subGoals = coreGoalsData.data.coreGoals.map((goal) => goal.title);
      setSelectedGoalIndex(getFirstValidGoalIndex(subGoals));
    }
  }, [coreGoalsData]);

  useEffect(() => {
    if (
      subGoalIdsData &&
      subGoalIdsData.data &&
      subGoalIdsData.data.subgoalIds &&
      selectedGoalIndex !== -1
    ) {
      const newIdMap: { [position: number]: number | null } = {};

      for (let i = 0; i < 8; i++) {
        newIdMap[i] = null;
      }

      subGoalIdsData.data.subgoalIds.forEach(({ id, position }) => {
        newIdMap[position - 1] = id;
      });

      setSubGoalIdsByPosition(newIdMap);
    }
  }, [subGoalIdsData, selectedGoalIndex]);

  useEffect(() => {
    if (subGoalsData && selectedGoalIndex !== -1) {
      setAllTodos((prev) => {
        const newTodos = [...prev];
        const apiTodos = subGoalsData.data.subGoals.map((subGoal) => ({
          title: subGoal.title,
          cycle: subGoal.cycle,
        }));
        const filledTodos = Array(8)
          .fill({ title: '', cycle: 'DAILY' })
          .map((_, idx) => apiTodos[idx] || { title: '', cycle: 'DAILY' });
        newTodos[selectedGoalIndex] = filledTodos;
        return newTodos;
      });
    }
  }, [subGoalsData, selectedGoalIndex]);

  useEffect(() => {
    if (coreGoalsData && selectedGoalIndex !== -1) {
      const todos = allTodos[selectedGoalIndex];
      if (todos && todos.every((todo) => todo.title.trim() !== '')) {
        setTooltipOpenArr((arr) => arr.map((v, i) => (i === selectedGoalIndex ? false : v)));
      }
    }
  }, [coreGoalsData, allTodos, selectedGoalIndex]);

  if (!coreGoalsData) {
    return null;
  }

  const subGoals = coreGoalsData.data.coreGoals.map((goal) => goal.title);
  const todos = selectedGoalIndex === -1 ? Array(8).fill({ title: '', cycle: 'DAILY' }) : allTodos[selectedGoalIndex];

  const updateTooltipState = (index: number, value: boolean) => {
    setTooltipOpenArr((arr) => arr.map((v, i) => (i === index ? value : v)));
  };

  const isTooltipOpen = selectedGoalIndex !== -1 ? tooltipOpenArr[selectedGoalIndex] : false;
  const handleTooltipClose = () => {
    updateTooltipState(selectedGoalIndex, false);
  };

  const hasAnyTodos = allTodos.some((goalTodos) => goalTodos.some((todo) => todo.title.trim() !== ''));
  const isCurrentGoalAiUsed = selectedGoalIndex === -1 ? false : aiUsedByGoal[selectedGoalIndex];
  const isCurrentGoalValid =
    selectedGoalIndex !== -1 && isValidSubGoal(subGoals[selectedGoalIndex]);
  const isAllCurrentTodosFilled = todos.every((todo) => todo.title.trim() !== '');
  const shouldShowTooltip = isTooltipOpen && !isAllCurrentTodosFilled;

  const handleSubGoalClick = (position: number) => {
    if (!subGoals[position] || subGoals[position].trim() === '') {
      return;
    }
    setSelectedGoalIndex(position);
  };

  const handleTodoChange = (newTodos: TodoItem[]) => {
    setAllTodos((prev) => prev.map((arr, idx) => (idx === selectedGoalIndex ? newTodos : arr)));
  };

  const handleAiSubmit = (selected: string[]) => {
    setAllTodos((prev) => {
      let selectedIdx = 0;
      return prev.map((arr, idx) =>
        idx === selectedGoalIndex
          ? arr.map((todo) =>
              todo.title.trim() === '' && selectedIdx < selected.length ? selected[selectedIdx++] : todo,
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
      <AiRecommendModal onClose={handleAiModalClose} onSubmit={handleAiSubmit} values={todos} />,
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
                    title: todo ? truncateText(todo.title, 23) : '',
                    position: idx,
                  })),
                }}
                onGoalClick={() => {}}
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
