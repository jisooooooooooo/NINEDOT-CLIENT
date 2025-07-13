import * as styles from '@/page/home/StartSection/StartSection.css';
import { CONTENT_MESSAGE, TITLE_MESSAGE } from '@/page/home/constant/startSection';
import StartButton from '@/page/home/StartButton/StartButton';
import VectorLine from '@/assets/image/vector-line.svg';

const StartSection = () => {
  return (
    <section className={styles.startContainer}>
      <div className={styles.gradientBlue} />
      <div className={styles.gradientGreen} />
      <img src={VectorLine} alt="벡터 라인" className={styles.vectorLine} />
      <div className={styles.layoutContainer}>
        <h1 className={styles.titleText} dangerouslySetInnerHTML={{ __html: TITLE_MESSAGE }} />
        <p className={styles.contentText} dangerouslySetInnerHTML={{ __html: CONTENT_MESSAGE }} />
        <StartButton />
      </div>
    </section>
  );
};

export default StartSection;
