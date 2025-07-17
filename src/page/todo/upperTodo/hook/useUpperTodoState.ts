import { useEffect, useMemo, useState } from 'react';

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

  const [subGoals, setSubGoals] = useState(Array(8).fill(''));
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  const [aiResponseData, setAiResponseData] = useState<
    { id: number; position: number; title: string }[]
  >([]);

  const coreGoalIdMap = useMemo(() => {
    const map: Record<number, number> = {};
    if (coreGoalIds?.coreGoalIds && Array.isArray(coreGoalIds.coreGoalIds)) {
      coreGoalIds.coreGoalIds.forEach(({ id, position }) => {
        map[position] = id;
      });
    }
    return map;
  }, [coreGoalIds]);

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
    } catch (error) {
      console.error('상위 목표 저장 실패 또는 삭제 실패:', error);
    }
  };

  return {
    data,
    subGoals,
    setSubGoals,
    isTooltipOpen,
    setIsTooltipOpen,
    aiResponseData,
    setAiResponseData,
    coreGoalIds,
    handleSubGoalEnter,
    refetch,
    refetchCoreGoalIds,
  };
};
