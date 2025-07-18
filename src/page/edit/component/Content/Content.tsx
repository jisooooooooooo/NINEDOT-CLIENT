import { useEffect, useCallback, useMemo } from 'react';

import * as styles from './Content.css';
import HoverContent from '../HoverContent/HoverContent';
import { HOVER_GUIDE_MESSAGES } from '../../constants';
import { useMandalartHover } from '../../hook/useMandalartHover';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import { useMandalAll } from '@/api/domain/mandalAll/hook';
import { useSubGoals, useUpdateSubGoal } from '@/api/domain/edit/hook';
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

  const { isLoading: isSubGoalsLoading } = useSubGoals(MANDAL_ID, hoveredGoal?.id, undefined, {
    enabled: !!hoveredGoal,
  });
  const { mutate: updateGoal } = useUpdateSubGoal(MANDAL_ID);

  const isLoading = isMandalLoading || (hoveredGoal && isSubGoalsLoading);

  const handleSave = useCallback(() => {
    if (!hoveredGoal) {
      return;
    }

    const validSubGoals = hoveredGoal.subGoals.filter((subGoal) => subGoal.title);

    if (validSubGoals.length > 0) {
      updateGoal({
        coreGoal: {
          position: hoveredGoal.position,
          title: hoveredGoal.title,
        },
        subGoals: validSubGoals.map((subGoal) => ({
          position: subGoal.position,
          title: subGoal.title,
          cycle: subGoal.cycle || 'DAILY',
        })),
      });
    }

    setIsEditing(false);
    setIsHovered(true);
  }, [hoveredGoal, updateGoal, setIsEditing, setIsHovered]);

  useEffect(() => {
    if (!isEditing && hoveredGoal) {
      handleSave();
    }
  }, [isEditing, hoveredGoal, handleSave]);

  const handleGoalClick = useCallback(
    (position: number, goalId?: number) => {
      if (!mandalartData || (!isEditing && position === 5)) {
        return;
      }

      const goal = goalId
        ? mandalartData.coreGoals.find((g) => g.id === goalId)
        : mandalartData.coreGoals.find((g) => g.position === position);

      if (!goal) {
        return;
      }

      if (isEditing && hoveredGoal) {
        const validSubGoals = hoveredGoal.subGoals.filter((subGoal) => subGoal.title);

        if (validSubGoals.length > 0) {
          updateGoal({
            coreGoal: {
              position: hoveredGoal.position,
              title: hoveredGoal.title,
            },
            subGoals: validSubGoals.map((subGoal) => ({
              position: subGoal.position,
              title: subGoal.title,
              cycle: subGoal.cycle || 'DAILY',
            })),
          });
        }

        setHoveredGoal(goal);
        setIsHovered(true);
        setIsEditing(true);
        return;
      }

      setHoveredGoal(goal);
      setIsHovered(true);
      setIsEditing(true);
    },
    [mandalartData, isEditing, hoveredGoal, updateGoal, setHoveredGoal, setIsHovered, setIsEditing],
  );

  const handleTitleChange = useCallback(
    (value: string) => {
      if (hoveredGoal) {
        setHoveredGoal({ ...hoveredGoal, title: value });
      }
    },
    [hoveredGoal, setHoveredGoal],
  );

  const handleSubGoalsChange = useCallback(
    (newSubGoals: SubGoal[]) => {
      if (hoveredGoal) {
        setHoveredGoal({ ...hoveredGoal, subGoals: newSubGoals });
      }
    },
    [hoveredGoal, setHoveredGoal],
  );

  const mainGoalData = useMemo(() => {
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
  }, [mandalartData]);

  const renderHoverGuide = useCallback(
    () => (
      <div className={styles.hoverGuideContainer}>
        <p className={styles.hoverGuideText}>
          {HOVER_GUIDE_MESSAGES.DESCRIPTION[0]}
          <br />
          {HOVER_GUIDE_MESSAGES.DESCRIPTION[1]}
        </p>
      </div>
    ),
    [],
  );

  const renderEditContent = useCallback(() => {
    if (isLoading || !hoveredGoal) {
      return <div className={styles.loadingContainer}>로딩중...</div>;
    }

    return (
      <HoverContent
        content={hoveredGoal.title}
        onChange={handleTitleChange}
        initialSubGoals={hoveredGoal.subGoals}
        position={hoveredGoal.position}
        id={hoveredGoal.id}
        onSubGoalsChange={handleSubGoalsChange}
        mandalartId={MANDAL_ID}
      />
    );
  }, [isLoading, hoveredGoal, handleTitleChange, handleSubGoalsChange]);

  const renderSubGoals = useCallback(() => {
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
  }, [isLoading, hoveredGoal, renderHoverGuide]);

  const renderContent = useCallback(() => {
    if (!isHovered && !isEditing) {
      return renderHoverGuide();
    }
    if (isEditing) {
      return renderEditContent();
    }
    return renderSubGoals();
  }, [isHovered, isEditing, renderHoverGuide, renderEditContent, renderSubGoals]);

  const handleMandalartClick = useCallback(
    (e: React.MouseEvent) => {
      if (!isEditing) {
        const target = e.target as HTMLElement;
        const position = parseInt(target.getAttribute('data-position') || '0');
        const goalId = parseInt(target.getAttribute('data-goal-id') || '0');
        if (position) {
          handleGoalClick(position, goalId || undefined);
        }
      }
    },
    [isEditing, handleGoalClick],
  );

  return (
    <div
      className={styles.contentContainer}
      onMouseEnter={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        id="mandalartContent"
        className={styles.mandalartSection}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleMandalartClick}
      >
        {isMandalLoading ? (
          <div className={styles.loadingContainer}>로딩중...</div>
        ) : (
          <Mandalart type="TODO_EDIT" data={mainGoalData} onGoalClick={handleGoalClick} />
        )}
      </div>
      <div id="hoverContent" className={styles.hoverContentSection} onMouseLeave={handleMouseLeave}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Content;
