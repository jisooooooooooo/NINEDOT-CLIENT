import { useState, useEffect } from 'react';

import * as styles from './Content.css';
import HoverContent from '../HoverContent/HoverContent';
import { HOVER_GUIDE_MESSAGES } from '../../constants';
import { useMandalartHover } from '../../hook/useMandalartHover';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import { useMandalAll } from '@/api/domain/mandalAll/hook';
import { useSubGoalIds, useUpdateCoreGoal } from '@/api/domain/edit/hook';
import type { CoreGoal, SubGoal } from '@/page/mandal/types/mandal';

interface ContentProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const MANDAL_ID = 1;

const Content = ({ isEditing, setIsEditing }: ContentProps) => {
  const { data: mandalartData, isLoading: isMandalLoading } = useMandalAll(MANDAL_ID);
  const {
    isHovered,
    hoveredGoal,
    handleMouseMove,
    handleMouseLeave,
    setHoveredGoal,
    setIsHovered,
  } = useMandalartHover({
    isEditing,
    mandalartData,
  });

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
            setIsHovered(true);
            setIsEditing(true);
          },
        });
        return;
      }

      setHoveredGoal(goal);
      setIsHovered(true);
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

  const mainGoalData = () => {
    if (!mandalartData) {
      return undefined;
    }

    return {
      title: mandalartData.title,
      subGoals: Array.from({ length: 9 }, (_, i) => i + 1)
        .filter((pos) => pos !== 5)
        .map((uiPosition) => {
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
              position: uiPosition,
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
            position: uiPosition,
            subGoals: uniqueSubGoals,
          };
        }),
    };
  };

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

  const renderSubGoals = () => {
    if (isLoading) {
      return <div className={styles.loadingContainer}>로딩중...</div>;
    }

    if (!hoveredGoal) {
      return renderHoverGuide();
    }

    return (
      <div className={styles.todoMainContainer}>
        <Mandalart type="TODO_MAIN" data={hoveredGoal} />
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
    return renderSubGoals();
  };

  return (
    <div className={styles.contentContainer}>
      <div
        id="mandalartContent"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          if (!isEditing) {
            const target = e.target as HTMLElement;
            const position = parseInt(target.getAttribute('data-position') || '0');
            const goalId = parseInt(target.getAttribute('data-goal-id') || '0');
            if (position) {
              handleGoalClick(position, goalId || undefined);
            }
          }
        }}
      >
        {isMandalLoading ? (
          <div className={styles.loadingContainer}>로딩중...</div>
        ) : (
          <Mandalart type="TODO_EDIT" data={mainGoalData()} onGoalClick={handleGoalClick} />
        )}
      </div>
      <div id="hoverContent" onMouseLeave={handleMouseLeave}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Content;
