import * as styles from './HoverContent.css';

import Mandalart from '@/common/component/Mandalart/Mandalart';
import ModifyTextField from '@/common/component/ModifyTextField';
import CycleDropDown from '@/common/component/CycleDropDown/CycleDropDown';

interface EditedContent {
  subGoal: string;
  cycle: 'DAILY' | 'WEEKLY' | 'MONTHLY' | null;
}

interface HoverContentProps {
  isVisible: boolean;
  content: EditedContent;
  onChange: (type: keyof EditedContent, value: EditedContent[keyof EditedContent]) => void;
}

const HoverContent = ({ isVisible, content, onChange }: HoverContentProps) => {
  const handleSubGoalChange = (value: string) => {
    if (value.length <= 96) {
      onChange('subGoal', value);
    }
  };

  const handleCycleChange = (value: 'DAILY' | 'WEEKLY' | 'MONTHLY') => {
    onChange('cycle', value);
  };

  return (
    <div
      className={styles.hoverContentContainer}
      style={{ display: isVisible ? 'flex' : 'none' }}
      onClick={(e) => e.stopPropagation()}
    >
      <Mandalart type="TODO_SUB" />
      <div className={styles.inputContainer}>
        <ModifyTextField
          variant="subGoal"
          value={content.subGoal}
          onChange={handleSubGoalChange}
          placeholder="수정할 목표를 입력해주세요."
        />
        <CycleDropDown />
      </div>
    </div>
  );
};

export default HoverContent;
