import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './LowerTodo.css';
import TodoFields from './component/TodoFields';

import { PATH } from '@/route';
import { IcSmallNext } from '@/assets/svg';
import GradientBackground from '@/common/component/\bBackground/GradientBackground';
import Tooltip from '@/common/component/Tooltip/Tooltip';
import { useModal } from '@/common/hook/useModal';
import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import Mandalart from '@/common/component/Mandalart/Mandalart';

const DEFAULT_SUB_GOALS = ['행복하기', '다이어트', '', '', '', '', '', ''];
const EMPTY_TODOS = Array(8)
  .fill('')
  .map(() => Array(8).fill(''));
const EMPTY_BOOL_ARR = Array(8).fill(false);

const truncateText = (text: string, cutLength: number = 23) => {
  if (!text) {
    return '';
  }
  return text.length > cutLength ? text.substring(0, cutLength) + '...' : text;
};

const LowerTodo = ({
  userName = '@@',
  mainGoal = '사용자가 작성한 대목표',
  subGoals = DEFAULT_SUB_GOALS,
}: {
  userName?: string;
  mainGoal?: string;
  subGoals?: string[];
}) => {
  const navigate = useNavigate();
  const { openModal, ModalWrapper, closeModal } = useModal();

  const getFirstValidGoalIndex = () => {
    const idx = subGoals.findIndex((goal) => goal && goal.trim() !== '');
    return idx === -1 ? -1 : idx;
  };
  const [selectedGoalIndex, setSelectedGoalIndex] = useState(getFirstValidGoalIndex());
  const [allTodos, setAllTodos] = useState<string[][]>([...EMPTY_TODOS]);
  const [aiUsedByGoal, setAiUsedByGoal] = useState<boolean[]>([...EMPTY_BOOL_ARR]);
  const [tooltipClosedByGoal, setTooltipClosedByGoal] = useState<boolean[]>([...EMPTY_BOOL_ARR]);

  const todos = selectedGoalIndex === -1 ? Array(8).fill('') : allTodos[selectedGoalIndex];
  const hasAnyTodos = allTodos.some((goalTodos) => goalTodos.some((todo) => todo.trim() !== ''));
  const isCurrentGoalAiUsed = selectedGoalIndex === -1 ? false : aiUsedByGoal[selectedGoalIndex];
  const isCurrentGoalAllFilled =
    selectedGoalIndex === -1 ? false : todos.every((todo) => todo.trim() !== '');
  const isCurrentGoalValid =
    selectedGoalIndex !== -1 &&
    Boolean(subGoals[selectedGoalIndex] && subGoals[selectedGoalIndex].trim() !== '');

  // 툴팁 닫기
  const handleTooltipClose = () => {
    setTooltipClosedByGoal((prev) => prev.map((v, i) => (i === selectedGoalIndex ? true : v)));
  };

  // 만다라트 서브골 클릭
  const handleSubGoalClick = (position: number) => {
    if (!subGoals[position] || subGoals[position].trim() === '' || selectedGoalIndex === -1) {
      return;
    }
    setSelectedGoalIndex(position);
  };

  // 할 일 입력 변경
  const handleTodoChange = (newTodos: string[]) => {
    setAllTodos((prev) => prev.map((arr, idx) => (idx === selectedGoalIndex ? newTodos : arr)));
  };

  // AI 추천 반영
  const handleAiSubmit = (selected: string[]) => {
    setAllTodos((prev) => {
      let selectedIdx = 0;
      return prev.map((arr, idx) =>
        idx === selectedGoalIndex
          ? arr.map((todo) =>
              todo.trim() === '' && selectedIdx < selected.length ? selected[selectedIdx++] : todo,
            )
          : arr,
      );
    });
    setAiUsedByGoal((prev) => prev.map((v, idx) => (idx === selectedGoalIndex ? true : v)));
  };

  const handleOpenAiModal = () => {
    openModal(<AiRecommendModal onClose={closeModal} onSubmit={handleAiSubmit} values={todos} />);
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
                {subGoals[selectedGoalIndex] && subGoals[selectedGoalIndex].trim() !== ''
                  ? subGoals[selectedGoalIndex]
                  : '세부 목표를 선택해주세요'}
                '
              </span>
              에<br />
              도움이 될 8가지 할 일을 작성해보세요.
            </h1>
          </div>
          <div className={styles.aiAssistWrapper}>
            <div className={styles.aiAssistTooltip}>
              <Tooltip
                isOpen={
                  isCurrentGoalValid &&
                  !isCurrentGoalAiUsed &&
                  !isCurrentGoalAllFilled &&
                  !tooltipClosedByGoal[selectedGoalIndex]
                }
                onClose={handleTooltipClose}
              />
            </div>
            <button
              className={
                isCurrentGoalAiUsed || !isCurrentGoalValid
                  ? styles.aiAssistButton.inactive
                  : styles.aiAssistButton.active
              }
              type="button"
              aria-label="AI로 빈칸 채우기"
              onClick={handleOpenAiModal}
              disabled={isCurrentGoalAiUsed || !isCurrentGoalValid}
            >
              AI로 빈칸 채우기
            </button>
          </div>
        </header>
        <div className={styles.lowerTodoBox}>
          <div className={styles.mainGoalSection}>
            <Mandalart
              type="TODO_MAIN"
              mainGoal={truncateText(mainGoal)}
              subGoals={subGoals.map((subGoal, index) => ({
                title: truncateText(subGoal),
                position: index,
                cycle: 'ONCE' as const,
                disableInteraction: !subGoal || subGoal.trim() === '' || selectedGoalIndex === -1,
              }))}
              onGoalClick={handleSubGoalClick}
            />
          </div>
          <div className={styles.subGoalAndTodoSection}>
            <div className={styles.subGoalSection}>
              <Mandalart
                type="TODO_SUB"
                mainGoal={truncateText(subGoals[selectedGoalIndex] || '')}
                subGoals={todos.map((todo, index) => ({
                  title: todo ? truncateText(todo) : '',
                  position: index,
                  cycle: 'ONCE' as const,
                }))}
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
