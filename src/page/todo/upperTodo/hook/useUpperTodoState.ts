import { useEffect, useState } from 'react';

import { GOAL_COUNT } from '../constants';

import {
  useDeleteOnboardingCoreGoal,
  useGetCoreGoalIdPositions,
  useGetMandalAll,
  usePatchOnboardingCoreGoal,
  usePostOnboardingCoreGoal,
} from '@/api/domain/upperTodo/hook';

export const useUpperTodoState = (mandalartId: number) => {
  const { data, refetch } = useGetMandalAll(mandalartId);
  const { data: coreGoalIds, refetch: refetchCoreGoalIds } = useGetCoreGoalIdPositions(mandalartId);

  const postMutation = usePostOnboardingCoreGoal();
  const patchMutation = usePatchOnboardingCoreGoal();
  const deleteMutation = useDeleteOnboardingCoreGoal();

  const [subGoals, setSubGoals] = useState(Array(GOAL_COUNT).fill(''));
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  const coreGoalIdMap: Record<number, number> = {};
  if (coreGoalIds?.coreGoalIds && Array.isArray(coreGoalIds.coreGoalIds)) {
    coreGoalIds.coreGoalIds.forEach(({ id, position }) => {
      coreGoalIdMap[position] = id;
    });
  }

  useEffect(() => {
    const allFilled = subGoals.every((v) => v.trim() !== '');
    if (allFilled) {
      setIsTooltipOpen(false);
    }
  }, [subGoals]);

  const handleSubGoalEnter = async (index: number, value: string) => {
    const position = index + 1;
    const coreGoalId = coreGoalIdMap[position];

    try {
      if (value.trim() === '') {
        if (coreGoalId) {
          await deleteMutation.mutateAsync(coreGoalId);
          await refetchCoreGoalIds();
        }
        return;
      }

      if (coreGoalId) {
        await patchMutation.mutateAsync({ coreGoalId, title: value });
      } else {
        await postMutation.mutateAsync({ mandalartId, title: value, position });
      }

      await refetchCoreGoalIds();
    } catch {
      /* empty */
    }
  };

  return {
    data,
    subGoals,
    setSubGoals,
    isTooltipOpen,
    setIsTooltipOpen,
    coreGoalIds,
    handleSubGoalEnter,
    refetch,
    refetchCoreGoalIds,
  };
};
