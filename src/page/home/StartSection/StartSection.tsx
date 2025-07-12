import * as styles from '@/page/home/StartSection/StartSection.css';
import { CONTENT_MESSAGE, TITLE_MESSAGE } from '@/page/home/constant/startSection';
import BackgroundSvg from '@/assets/image/vector.svg?react';
import StartButton from '@/page/home/StartButton/StartButton';

const StartSection = () => {
  return (
    <section className={styles.startContainer}>
      <BackgroundSvg />
      <div className={styles.layoutContainer}>
        <h1 className={styles.titleText} dangerouslySetInnerHTML={{ __html: TITLE_MESSAGE }} />
        <p className={styles.contentText} dangerouslySetInnerHTML={{ __html: CONTENT_MESSAGE }} />
        <StartButton />
      </div>
    </section>
  );
};

export default StartSection;
