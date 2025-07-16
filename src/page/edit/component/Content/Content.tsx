import { useState } from 'react';

import * as styles from './Content.css';
import HoverContent from '../HoverContent/HoverContent';
import { HOVER_GUIDE_MESSAGES } from '../../constants';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import { useMandalAll } from '@/api/domain/mandalAll/hook';
import { useSubGoalIds } from '@/api/domain/edit/hook';
import type { CoreGoal, SubGoal } from '@/page/mandal/types/mandal';

interface ContentProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const MANDAL_ID = 1;

const Content = ({ isEditing, setIsEditing }: ContentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredGoal, setHoveredGoal] = useState<CoreGoal | null>(null);
  const { data: mandalartData } = useMandalAll(MANDAL_ID);
  const { data: subGoalIdsResponse } = useSubGoalIds(hoveredGoal?.id || 0, {
    enabled: !!hoveredGoal,
  });

  const handleMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    const isMovingToHoverContent = relatedTarget?.closest('#hoverContent');
    const isMovingToMandalartContent = relatedTarget?.closest('#mandalartContent');

    if (!isMovingToHoverContent && !isMovingToMandalartContent) {
      setIsHovered(false);
      setHoveredGoal(null);
    }
  };

  const handleGoalClick = (position: number) => {
    if (!mandalartData) {
      return;
    }

    const goal = mandalartData.coreGoals.find((g) => g.position === position);
    if (goal) {
      setHoveredGoal(goal);
      setIsHovered(true);
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
    const subGoals: SubGoal[] =
      subGoalIdsResponse?.data.subGoalIds.map(({ id, position }) => ({
        id,
        position,
        title: '', // 실제 title은 별도의 API 호출로 가져와야 할 것 같습니다
      })) || [];

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
        subGoals: mandalartData.coreGoals.map((goal) => ({
          id: goal.id,
          title: goal.title,
          position: goal.position,
        })),
      }
    : undefined;

  const renderTodoMain = () => (
    <div className={styles.todoMainContainer}>
      <Mandalart type="TODO_MAIN" data={mainGoalData} />
    </div>
  );

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
        onClick={() => setIsEditing(!isEditing)}
      >
        <Mandalart type="TODO_EDIT" data={mainGoalData} onGoalClick={handleGoalClick} />
      </div>
      <div id="hoverContent" onMouseLeave={handleMouseLeave}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Content;
