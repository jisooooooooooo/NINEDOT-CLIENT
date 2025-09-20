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
      <div className={styles.vectorLine} aria-hidden />
      <div className={styles.layoutContainer}>
        <h1 className={styles.titleText}>{TITLE_MESSAGE}</h1>
        <p className={styles.contentText}>{CONTENT_MESSAGE}</p>
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
