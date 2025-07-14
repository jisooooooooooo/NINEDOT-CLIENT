import UxWriting from './component/UxWriting/UxWriting';
import * as styles from './Edit.css.ts';
import Content from './component/Content/Content.tsx';

const Edit = () => {
  return (
    <div className={styles.editContainer}>
      <UxWriting />
      <Content />
    </div>
  );
};
export default Edit;
