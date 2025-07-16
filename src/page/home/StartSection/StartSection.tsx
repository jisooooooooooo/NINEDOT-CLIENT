import * as styles from '@/page/home/StartSection/StartSection.css';
import { CONTENT_MESSAGE, TITLE_MESSAGE } from '@/page/home/constant/startSection';
import StartButton from '@/page/home/StartButton/StartButton';
import VectorLine from '@/assets/image/vector-line.svg';
import { IcUnder } from '@/assets/svg';
import type { buttonHandlerType } from '@/page/home/type/buttonHandlerType';

const StartSection = ({ onClick }: buttonHandlerType) => {
  return (
    <section className={styles.startContainer}>
      <div className={styles.gradientBlue} />
      <div className={styles.gradientGreen} />
      <img src={VectorLine} alt="벡터 라인" className={styles.vectorLine} />
      <div className={styles.layoutContainer}>
        <h1 className={styles.titleText} dangerouslySetInnerHTML={{ __html: TITLE_MESSAGE }} />
        <p className={styles.contentText} dangerouslySetInnerHTML={{ __html: CONTENT_MESSAGE }} />
        <StartButton onClick={onClick} />
        <div className={styles.scrollContainer}>
          <IcUnder className={styles.scrollIcon} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default StartSection;
