import { useState } from 'react';

import UxWriting from './component/UxWriting/UxWriting';
import * as styles from './Edit.css';
import Content from './component/Content/Content';
import EditBtn from './component/EditBtn/EditBtn';

import GradientBackground from '@/common/component/Background/GradientBackground';

const Edit = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <GradientBackground />
      <div className={styles.editContainer}>
        <div className={styles.contentWrapper}>
          <UxWriting />
          <Content isEditing={isEditing} setIsEditing={setIsEditing} />
          <div className={styles.editBtnWrapper}>
            <EditBtn onClick={() => setIsEditing(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
