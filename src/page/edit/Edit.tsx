import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UxWriting from './component/UxWriting/UxWriting';
import * as styles from './Edit.css';
import Content from './component/Content/Content';
import EditBtn from './component/EditBtn/EditBtn';

import GradientBackground from '@/common/component/Background/GradientBackground';
import { PATH } from '@/route/path';

const Edit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [hasUpperGoals, setHasUpperGoals] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <GradientBackground />
      <div className={styles.editContainer}>
        <div className={styles.contentWrapper}>
          <UxWriting />
          <Content
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onHasUpperGoalsChange={setHasUpperGoals}
          />
          <div className={styles.editBtnWrapper}>
            <EditBtn
              disabled={!hasUpperGoals}
              onClick={async () => {
                setIsEditing(false);
                await new Promise((resolve) => setTimeout(resolve, 100));
                navigate(PATH.MANDAL);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
