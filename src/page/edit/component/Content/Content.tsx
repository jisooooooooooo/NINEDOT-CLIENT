import React, { useState } from 'react';

import * as styles from './Content.css';
import HoverContent from '../HoverContent/HoverContent';
import { HOVER_GUIDE_MESSAGES } from '../../constants';

import Mandalart from '@/common/component/Mandalart/Mandalart';

interface EditedContent {
  subGoal: string;
  cycle: 'DAILY' | 'WEEKLY' | 'MONTHLY';
}

interface ContentProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const Content = ({ isEditing, setIsEditing }: ContentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [editedContent, setEditedContent] = useState<EditedContent>({
    subGoal: '',
    cycle: 'DAILY',
  });

  const handleContentChange = (
    type: keyof EditedContent,
    value: EditedContent[keyof EditedContent],
  ) => {
    setEditedContent((prev: EditedContent) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className={styles.contentContainer}>
      <div
        id="mandalartContent"
        onMouseEnter={() => !isEditing && setIsHovered(true)}
        onMouseLeave={(e) => {
          const relatedTarget = e.relatedTarget as HTMLElement;
          if (!relatedTarget?.closest('#hoverContent')) {
            setIsHovered(false);
          }
        }}
        onClick={() => setIsEditing(!isEditing)}
      >
        <Mandalart type="TODO_EDIT" />
      </div>
      <div
        id="hoverContent"
        onMouseLeave={(e) => {
          const relatedTarget = e.relatedTarget as HTMLElement;
          if (!relatedTarget?.closest('#mandalartContent')) {
            setIsHovered(false);
          }
        }}
      >
        {!isHovered && !isEditing ? (
          <div className={styles.hoverGuideContainer}>
            <p className={styles.hoverGuideText}>
              {HOVER_GUIDE_MESSAGES.DESCRIPTION[0]}
              <br />
              {HOVER_GUIDE_MESSAGES.DESCRIPTION[1]}
            </p>
          </div>
        ) : isEditing ? (
          <HoverContent isVisible={true} content={editedContent} onChange={handleContentChange} />
        ) : (
          <div className={styles.todoMainContainer}>
            <Mandalart type="TODO_MAIN" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
