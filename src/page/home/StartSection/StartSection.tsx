import * as styles from '@/page/home/StartSection/StartSection.css';
import { CONTENT_MESSAGE, TITLE_MESSAGE } from '@/page/home/constant/startSection';
import BackgroundSvg from '@/assets/image/vector.svg?react';

const StartSection = () => {
  return (
    <div className={styles.startContainer}>
      <BackgroundSvg />
      <div className={styles.layoutContainer}>
        <h1 className={styles.titleText} dangerouslySetInnerHTML={{ __html: TITLE_MESSAGE }} />
        <p className={styles.contentText} dangerouslySetInnerHTML={{ __html: CONTENT_MESSAGE }} />
        <button className={styles.startButton}>시작하기</button>
      </div>
    </div>
  );
};

export default StartSection;
