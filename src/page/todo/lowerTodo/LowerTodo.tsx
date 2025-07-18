// feat/#134/lowerGoalApi 브랜치를 기준으로 한 충돌 해결
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './LowerTodo.css';
import TodoFields from './component/TodoFields';
import { EMPTY_BOOL_ARR } from './mock';
import { isValidSubGoal, truncateText, getFirstValidGoalIndex } from './util';

import { PATH } from '@/route';
import { IcSmallNext } from '@/assets/svg';
import GradientBackground from '@/common/component/Background/GradientBackground';
import Tooltip from '@/common/component/Tooltip/Tooltip';
import { useModal } from '@/common/hook/useModal';
import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import AiFailModal from '@/common/component/AiFailModal/AiFailModal';
import Mandalart from '@/common/component/Mandalart/Mandalart';
import { useCoreGoals } from '@/api/domain/lowerTodo/hook/useCoreGoals';
import { useSubGoals } from '@/api/domain/lowerTodo/hook/useSubGoals';
import { useSubGoalIds } from '@/api/domain/lowerTodo/hook/useSubGoalIds';
import { useCreateSubGoal } from '@/api/domain/lowerTodo/hook/useCreateSubGoal';
import { useAiRecommendSubGoal } from '@/api/domain/lowerTodo/hook/useAiRecommendSubGoal';
import { completeMandalart } from '@/api/domain/lowerTodo';
import { postAiRecommendSubGoals } from '@/api/domain/lowerTodo';

interface LowerTodoProps {
  userName?: string;
  mainGoal?: string;
}

interface TodoItem {
  title: string;
  cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
}

