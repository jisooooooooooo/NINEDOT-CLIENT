import { useRef, useState } from 'react';

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

  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [hasAiUsed, setHasAiUsed] = useState(false);
  const lastSubmitTitlesRef = useRef<string[] | null>(null);

  const runSubmitMutation = (titles: string[]) => {
    if (titles.length === 0) {
      return;
    }

    setIsAiProcessing(true);
    postRecommendToCore.mutate(
      { mandalartId, goals: titles },
      {
        onSuccess: (response) => {
          const responseData: CoreGoalResponse[] = response.coreGoals;
          setSubGoals((prev) => updateSubGoalsWithAiResponse(prev, responseData));
          refetchCoreGoalIds();
          refetch();
          setHasAiUsed(true);
          lastSubmitTitlesRef.current = null;
          setIsAiProcessing(false);
        },
        onError: () => {
          openModal(
            <AiFailModal
              onClose={closeModal}
              onRetry={() => {
                const submitTitles = lastSubmitTitlesRef.current;
                if (submitTitles) {
                  runSubmitMutation(submitTitles);
                }
              }}
            />,
          );
          setIsAiProcessing(false);
        },
      },
    );
  };

  const handleAiSubmit = (goals: { title: string }[]) => {
    const titles = goals.map((goal) => goal.title);
    lastSubmitTitlesRef.current = titles;
    runSubmitMutation(titles);
  };

  const handleOpenAiModal = async () => {
    const currentFilledCount = subGoals.filter((v) => v.trim() !== '').length;
    const maxGoals = GOAL_COUNT;

    if (currentFilledCount >= maxGoals) {
      openModal(<AiFailModal onClose={closeModal} />);
      return;
    }

    if (hasAiUsed || isAiProcessing) {
      return;
    }

    setIsAiProcessing(true);
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
      openModal(<AiFailModal onClose={closeModal} onRetry={handleOpenAiModal} />);
    } finally {
      setIsAiProcessing(false);
    }
  };

  return { isAiUsed: hasAiUsed || isAiProcessing, handleOpenAiModal } as const;
};
