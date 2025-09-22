import { useState } from 'react';

import { extractTitles, updateSubGoalsWithAiResponse } from '../utils/goal';
import { GOAL_COUNT } from '../constants';

import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import AiFailModal from '@/common/component/AiFailModal/AiFailModal';
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
  hasAiBeenUsed: boolean;
  markAiUsed: () => void;
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
  hasAiBeenUsed,
  markAiUsed,
}: UseUpperTodoAIParams) => {
  const { openModal, closeModal } = useOverlayModal();
  const postAiRecommend = usePostAiRecommendCoreGoal();
  const postRecommendToCore = usePostAiRecommendToCoreGoals();

  const [isLoading, setIsLoading] = useState(false);

  const openFailModal = (retry?: () => void) => {
    openModal(<AiFailModal onClose={closeModal} onRetry={retry} />);
  };

  const runSubmitMutation = (titles: string[]) => {
    if (titles.length === 0) {
      return;
    }

    setIsLoading(true);
    postRecommendToCore.mutate(
      { mandalartId, goals: titles },
      {
        onSuccess: (response) => {
          const responseData: CoreGoalResponse[] = response.coreGoals;
          setSubGoals((prev) => updateSubGoalsWithAiResponse(prev, responseData));
          refetchCoreGoalIds();
          refetch();
          setIsLoading(false);
        },
        onError: () => {
          openFailModal(() => {
            runSubmitMutation(titles);
          });
          setIsLoading(false);
        },
      },
    );
  };

  const handleAiSubmit = (goals: { title: string }[]) => {
    const titles = goals.map((goal) => goal.title);
    runSubmitMutation(titles);
  };

  const handleOpenAiModal = async () => {
    const currentFilledCount = subGoals.filter((v) => v.trim() !== '').length;
    const maxGoals = GOAL_COUNT;

    if (currentFilledCount >= maxGoals) {
      openFailModal();
      return;
    }

    if (hasAiBeenUsed || isLoading) {
      return;
    }

    setIsLoading(true);
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
          onBeforeClose={markAiUsed}
          onSubmit={handleAiSubmit}
          values={subGoals}
          options={titles}
        />
      );

      openModal(aiModalContent);
    } catch {
      openFailModal(handleOpenAiModal);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleOpenAiModal } as const;
};
