import { useEffect, useState } from 'react';

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

  const [allTodos, setAllTodos] = useState<TodoItem[][]>(
    Array(8)
      .fill(null)
      .map(() => Array(GOAL_COUNT).fill({ title: '', cycle: 'DAILY' })),
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
  useEffect(() => {
    if (coreGoalsData?.coreGoals && coreGoalsData.coreGoals.length > 0) {
      const sortedGoals = [...coreGoalsData.coreGoals].sort((a, b) => a.position - b.position);
      const firstGoal = sortedGoals[0];
      if (firstGoal) {
        setSelectedGoalIndex(
          coreGoalsData?.coreGoals?.findIndex((goal) => goal.id === firstGoal.id) || 0,
        );
      }
    }
  }, [coreGoalsData]);

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
          await refetchSubGoals();
        }
        return;
      }

      if (subGoalId) {
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

      await refetchSubGoals();
    } catch {
      /* empty */
    }
  };

  const handleTodoChange = (newTodos: TodoItem[]) => {
    setAllTodos((prev) => {
      const newState = [...prev];
      newState[selectedGoalIndex] = newTodos;
      return newState;
    });
  };

  const handleSubGoalClick = (position: number, _goalId?: number) => {
    if (position === 5) return;

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
