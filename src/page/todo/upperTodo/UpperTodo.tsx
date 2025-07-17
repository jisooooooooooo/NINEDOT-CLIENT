import { useState, useEffect, useMemo } from 'react';
import Mandalart from '@common/component/Mandalart/Mandalart';
import { useNavigate } from 'react-router-dom';

import * as styles from './UpperTodo.css';
import SubGoalFields from './component/SubGoalFields';

import { PATH } from '@/route';
import { IcSmallNext } from '@/assets/svg';
import GradientBackground from '@/common/component/Background/GradientBackground';
import Tooltip from '@/common/component/Tooltip/Tooltip';
import { useModal } from '@/common/hook/useModal';
import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';
import {
  useGetMandalAll,
  useGetCoreGoalIdPositions,
  usePostOnboardingCoreGoal,
  usePatchOnboardingCoreGoal,
  usePostAiRecommendCoreGoal,
} from '@/api/domain/upperTodo/hook';

interface UpperTodoProps {
  userName?: string;
  mainGoal?: string;
}

const UpperTodo = ({ userName = '김도트' }: UpperTodoProps) => {
  const { openModal, ModalWrapper, closeModal } = useModal();
  const navigate = useNavigate();
  const [subGoals, setSubGoals] = useState(Array(8).fill(''));
  const [isAiUsed, setIsAiUsed] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  const [recommendedGoals, setRecommendedGoals] = useState<{ title: string }[]>([]);
  const [aiResponseData, setAiResponseData] = useState<
    { id: number; position: number; title: string }[]
  >([]);

  const mandalartId = 1;
  const { data, refetch } = useGetMandalAll(mandalartId);
  const { data: coreGoalIds, refetch: refetchCoreGoalIds } = useGetCoreGoalIdPositions(mandalartId);

  const coreGoalIdMap = useMemo(() => {
    const map: Record<number, number> = {};
    if (coreGoalIds?.coreGoalIds && Array.isArray(coreGoalIds.coreGoalIds)) {
      coreGoalIds.coreGoalIds.forEach(({ id, position }) => {
        map[position] = id;
      });
    }
    return map;
  }, [coreGoalIds]);

  const postMutation = usePostOnboardingCoreGoal();
  const patchMutation = usePatchOnboardingCoreGoal();
  const postAiRecommend = usePostAiRecommendCoreGoal();

  const handleSubGoalEnter = async (index: number, value: string) => {
    if (!value.trim()) {
      return;
    }

    const position = index + 1;
    const coreGoalId = coreGoalIdMap[position];

    try {
      if (coreGoalId) {
        await patchMutation.mutateAsync({ coreGoalId, title: value });
      } else {
        await postMutation.mutateAsync({ mandalartId, title: value, position });
      }
      // 데이터 리페치하여 최신 상태 반영
      await refetchCoreGoalIds();
    } catch (error) {
      console.error('상위 목표 저장 실패:', error);
    }
  };

  const mainGoal = data?.title || '사용자가 작성한 대목표';

  useEffect(() => {
    const allFilled = subGoals.every((v) => v.trim() !== '');
    if (allFilled) {
      setIsTooltipOpen(false);
    }
  }, [subGoals]);

  const hasFilledSubGoals = subGoals.filter((v) => v.trim() !== '').length > 0;

  const handleNavigateLower = () => {
    navigate(PATH.TODO_LOWER);
  };

  // AI 추천 모달에서 선택한 목표들을 처리하는 함수
  const handleAiSubmit = (responseData: { id: number; position: number; title: string }[]) => {
    setAiResponseData(responseData);

    // subGoals 상태 업데이트
    const updatedSubGoals = [...subGoals];
    responseData.forEach(({ position, title }) => {
      updatedSubGoals[position - 1] = title;
    });
    setSubGoals(updatedSubGoals);

    // 데이터 리페치하여 최신 상태 반영
    refetchCoreGoalIds();
    refetch();
  };

  const handleOpenAiModal = async () => {
    // 현재 채워진 목표 개수 확인
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
      const titles = recommendList.map((item: { title: string }) => item.title);

      setRecommendedGoals(recommendList);

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
      setIsAiUsed(false); // 에러 시 AI 사용 상태 리셋
    }
  };

  return (
    <main className={styles.upperTodoContainer}>
      <GradientBackground />

      <section className={styles.upperTodoBoxWrapper}>
        <header className={styles.upperTodoHeader}>
          <div className={styles.upperTodoHeaderLeft}>
            <h1 className={styles.upperTodoHeaderTitle}>
              {userName}님,
              <br />
              <span className={styles.upperTodoHeaderGoal}>'{mainGoal}'</span>에<br />
              필요한 8가지 세부 목표를 작성해주세요.
            </h1>
          </div>

          <div className={styles.aiAssistWrapper}>
            <Tooltip
              className={styles.aiAssistTooltip}
              isOpen={isTooltipOpen}
              onClose={() => setIsTooltipOpen(false)}
            />
            <button
              className={isAiUsed ? styles.aiAssistButton.inactive : styles.aiAssistButton.active}
              type="button"
              aria-label="AI로 빈칸 채우기"
              onClick={handleOpenAiModal}
              disabled={isAiUsed}
            >
              AI로 빈칸 채우기
            </button>
          </div>
        </header>

        <div className={styles.upperTodoBox}>
          <Mandalart
            type="TODO_MAIN"
            mainGoal={mainGoal}
            subGoals={subGoals.map((v, i) => ({
              title: v,
              position: i,
              cycle: 'ONCE' as const,
            }))}
          />
          <SubGoalFields
            values={subGoals}
            onChange={setSubGoals}
            idPositions={coreGoalIds?.coreGoalIds || []}
            onEnter={handleSubGoalEnter}
            aiResponseData={aiResponseData}
          />
        </div>

        <button
          className={styles.mandalCompleteBox}
          type="button"
          aria-label="만다르트 완성하기"
          onClick={handleNavigateLower}
          disabled={!hasFilledSubGoals}
        >
          <span
            className={
              hasFilledSubGoals
                ? styles.mandalCompleteText.active
                : styles.mandalCompleteText.inactive
            }
          >
            만다라트를 완성했어요
          </span>
          <IcSmallNext
            className={
              hasFilledSubGoals
                ? styles.mandalCompleteIcon.active
                : styles.mandalCompleteIcon.inactive
            }
          />
        </button>
        {ModalWrapper}
      </section>
    </main>
  );
};

export default UpperTodo;
