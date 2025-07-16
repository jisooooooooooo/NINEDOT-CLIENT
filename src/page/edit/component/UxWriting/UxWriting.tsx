import * as styles from './UxWriting.css';
import { WRITING_MESSAGES } from '../../constants';

const UxWriting = () => {
  return (
    <div className={styles.uxWritingContainer}>
      <h1 className={styles.uxWritingText}>{WRITING_MESSAGES.TITLE}</h1>
      <p className={styles.uxWritingText}>{WRITING_MESSAGES.DESCRIPTION}</p>
    </div>
  );
};

export default UxWriting;
