import { useState } from 'react';

import { extractTitles, updateSubGoalsWithAiResponse } from '../utils/goal';
import { ALERT, GOAL_COUNT } from '../constants';

import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import { useOverlayModal } from '@/common/hook/useOverlayModal';
import {
  usePostAiRecommendCoreGoal,
  usePostAiRecommendToCoreGoals,
} from '@/api/domain/upperTodo/hook';

interface UseUpperTodoAIParams {
  mandalartId: number;
  mainGoal: string;
  subGoals: string[];
  setSubGoals: (values: string[] | ((prev: string[]) => string[])) => void;
  refetch: () => void;
  refetchCoreGoalIds: () => void;
  setIsTooltipOpen: (open: boolean) => void;
}

interface CoreGoalResponse {
  id: number;
  position: number;
  title: string;
}

export const useUpperTodoAI = ({
  mandalartId,
  mainGoal,
  subGoals,
  setSubGoals,
  refetch,
  refetchCoreGoalIds,
  setIsTooltipOpen,
}: UseUpperTodoAIParams) => {
  const { openModal, closeModal } = useOverlayModal();
  const postAiRecommend = usePostAiRecommendCoreGoal();
  const postRecommendToCore = usePostAiRecommendToCoreGoals();

  const [isAiUsed, setIsAiUsed] = useState(false);

  const handleAiSubmit = (goals: { title: string }[]) => {
    postRecommendToCore.mutate(
      { mandalartId, goals: goals.map((g) => g.title) },
      {
        onSuccess: (response) => {
          const responseData: CoreGoalResponse[] = response.coreGoals;
          setSubGoals((prev) => updateSubGoalsWithAiResponse(prev, responseData));
          refetchCoreGoalIds();
          refetch();
        },
        onError: () => {
          alert(ALERT.aiSaveFail);
        },
      },
    );
  };

  const handleOpenAiModal = async () => {
    const currentFilledCount = subGoals.filter((v) => v.trim() !== '').length;
    const maxGoals = GOAL_COUNT;

    if (currentFilledCount >= maxGoals) {
      alert(ALERT.goalsAlreadyFilled);
      return;
    }

    setIsAiUsed(true);
    setIsTooltipOpen(false);

    try {
      const coreGoals = subGoals.filter((v) => v.trim() !== '').map((v) => ({ title: v }));
      const response = await postAiRecommend.mutateAsync({
        mandalartId,
        mandalart: mainGoal,
        coreGoal: coreGoals,
      });

      const recommendList = response || [];
      const titles = extractTitles(recommendList);

      const aiModalContent = (
        <AiRecommendModal
          onClose={closeModal}
          onSubmit={handleAiSubmit}
          values={subGoals}
          options={titles}
        />
      );

      openModal(aiModalContent);
    } catch {
      setIsAiUsed(false);
      alert(ALERT.aiFetchFail);
    }
  };

  return { isAiUsed, handleOpenAiModal } as const;
};
