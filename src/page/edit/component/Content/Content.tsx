import { useState } from 'react';

import * as styles from './Content.css';
import HoverContent from '../HoverContent/HoverContent';
import { HOVER_GUIDE_MESSAGES } from '../../constants';

import Mandalart from '@/common/component/Mandalart/Mandalart';

interface ContentProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const Content = ({ isEditing, setIsEditing }: ContentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [subGoal, setSubGoal] = useState('');

  const handleMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    const isMovingToHoverContent = relatedTarget?.closest('#hoverContent');
    const isMovingToMandalartContent = relatedTarget?.closest('#mandalartContent');

    if (!isMovingToHoverContent && !isMovingToMandalartContent) {
      setIsHovered(false);
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

  const renderEditContent = () => <HoverContent content={subGoal} onChange={setSubGoal} />;

  const renderTodoMain = () => (
    <div className={styles.todoMainContainer}>
      <Mandalart type="TODO_MAIN" />
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
        <Mandalart type="TODO_EDIT" />
      </div>
      <div id="hoverContent" onMouseLeave={handleMouseLeave}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Content;
