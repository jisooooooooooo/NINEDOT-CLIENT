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
import { useOverallGoal } from '@/api/domain/lowerTodo/hook/useOverallGoal';
import { useSubGoals } from '@/api/domain/lowerTodo/hook/useSubGoals';
import { useCreateSubGoal } from '@/api/domain/lowerTodo/hook/useCreateSubGoal';
import { useUpdateSubGoal } from '@/api/domain/lowerTodo/hook/useUpdateSubGoal';
import { useDeleteSubGoal } from '@/api/domain/lowerTodo/hook/useDeleteSubGoal';
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

const LowerTodo = ({ userName = '김도트' }: LowerTodoProps) => {
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
  const { data: overallGoalData } = useOverallGoal(mandalartId);

  const selectedCoreGoalId =
    selectedGoalIndex !== -1 && coreGoalsData
      ? coreGoalsData.data.coreGoals[selectedGoalIndex]?.id
      : undefined;

  const { data: subGoalsData } = useSubGoals({
    mandalartId,
    coreGoalId: selectedCoreGoalId,
  });

  const createSubGoalMutation = useCreateSubGoal(selectedCoreGoalId ?? 0);
  const updateSubGoalMutation = useUpdateSubGoal(selectedCoreGoalId ?? 0);
  const deleteSubGoalMutation = useDeleteSubGoal();

  const aiRecommendMutation = useAiRecommendSubGoal(selectedCoreGoalId ?? 0);
  const recommendAiSubGoal = aiRecommendMutation.mutate;

  const handleSaveSubGoalSync = (todo: TodoItem, position: number, done?: () => void) => {
    console.log('handleSaveSubGoalSync called:', {
      todo,
      position,
      subGoalIdsByPosition,
      selectedGoalIndex,
    });
    const subGoalId = subGoalIdsByPosition[position];
    const trimmedTitle = todo.title.trim();

    // 1. subGoalId가 있고 title이 빈 문자열이면 DELETE 호출
    if (subGoalId && !trimmedTitle) {
      deleteSubGoalMutation.mutate(subGoalId, {
        onSuccess: () => {
          setAllTodos((prev) => {
            const newTodos = [...prev];
            newTodos[selectedGoalIndex][position] = { title: '', cycle: 'DAILY' };
            return newTodos;
          });
          setSubGoalIdsByPosition((prev) => ({ ...prev, [position]: null }));
          if (done) {
            done();
          }
        },
        onError: () => {
          alert('하위 목표 삭제 중 오류가 발생했습니다.');
          if (done) {
            done();
          }
        },
      });
      return;
    }

    // 2. subGoalId가 있고 title이 있으면 PATCH 호출 (주기만 바꿔도 포함)
    if (subGoalId && trimmedTitle) {
      updateSubGoalMutation.mutate(
        {
          title: trimmedTitle,
          cycle: todo.cycle,
        },
        {
          onSuccess: () => {
            setAllTodos((prev) => {
              const newTodos = [...prev];
              newTodos[selectedGoalIndex][position] = { ...todo };
              return newTodos;
            });
            if (done) {
              done();
            }
          },
          onError: () => {
            alert('하위 목표 수정 중 오류가 발생했습니다.');
            if (done) {
              done();
            }
          },
        },
      );
      return;
    }

    // 3. subGoalId가 없고 title이 있으면 POST 호출
    if (!subGoalId && trimmedTitle) {
      createSubGoalMutation.mutate(
        {
          title: trimmedTitle,
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
      return;
    }

    // 4. subGoalId가 없고 title도 없으면 아무것도 안 함
    if (done) {
      done();
    }
  };

  const handleTodoChange = (newTodos: TodoItem[]) => {
    console.log('handleTodoChange called:', { newTodos, selectedGoalIndex });
    setAllTodos((prev) => {
      const newState = [...prev];
      newState[selectedGoalIndex] = [...newTodos];
      console.log('setAllTodos in handleTodoChange, newState:', newState);
      return newState;
    });
  };

  useEffect(() => {
    console.log('useEffect - coreGoalsData 변경됨');
    console.log('coreGoalsData:', coreGoalsData);
    if (coreGoalsData && coreGoalsData.data.coreGoals.length > 0) {
      const subGoals = coreGoalsData.data.coreGoals.map((goal) => goal.title);
      setSelectedGoalIndex(getFirstValidGoalIndex(subGoals));
    }
  }, [coreGoalsData]);

  useEffect(() => {
    console.log('useEffect - subGoalsData 변경됨');
    console.log('subGoalsData:', subGoalsData);
    if (
      subGoalsData &&
      selectedGoalIndex !== -1 &&
      allTodos[selectedGoalIndex].every((todo) => !todo.title?.trim())
    ) {
      setAllTodos((prev) => {
        // 이미 값이 있으면 덮어쓰지 않음
        if (prev[selectedGoalIndex].some((todo) => todo.title.trim() !== '')) {
          console.log('useEffect: 값이 이미 있으므로 덮어쓰지 않음', prev);
          return prev;
        }
        const newTodos = [...prev];
        const apiTodos = subGoalsData.data.subGoals.map((subGoal) => ({
          title: subGoal.title,
          cycle: subGoal.cycle,
        }));
        const filledTodos = Array(8)
          .fill({ title: '', cycle: 'DAILY' })
          .map((_, idx) => apiTodos[idx] || { title: '', cycle: 'DAILY' });

        const prevFilled = prev[selectedGoalIndex];
        const isSame =
          filledTodos.length === prevFilled.length &&
          filledTodos.every(
            (t, i) => t.title === prevFilled[i].title && t.cycle === prevFilled[i].cycle,
          );

        if (isSame) {
          console.log('useEffect: filledTodos와 prevFilled가 같으므로 덮어쓰지 않음', prev);
          return prev;
        }

        newTodos[selectedGoalIndex] = filledTodos;
        console.log('useEffect: setAllTodos로 덮어씀', newTodos);
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
    console.warn('coreGoalsData가 비어 있습니다!');
    return null;
  }

  const mandalartOrder = [0, 1, 2, 5, 8, 7, 6, 3];
  const coreGoalsGrid = Array(9)
    .fill(null)
    .map(() => ({ title: '', id: 0, position: 0, aiGeneratable: false }));
  if (coreGoalsData.data.coreGoals && coreGoalsData.data.coreGoals.length > 0) {
    coreGoalsData.data.coreGoals
      .filter((goal) => {
        const gridIdx = mandalartOrder[goal.position - 1];
        return goal.title !== (overallGoalData?.title || '') && gridIdx !== 4;
      })
      .forEach((goal) => {
        const gridIdx = mandalartOrder[goal.position - 1];
        coreGoalsGrid[gridIdx] = goal;
      });
  }
  coreGoalsGrid[4] = {
    title: overallGoalData?.title || '',
    id: 0,
    position: 0,
    aiGeneratable: false,
  };

  // 디버깅: coreGoalsGrid/subGoals 생성 직후 값 점검
  console.log(
    'coreGoalsGrid 생성 후:',
    coreGoalsGrid.map((g) => g.title),
  );
  console.log(
    'subGoals 생성 후:',
    coreGoalsGrid.map((g) => g.title),
  );

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

  const mandalartSubGoals = Array(9)
    .fill(null)
    .map(() => ({ title: '', cycle: 'DAILY' as 'DAILY' | 'WEEKLY' | 'ONCE', id: 0, position: 0 }));

  mandalartSubGoals[4] = { title: selectedGoalTitle, cycle: 'DAILY', id: 0, position: 0 };

  const uniqueTodos = todos.filter((todo) => todo.title !== selectedGoalTitle);

  let todoIdx = 0;
  mandalartOrder.forEach((gridIdx) => {
    if (gridIdx !== 4 && todoIdx < uniqueTodos.length) {
      mandalartSubGoals[gridIdx] = uniqueTodos[todoIdx];
      todoIdx++;
    }
  });

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
  // 렌더링 직전 값 점검
  console.log('selectedGoalIndex:', selectedGoalIndex);
  console.log('subGoals:', subGoals);
  console.log('subGoals[selectedGoalIndex]:', subGoals[selectedGoalIndex]);
  console.log('coreGoalsData:', coreGoalsData);
  console.log('isValidSubGoal:', isValidSubGoal(subGoals[selectedGoalIndex]));
  const isAllCurrentTodosFilled = todos.every((todo) => todo.title.trim() !== '');
  const shouldShowTooltip = isTooltipOpen && !isAllCurrentTodosFilled;

  const handleSubGoalClick = (position: number) => {
    if (position < 1 || position > 8) {
      return;
    }
    const newIndex = position - 1;
    setSelectedGoalIndex(newIndex);
    // 클릭 시점에 값 점검
    console.log('클릭한 position:', position);
    console.log('선택될 selectedGoalIndex:', newIndex);
    console.log('subGoals[newIndex]:', subGoals[newIndex]);
  };

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
      navigate(PATH.TODO_MY);
    } catch (error) {
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
                  : overallGoalData?.title || '전체 목표 없음'}
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
                title: truncateText(overallGoalData?.title || '전체 목표 없음', 23),
                subGoals: mandalartOrder.map((gridIdx) => {
                  const goal = coreGoalsGrid[gridIdx];
                  return {
                    id: goal.id,
                    title: truncateText(goal.title, 23),
                    position: goal.position,
                  };
                }),
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
                  subGoals: mandalartOrder.map((gridIdx) => {
                    const goal = mandalartSubGoals[gridIdx];
                    return {
                      id: goal.id,
                      title: truncateText(goal.title, 23),
                      position: goal.position,
                      cycle: goal.cycle,
                    };
                  }),
                }}
                onGoalClick={() => {}}
              />
              <TodoFields
                values={allTodos[selectedGoalIndex]}
                onChange={handleTodoChange}
                onSave={handleSaveSubGoalSync}
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
