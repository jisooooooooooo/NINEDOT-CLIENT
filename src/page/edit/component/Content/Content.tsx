import { useState, useEffect } from 'react';

import * as styles from './Content.css';
import HoverContent from '../HoverContent/HoverContent';
import { HOVER_GUIDE_MESSAGES } from '../../constants';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import { useMandalAll } from '@/api/domain/mandalAll/hook';
import { useSubGoalIds, useUpdateCoreGoal } from '@/api/domain/edit/hook';
import type { CoreGoal, SubGoal, MandalartResponse } from '@/page/mandal/types/mandal';

interface ContentProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const MANDAL_ID = 1;

const Content = ({ isEditing, setIsEditing }: ContentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredGoal, setHoveredGoal] = useState<CoreGoal | null>(null);

  const { data: mandalartData, isLoading: isMandalLoading } = useMandalAll(MANDAL_ID);
  const { data: subGoalIdsResponse, isLoading: isSubGoalsLoading } = useSubGoalIds(
    hoveredGoal?.id || 0,
    {
      enabled: !!hoveredGoal,
    },
  );
  const { mutate: updateGoal } = useUpdateCoreGoal(MANDAL_ID);

  const isLoading = isMandalLoading || (hoveredGoal && isSubGoalsLoading);

  const handleSave = () => {
    if (hoveredGoal) {
      const requestData = {
        coreGoal: {
          position: hoveredGoal.position,
          title: hoveredGoal.title,
        },
        subGoals: hoveredGoal.subGoals.map((subGoal) => ({
          position: subGoal.position,
          title: subGoal.title,
          cycle: subGoal.cycle || 'DAILY',
        })),
      };

      updateGoal(requestData);
      setIsEditing(false);
      setHoveredGoal(null);
    }
  };

  useEffect(() => {
    if (!isEditing && hoveredGoal) {
      handleSave();
    }
  }, [isEditing]);

  const handleMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    const isMovingToHoverContent = relatedTarget?.closest('#hoverContent');
    const isMovingToMandalartContent = relatedTarget?.closest('#mandalartContent');

    if (!isMovingToHoverContent && !isMovingToMandalartContent) {
      setIsHovered(false);
      if (!isEditing) {
        setHoveredGoal(null);
      }
    }
  };

  const handleGoalClick = (position: number, goalId?: number) => {
    if (!mandalartData || (!isEditing && position === 5)) {
      return;
    }

    const goal = goalId
      ? mandalartData.coreGoals.find((g: CoreGoal) => g.id === goalId)
      : mandalartData.coreGoals.find((g: CoreGoal) => g.position === position);

    if (goal) {
      if (isEditing && hoveredGoal) {
        const requestData = {
          coreGoal: {
            position: hoveredGoal.position,
            title: hoveredGoal.title,
          },
          subGoals: hoveredGoal.subGoals.map((subGoal) => ({
            position: subGoal.position,
            title: subGoal.title,
            cycle: subGoal.cycle || 'DAILY',
          })),
        };

        updateGoal(requestData, {
          onSuccess: () => {
            setHoveredGoal(goal);
            setIsHovered(false);
            setIsEditing(true);
          },
        });
        return;
      }

      setHoveredGoal(goal);
      setIsHovered(false);
      setIsEditing(true);
    }
  };

  const renderHoverGuide = () => (
    <div className={styles.hoverGuideContainer}>
      <p className={styles.hoverGuideText}>
        {HOVER_GUIDE_MESSAGES.DESCRIPTION[0]}
        <br />
        {HOVER_GUIDE_MESSAGES.DESCRIPTION[1]}
      </p>
    </div>
  );

  const mainGoalData = mandalartData
    ? {
        title: mandalartData.title,
        subGoals: Array.from({ length: 9 }, (_, i) => i + 1)
          .filter((pos) => pos !== 5) // 중앙(5) 제외
          .map((uiPosition) => {
            // UI position을 실제 데이터의 position으로 변환
            const dataPosition = uiPosition > 5 ? uiPosition - 1 : uiPosition;

            const latestGoal = mandalartData.coreGoals
              .filter((goal: CoreGoal) => goal.position === dataPosition)
              .reduce(
                (latest, current) => {
                  return !latest || current.id > latest.id ? current : latest;
                },
                null as CoreGoal | null,
              );

            if (!latestGoal) {
              return {
                id: 0,
                title: '',
                position: uiPosition, // UI position 유지
                subGoals: [],
              };
            }

            const uniqueSubGoals = Array.from({ length: 8 }, (_, i) => i + 1).map((subPosition) => {
              const latestSubGoal = latestGoal.subGoals
                ?.filter((subGoal) => subGoal.position === subPosition)
                .reduce(
                  (latest, current) => {
                    return !latest || current.id > latest.id ? current : latest;
                  },
                  null as SubGoal | null,
                );

              return (
                latestSubGoal || {
                  id: 0,
                  title: '',
                  position: subPosition,
                }
              );
            });

            return {
              id: latestGoal.id,
              title: latestGoal.title,
              position: uiPosition, // UI position 유지
              subGoals: uniqueSubGoals,
            };
          }),
      }
    : undefined;

  const renderEditContent = () => {
    if (isLoading) {
      return <div className={styles.loadingContainer}>로딩중...</div>;
    }

    const subGoals: SubGoal[] = hoveredGoal?.subGoals || [];

    return (
      <HoverContent
        content={hoveredGoal?.title || ''}
        onChange={(value) => {
          if (hoveredGoal) {
            setHoveredGoal({ ...hoveredGoal, title: value });
          }
        }}
        initialSubGoals={subGoals}
        position={hoveredGoal?.position || 0}
        id={hoveredGoal?.id || 0}
        onSubGoalsChange={(newSubGoals) => {
          if (hoveredGoal) {
            setHoveredGoal({ ...hoveredGoal, subGoals: newSubGoals });
          }
        }}
      />
    );
  };

  const renderTodoMain = () => {
    if (isMandalLoading) {
      return <div className={styles.loadingContainer}>로딩중...</div>;
    }
    return (
      <div className={styles.todoMainContainer}>
        <Mandalart type="TODO_MAIN" data={mainGoalData} />
      </div>
    );
  };

  const renderContent = () => {
    if (!isHovered && !isEditing) {
      return renderHoverGuide();
    }
    if (isEditing) {
      return renderEditContent();
    }
    return renderTodoMain();
  };

  return (
    <div className={styles.contentContainer}>
      <div
        id="mandalartContent"
        onMouseEnter={() => !isEditing && setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => !isEditing && setIsEditing(!isEditing)}
      >
        {isMandalLoading ? (
          <div className={styles.loadingContainer}>로딩중...</div>
        ) : (
          <Mandalart
            type="TODO_EDIT"
            data={mainGoalData}
            onGoalClick={(position, id) => handleGoalClick(position, id)}
          />
        )}
      </div>
      <div id="hoverContent" onMouseLeave={handleMouseLeave}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Content;