const LowerTodo = ({
  userName = '김도트',
  mainGoal = '사용자가 작성한 대목표',
}: LowerTodoProps) => {
  const navigate = useNavigate();
  const { openModal, ModalWrapper, closeModal } = useModal();
  const [selectedGoalIndex, setSelectedGoalIndex] = useState(0);
  const [allTodos, setAllTodos] = useState<TodoItem[][]>(
    Array(8)
      .fill(null)
      .map(() => Array(8).fill({ title: '', cycle: 'DAILY' })),
  );
  const [aiUsedByGoal] = useState([...EMPTY_BOOL_ARR]);
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

  const createSubGoalMutation = useCreateSubGoal(selectedCoreGoalId ?? 0);

  const aiRecommendMutation = useAiRecommendSubGoal(selectedCoreGoalId ?? 0);
  const recommendAiSubGoal = aiRecommendMutation.mutate;

  const handleSaveSubGoalSync = (todo: TodoItem, position: number, done?: () => void) => {
    if (!selectedCoreGoalId || subGoalIdsByPosition[position] != null) {
      if (done) {
        done();
      }
      return;
    }
    if (!todo.title.trim()) {
      if (done) {
        done();
      }
      return;
    }
    createSubGoalMutation.mutate(
      {
        title: todo.title.trim(),
        position: position + 1,
        cycle: todo.cycle,
      },
      {
        onSuccess: (res) => {
          setSubGoalIdsByPosition((prev) => ({ ...prev, [position]: res.id }));
          setAllTodos((prev) => {
            const newTodos = [...prev];
            newTodos[selectedGoalIndex][position] = { ...todo };
            return newTodos;
          });
          if (done) {
            done();
          }
        },
        onError: (err) => {
          const error = err as any;
          if (error.response?.data?.message) {
            alert(error.response.data.message);
          } else {
            alert('하위 목표 저장 중 오류가 발생했습니다.');
          }
          if (done) {
            done();
          }
        },
      },
    );
  };

  const handleTodoChange = (newTodos: TodoItem[]) => {
    setAllTodos((prev) => prev.map((arr, idx) => (idx === selectedGoalIndex ? newTodos : arr)));
  };

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

  const mandalartOrder = [0, 1, 2, 5, 8, 7, 6, 3];
  // 메인 만다라트 9칸짜리 배열을 완전히 독립된 객체로 초기화
  const coreGoalsGrid = Array(9)
    .fill(null)
    .map(() => ({ title: '', id: 0, position: 0, aiGeneratable: false }));
  if (coreGoalsData.data.coreGoals && coreGoalsData.data.coreGoals.length > 0) {
    coreGoalsData.data.coreGoals
      .filter((goal) => goal.title !== mainGoal)
      .forEach((goal) => {
        const gridIdx = mandalartOrder[goal.position - 1];
        // mainGoal이 들어갈 가능성 완전 차단
        if (gridIdx !== 4) {
          coreGoalsGrid[gridIdx] = goal;
        }
      });
  }
  // 중앙만 mainGoal, 나머지는 빈 값
  coreGoalsGrid[4] = { title: mainGoal, id: 0, position: 0, aiGeneratable: false };

  const subGoals = coreGoalsGrid.map((goal) => goal.title);
  const getGridIndex = (selectedGoalIndex: number) => {
    return selectedGoalIndex < 4 ? selectedGoalIndex : selectedGoalIndex + 1;
  };

  const selectedGridIndex = getGridIndex(selectedGoalIndex);

  const todos = Array(8)
    .fill(null)
    .map(() => ({ title: '', cycle: 'DAILY' as 'DAILY' | 'WEEKLY' | 'ONCE', id: 0, position: 0 }));
  if (subGoalsData && subGoalsData.data && subGoalsData.data.subGoals) {
    subGoalsData.data.subGoals.forEach((goal, idx) => {
      todos[idx] = { ...goal, cycle: goal.cycle || 'DAILY', id: goal.id ?? 0, position: idx + 1 };
    });
  }

  const selectedGoal = coreGoalsGrid[selectedGridIndex];
  const selectedGoalTitle = selectedGoal?.title || '';

  // 하위 만다라트 9칸 배열 생성 (완전히 독립된 객체)
  const mandalartSubGoals = Array(9)
    .fill(null)
    .map(() => ({ title: '', cycle: 'DAILY' as 'DAILY' | 'WEEKLY' | 'ONCE', id: 0, position: 0 }));
  mandalartSubGoals[4] = { title: selectedGoalTitle, cycle: 'DAILY', id: 0, position: 0 };
  let todoIdx = 0;
  for (let i = 0; i < 9; i++) {
    if (i === 4) {
      continue;
    }
    mandalartSubGoals[i] = todos[todoIdx];
    todoIdx++;
  }

  // 디버깅: 각 배열의 title 값 확인
  console.log(
    'coreGoalsGrid',
    coreGoalsGrid.map((g) => g.title),
  );
  console.log(
    'todos',
    todos.map((g) => g.title),
  );
  console.log(
    'mandalartSubGoals',
    mandalartSubGoals.map((g) => g.title),
  );

  const updateTooltipState = (index: number, value: boolean) => {
    setTooltipOpenArr((arr) => arr.map((v, i) => (i === index ? value : v)));
  };

  const isTooltipOpen = selectedGoalIndex !== -1 ? tooltipOpenArr[selectedGoalIndex] : false;
  const handleTooltipClose = () => {
    updateTooltipState(selectedGoalIndex, false);
  };

  const hasAnyTodos = allTodos.some((goalTodos) =>
    goalTodos.some((todo) => todo.title.trim() !== ''),
  );
  const isCurrentGoalAiUsed = selectedGoalIndex === -1 ? false : aiUsedByGoal[selectedGoalIndex];
  const isCurrentGoalValid =
    selectedGoalIndex !== -1 && isValidSubGoal(subGoals[selectedGoalIndex]);
  const isAllCurrentTodosFilled = todos.every((todo) => todo.title.trim() !== '');
  const shouldShowTooltip = isTooltipOpen && !isAllCurrentTodosFilled;

  const handleSubGoalClick = (position: number) => {
    if (position < 1 || position > 8) {
      return;
    }
    setSelectedGoalIndex(position - 1);
  };

  // AI 추천값을 하위 목표로 저장하는 함수
  const handleApplyAiRecommendedGoals = async (
    selected: { id: number; position: number; title: string; cycle?: string }[],
  ) => {
    const goals = selected.map((item) => ({
      title: item.title,
      cycle: item.cycle || 'DAILY',
    }));
    try {
      if (!selectedCoreGoalId) {
        openModal(
          <AiFailModal onClose={closeModal} message="coreGoalSnapshotId가 올바르지 않습니다." />,
        );
        return;
      }
      await postAiRecommendSubGoals(selectedCoreGoalId, goals);
      window.location.reload();
    } catch (error: any) {
      openModal(
        <AiFailModal
          onClose={closeModal}
          message={error?.response?.data?.message || 'AI 추천값 저장에 실패했습니다.'}
        />,
      );
    }
  };

  // AI 추천 성공 시
  const handleAiRecommendSuccess = (aiList: { title: string; cycle: string }[]) => {
    openModal(
      <AiRecommendModal
        onClose={closeModal}
        onSubmit={handleApplyAiRecommendedGoals}
        values={todos.map((todo) => todo.title)}
        options={aiList.map((item) => item.title)}
      />,
    );
  };

  const handleAiRecommendFail = (err: any) => {
    const message = err?.response?.data?.message || '다시 한 번 시도해주세요.';
    openModal(<AiFailModal onClose={closeModal} message={message} />);
  };

  const handleOpenAiModal = () => {
    if (!selectedCoreGoalId) {
      handleAiRecommendFail({ response: { data: { message: 'coreGoalId가 올바르지 않습니다.' } } });
      return;
    }
    recommendAiSubGoal(
      {
        coreGoal: subGoals[selectedGoalIndex],
        subGoal: todos.filter((todo) => todo.title.trim()).map((todo) => ({ title: todo.title })),
      },
      {
        onSuccess: (res) => {
          const aiList = (res as any)?.data?.aiRecommendedList ?? (res as any)?.aiRecommendedList;
          handleAiRecommendSuccess(aiList);
        },
        onError: handleAiRecommendFail,
      },
    );
  };

  const handleNavigateComplete = async () => {
    try {
      await completeMandalart(mandalartId);
      navigate(PATH.MANDAL);
    } catch (error) {
      console.error('만다라트 완성 처리 중 오류 발생:', error);
      alert('만다라트 완성 처리 중 오류가 발생했습니다.');
    }
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
                disabled={isCurrentGoalAiUsed || !selectedCoreGoalId}
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
                subGoals: coreGoalsGrid.map((goal) => ({
                  id: goal.id,
                  title: truncateText(goal.title, 23),
                  position: goal.position,
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
                  title: truncateText(selectedGoalTitle, 23),
                  subGoals: mandalartSubGoals,
                }}
                onGoalClick={() => {}}
              />
              <TodoFields
                values={todos}
                onChange={handleTodoChange}
                onSave={handleSaveSubGoalSync}
                disabled={!isCurrentGoalValid}
                lastSavedTodos={[]}
                selectedGoalIndex={selectedGoalIndex}
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
