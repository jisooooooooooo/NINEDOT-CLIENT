import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mandalart from '@common/component/Mandalart/Mandalart';

import * as styles from './UpperTodo.css';
import SubGoalFields from './component/SubGoalFields';
import UpperTodoHeader from './component/UpperTodoHeader';
import MandalCompleteButton from './component/MandalCompleteButton';
import { useUpperTodoState } from './hook/useUpperTodoState';

import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import GradientBackground from '@/common/component/Background/GradientBackground';
import { useModal } from '@/common/hook/useModal';
import { PATH } from '@/route';
import { usePostAiRecommendCoreGoal } from '@/api/domain/upperTodo/hook';

interface UpperTodoProps {
  userName?: string;
  mainGoal?: string;
}

const updateSubGoalsWithAiResponse = (
  original: string[],
  responseData: { position: number; title: string }[],
): string[] => {
  const updated = [...original];
  responseData.forEach(({ position, title }) => {
    updated[position - 1] = title;
  });
  return updated;
};

const extractTitles = (goals: { title: string }[]) => goals.map((item) => item.title);

const UpperTodo = ({ userName = '김도트' }: UpperTodoProps) => {
  const mandalartId = 1;

  const { openModal, ModalWrapper, closeModal } = useModal();
  const navigate = useNavigate();

  const {
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
  } = useUpperTodoState(mandalartId);

  const postAiRecommend = usePostAiRecommendCoreGoal();

  const mainGoal = data?.title || '사용자가 작성한 대목표';

  const handleNavigateLower = () => {
    navigate(PATH.TODO_LOWER);
  };

  const handleAiSubmit = (responseData: { id: number; position: number; title: string }[]) => {
    setAiResponseData(responseData);
    const updatedSubGoals = updateSubGoalsWithAiResponse(subGoals, responseData);
    setSubGoals(updatedSubGoals);
    refetchCoreGoalIds();
    refetch();
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
          mandalartId={mandalartId}
        />
      );

      openModal(aiModalContent);
    } catch (error) {
      console.error('AI 추천 호출 실패:', error);
      setIsAiUsed(false);
    }
  };

  const [isAiUsed, setIsAiUsed] = useState(false);

  const hasFilledSubGoals = subGoals.filter((v) => v.trim() !== '').length > 0;

  const [submittedIndices, setSubmittedIndices] = useState<Set<number>>(new Set());

  const handleDebouncedSubGoalEnter = (index: number, value: string) => {
    if (submittedIndices.has(index)) {
      return;
    }

    handleSubGoalEnter(index, value);
    setSubmittedIndices((prev) => new Set(prev).add(index));
  };

  return (
    <main className={styles.upperTodoContainer}>
      <GradientBackground />

      <section className={styles.upperTodoBoxWrapper}>
        <UpperTodoHeader
          userName={userName}
          mainGoal={mainGoal}
          isTooltipOpen={isTooltipOpen}
          setIsTooltipOpen={setIsTooltipOpen}
          isAiUsed={isAiUsed}
          handleOpenAiModal={handleOpenAiModal}
        />

        <div className={styles.upperTodoBox}>
          <Mandalart
            type="TODO_MAIN"
            mainGoal={mainGoal}
            subGoals={subGoals.map((v, i) => ({
              id: i + 1,
              title: v,
              position: i + 1,
              cycle: 'ONCE' as const,
            }))}
          />
          <SubGoalFields
            values={subGoals}
            onChange={setSubGoals}
            idPositions={coreGoalIds?.coreGoalIds || []}
            onEnter={handleDebouncedSubGoalEnter}
            aiResponseData={aiResponseData}
          />
        </div>

        <MandalCompleteButton
          hasFilledSubGoals={hasFilledSubGoals}
          handleNavigateLower={handleNavigateLower}
        />
        {ModalWrapper}
      </section>
    </main>
  );
};

export default UpperTodo;
