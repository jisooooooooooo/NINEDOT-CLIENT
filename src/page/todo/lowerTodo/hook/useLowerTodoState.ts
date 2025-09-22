import { useEffect, useState, useMemo } from 'react';

import { GOAL_COUNT } from '../constants';

import {
  useGetMandalAll,
  useGetCoreGoals,
  useGetSubGoalIds,
  usePostOnboardingSubGoal,
  usePatchOnboardingSubGoal,
  useDeleteOnboardingSubGoal,
} from '@/api/domain/lowerTodo/hook';

export type TodoItem = {
  title: string;
  cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
};
export const useLowerTodoState = (mandalartId: number) => {
  const { data, refetch } = useGetMandalAll(mandalartId);
  const { data: coreGoalsData, refetch: refetchCoreGoals } = useGetCoreGoals(mandalartId);

  const [selectedGoalIndex, setSelectedGoalIndex] = useState(0);

  const selectedCoreGoalId = coreGoalsData?.coreGoals?.[selectedGoalIndex]?.id;

  const { data: subGoalsData, refetch: refetchSubGoals } = useGetSubGoalIds(
    selectedCoreGoalId || 0,
  );

  const postMutation = usePostOnboardingSubGoal();
  const patchMutation = usePatchOnboardingSubGoal();
  const deleteMutation = useDeleteOnboardingSubGoal();

  const createEmptyTodos = (): TodoItem[] =>
    Array(GOAL_COUNT)
      .fill(null)
      .map(() => ({ title: '', cycle: 'DAILY' as const }));

  const [allTodos, setAllTodos] = useState<TodoItem[][]>(
    Array(8)
      .fill(null)
      .map(() => createEmptyTodos()),
  );
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  const [isAiUsed, setIsAiUsed] = useState<boolean[]>(() => Array(8).fill(false));

  const subGoalIdMap: Record<number, number> = {};
  if (subGoalsData?.subGoalIds && Array.isArray(subGoalsData.subGoalIds)) {
    subGoalsData.subGoalIds.forEach(({ id, position }: { id: number; position: number }) => {
      if (!subGoalIdMap[position] || id > subGoalIdMap[position]) {
        subGoalIdMap[position] = id;
      }
    });
  }
  const sortedCoreGoals = useMemo(() => {
    if (!coreGoalsData?.coreGoals) {
      return [];
    }
    return [...coreGoalsData.coreGoals].sort((a, b) => a.position - b.position);
  }, [coreGoalsData?.coreGoals]);

  useEffect(() => {
    if (sortedCoreGoals.length > 0) {
      const firstGoal = sortedCoreGoals[0];
      if (firstGoal) {
        setSelectedGoalIndex(
          coreGoalsData?.coreGoals?.findIndex((goal) => goal.id === firstGoal.id) || 0,
        );
      }
    }
  }, [sortedCoreGoals, coreGoalsData?.coreGoals]);

  useEffect(() => {
    const currentTodos = allTodos[selectedGoalIndex] || [];
    const allFilled = currentTodos.every((todo) => todo.title.trim() !== '');
    if (allFilled) {
      setIsTooltipOpen(false);
    }
  }, [allTodos, selectedGoalIndex]);
  const handleTodoEnter = async (index: number, todo: TodoItem) => {
    if (!selectedCoreGoalId) {
      return;
    }

    const position = index + 1;
    const subGoalId = subGoalIdMap[position];

    try {
      if (todo.title.trim() === '') {
        if (subGoalId) {
          await deleteMutation.mutateAsync(subGoalId);
        }
      } else if (subGoalId) {
        await patchMutation.mutateAsync({
          subGoalId,
          title: todo.title,
          cycle: todo.cycle,
        });
      } else {
        await postMutation.mutateAsync({
          coreGoalId: selectedCoreGoalId,
          title: todo.title,
          position,
          cycle: todo.cycle,
        });
      }
    } catch {
      // API 요청 실패 시 무시 (finally에서 refetchSubGoals로 데이터 동기화)
    } finally {
      await refetchSubGoals();
    }
  };

  const handleTodoChange = (newTodos: TodoItem[]) => {
    setAllTodos((prev) => {
      const newState = [...prev];
      newState[selectedGoalIndex] = newTodos;
      return newState;
    });
  };

  const handleSubGoalClick = (position: number) => {
    if (position === 5) {
      return;
    }

    const actualPosition = position > 5 ? position - 1 : position;

    const goalIndex = coreGoalsData?.coreGoals?.findIndex(
      (goal) => goal.position === actualPosition,
    );
    if (goalIndex !== undefined && goalIndex !== -1) {
      setSelectedGoalIndex(goalIndex);
    }
  };
  const currentTodos = allTodos[selectedGoalIndex] || [];

  return {
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
    refetch,
    refetchCoreGoals,
    refetchSubGoals,
  };
};
