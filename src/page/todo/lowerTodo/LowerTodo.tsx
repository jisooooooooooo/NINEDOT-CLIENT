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
  const { ModalWrapper } = useModal();
  const [selectedGoalIndex, setSelectedGoalIndex] = useState(0);
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

  const createSubGoalMutation = useCreateSubGoal(selectedCoreGoalId ?? 0);

  const aiRecommendMutation = useAiRecommendSubGoal(selectedCoreGoalId ?? 0);
  const recommendAiSubGoal = aiRecommendMutation.mutate;
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiFailModalOpen, setAiFailModalOpen] = useState(false);
  const [aiRecommendList, setAiRecommendList] = useState<{ title: string; cycle: string }[]>([]);

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

  const subGoals = coreGoalsData.data.coreGoals.map((goal) => goal.title);
  const todos = allTodos[selectedGoalIndex];

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
    if (!subGoals[position] || subGoals[position].trim() === '') {
      return;
    }
    setSelectedGoalIndex(position);
  };

  // feat 브랜치의 handleAiSubmit 로직 유지 (당신이 작업한 버전)
  const handleAiSubmit = (selected: { id: number; position: number; title: string }[]) => {
    const selectedTitles = selected.map((item) => item.title);
    setAllTodos((prev) => {
      const updated = [...prev];
      let fillIndex = 0;
      for (
        let i = 0;
        i < updated[selectedGoalIndex].length && fillIndex < selectedTitles.length;
        i++
      ) {
        if (updated[selectedGoalIndex][i].title.trim() === '') {
          updated[selectedGoalIndex][i] = {
            ...updated[selectedGoalIndex][i],
            title: selectedTitles[fillIndex],
          };
          fillIndex++;
        }
      }
      return updated;
    });
    setAiUsedByGoal((prev) => prev.map((v, idx) => (idx === selectedGoalIndex ? true : v)));
    updateTooltipState(selectedGoalIndex, false);
  };

  // feat 브랜치의 handleOpenAiModal 로직 유지 (당신이 작업한 AI API 호출 방식)
  const handleOpenAiModal = () => {
    console.log('[1] AI 버튼 클릭', {
      coreGoal: subGoals[selectedGoalIndex],
      subGoal: todos.filter((todo) => todo.title.trim()).map((todo) => ({ title: todo.title })),
      selectedCoreGoalId,
    });
    if (!selectedCoreGoalId) {
      console.warn('selectedCoreGoalId가 유효하지 않음');
      return;
    }
    recommendAiSubGoal(
      {
        coreGoal: subGoals[selectedGoalIndex],
        subGoal: todos.filter((todo) => todo.title.trim()).map((todo) => ({ title: todo.title })),
      },
      {
        onSuccess: (res) => {
          console.log('[4] AI 추천 성공', res);
          const aiList = (res as any)?.data?.aiRecommendedList ?? (res as any)?.aiRecommendedList;
          setAiRecommendList(aiList);
          setAiModalOpen(true);
        },
        onError: (err) => {
          console.log('[4] AI 추천 실패', err);
          const code =
            err && typeof err === 'object' && 'response' in err && (err as any).response?.data?.code
              ? (err as any).response.data.code
              : undefined;
          if (code === 500) {
            setAiFailModalOpen(true);
          } else if (code === 409) {
            alert('이미 8개가 모두 작성되었거나, AI 추천을 이미 사용했습니다.');
          } else if (code === 404) {
            alert('존재하지 않는 상위 목표입니다.');
          } else if (code === 403) {
            alert('다른 유저의 목표에는 추천을 요청할 수 없습니다.');
          } else if (code === 400) {
            alert('coreGoalId가 올바르지 않습니다.');
          } else {
            alert('알 수 없는 오류가 발생했습니다.');
          }
          setAiFailModalOpen(false);
        },
      },
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
        {aiModalOpen && (
          <AiRecommendModal
            onClose={() => setAiModalOpen(false)}
            onSubmit={handleAiSubmit}
            values={todos.map((todo) => todo.title)}
            options={aiRecommendList.map((item) => item.title)}
          />
        )}
        {aiFailModalOpen && <AiFailModal onClose={() => setAiFailModalOpen(false)} />}
      </section>
    </main>
  );
};

export default LowerTodo;
