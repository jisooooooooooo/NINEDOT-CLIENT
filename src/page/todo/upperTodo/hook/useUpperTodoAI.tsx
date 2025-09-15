import { useState } from 'react';

import { extractTitles, updateSubGoalsWithAiResponse } from '../utils/goal';

import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import { useOverlayModal } from '@/common/hook/useOverlayModal';
import {
  usePostAiRecommendCoreGoal,
  usePostAiRecommendToCoreGoals,
} from '@/api/domain/upperTodo/hook';

type UseUpperTodoAIParams = {
  mandalartId: number;
  mainGoal: string;
  subGoals: string[];
  setSubGoals: (values: string[]) => void;
  refetch: () => void;
  refetchCoreGoalIds: () => void;
  setIsTooltipOpen: (open: boolean) => void;
};

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
          const responseData = response.coreGoals as {
            id: number;
            position: number;
            title: string;
          }[];
          const updatedSubGoals = updateSubGoalsWithAiResponse(subGoals, responseData);
          setSubGoals(updatedSubGoals);
          refetchCoreGoalIds();
          refetch();
        },
        onError: () => {
          alert('AI 추천 목표 저장 실패');
        },
      },
    );
  };

  const handleOpenAiModal = async () => {
    const currentFilledCount = subGoals.filter((v) => v.trim() !== '').length;
    const maxGoals = 8;

    if (currentFilledCount >= maxGoals) {
      alert('이미 모든 목표가 채워져 있습니다.');
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
      alert('AI 추천을 불러오지 못했어요. 잠시 후 다시 시도해주세요.');
    }
  };

  return { isAiUsed, handleOpenAiModal } as const;
};
