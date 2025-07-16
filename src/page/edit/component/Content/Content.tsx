import { useState } from 'react';

import * as styles from './Content.css';
import HoverContent from '../HoverContent/HoverContent';
import { HOVER_GUIDE_MESSAGES } from '../../constants';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import { useMandalAll } from '@/api/domain/mandalAll/hook';
import { useSubGoalIds } from '@/api/domain/edit/hook';
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

  const isLoading = isMandalLoading || (hoveredGoal && isSubGoalsLoading);

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

  const handleGoalClick = (position: number) => {
    if (!mandalartData || isEditing) {
      return;
    }

    const goal = mandalartData.coreGoals.find((g: CoreGoal) => g.position === position);
    if (goal) {
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
      />
    );
  };

  const mainGoalData = mandalartData
    ? {
        title: mandalartData.title,
        subGoals: Array.from({ length: 8 }, (_, i) => i + 1).map((position) => {
          const goalsWithPosition = mandalartData.coreGoals
            .filter((goal: CoreGoal) => goal.position === position)
            .sort((a: CoreGoal, b: CoreGoal) => b.id - a.id);

          const latestGoal = goalsWithPosition[0];
          return latestGoal
            ? {
                id: latestGoal.id,
                title: latestGoal.title,
                position: latestGoal.position,
                subGoals: latestGoal.subGoals || [],
              }
            : {
                id: 0,
                title: '',
                position,
                subGoals: [],
              };
        }),
      }
    : undefined;

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
          <Mandalart type="TODO_EDIT" data={mainGoalData} onGoalClick={handleGoalClick} />
        )}
      </div>
      <div id="hoverContent" onMouseLeave={handleMouseLeave}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Content;
