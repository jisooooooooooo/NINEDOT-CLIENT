import { isAxiosError } from 'axios';

import { ALERT, GOAL_COUNT } from '../constants';
import { extractTitles, formatAiRecommendTitles } from '../utils/goal';

import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import { useOverlayModal } from '@/common/hook/useOverlayModal';
import { usePostAiRecommendNewSubGoal } from '@/api/domain/lowerTodo/hook';

interface TodoItem {
  title: string;
  cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
}

interface UseLowerTodoAIParams {
  selectedCoreGoalId?: number;
  selectedCoreGoalTitle?: string;
  selectedGoalIndex: number;
  currentTodos: TodoItem[];
  setCurrentTodos: (todos: TodoItem[]) => void;
  setIsTooltipOpen: (open: boolean) => void;
  isAiUsed: boolean[];
  setIsAiUsed: (value: boolean[] | ((prev: boolean[]) => boolean[])) => void;
  handleTodoEnter: (index: number, todo: TodoItem) => void;
}

interface ApiErrorResponse {
  message?: string;
}
const convertCycleToEnglish = (koreanCycle: string): 'DAILY' | 'WEEKLY' | 'ONCE' => {
  switch (koreanCycle) {
    case '매일':
      return 'DAILY';
    case '매주':
      return 'WEEKLY';
    case '한 번':
      return 'ONCE';
    default:
      return 'DAILY';
  }
};

const getServerMessage = (error: unknown, fallback: string) => {
  if (isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.message ?? fallback;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
};
export const useLowerTodoAI = ({
  selectedCoreGoalId,
  selectedCoreGoalTitle,
  selectedGoalIndex,
  currentTodos,
  setCurrentTodos,
  setIsTooltipOpen,
  isAiUsed,
  setIsAiUsed,
  handleTodoEnter,
}: UseLowerTodoAIParams) => {
  const { openModal, closeModal } = useOverlayModal();
  const postAiRecommendNew = usePostAiRecommendNewSubGoal();

  const handleAiSubmit = (goals: { title: string }[]) => {
    if (!selectedCoreGoalId) return;

    const emptyIndices = currentTodos
      .map((todo, index) => (todo.title.trim() === '' ? index : -1))
      .filter((index) => index !== -1);

    const updatedTodos = [...currentTodos];
    goals.forEach((goal, goalIndex) => {
      if (goalIndex < emptyIndices.length) {
        const targetIndex = emptyIndices[goalIndex];
        const [cycleText, originalTitle] = goal.title.split('/');

        const newTodo = {
          title: originalTitle || goal.title,
          cycle: convertCycleToEnglish(cycleText || '매일'),
        };

        updatedTodos[targetIndex] = newTodo;
        handleTodoEnter(targetIndex, newTodo);
      }
    });

    setCurrentTodos(updatedTodos);
    setIsAiUsed((prev) => {
      const newState = [...prev];
      newState[selectedGoalIndex] = true;
      return newState;
    });
  };

  const handleOpenAiModal = async () => {
    if (!selectedCoreGoalId) {
      alert('선택된 상위목표가 없습니다.');
      return;
    }

    const currentFilledCount = currentTodos.filter((todo) => todo.title.trim() !== '').length;
    const maxTodos = GOAL_COUNT;

    if (currentFilledCount >= maxTodos) {
      alert(ALERT.todosAlreadyFilled);
      return;
    }

    const updateAiUsed = () => {
      setIsAiUsed((prev) => {
        const newState = [...prev];
        newState[selectedGoalIndex] = true;
        return newState;
      });
    };

    updateAiUsed();
    setIsTooltipOpen(false);

    try {
      const currentSubGoals = extractTitles(
        currentTodos.filter((todo) => todo.title.trim() !== ''),
      ).map((title) => ({ title }));

      const response = await postAiRecommendNew.mutateAsync({
        coreGoalId: selectedCoreGoalId,
        coreGoal: selectedCoreGoalTitle || '선택된 상위목표',
        subGoal: currentSubGoals,
      });

      const recommendList = response.aiRecommendedList || [];
      const titles = formatAiRecommendTitles(recommendList);

      const aiModalContent = (
        <AiRecommendModal
          onClose={() => {
            closeModal();
            updateAiUsed();
          }}
          onSubmit={handleAiSubmit}
          values={currentTodos.map((todo) => todo.title)}
          options={titles}
        />
      );

      openModal(aiModalContent);
    } catch (error) {
      const message = getServerMessage(error, ALERT.aiFetchFail);
      alert(message);
    } finally {
      updateAiUsed();
    }
  };

  return { isAiUsed, handleOpenAiModal } as const;
};
