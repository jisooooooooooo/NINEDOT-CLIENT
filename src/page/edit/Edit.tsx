import UxWriting from './component/UxWriting/UxWriting';
import * as styles from './Edit.css';
import Content from './component/Content/Content';
import EditBtn from './component/EditBtn/EditBtn';

const Edit = () => {
  return (
    <div className={styles.editContainer}>
      <div className={styles.contentWrapper}>
        <UxWriting />
        <Content />
        <div className={styles.editBtnWrapper}>
          <EditBtn />
        </div>
      </div>
    </div>
  );
};
export default Edit;
