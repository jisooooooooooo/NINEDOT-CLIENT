import * as styles from '@/page/home/EndSection/EndSection.css';
import StartButton from '@/page/home/StartButton/StartButton';
import { END_MESSAGE } from '@/page/home/constant/endSection';

const EndSection = () => {
  return (
    <section className={styles.endContainer}>
      <div className={styles.layoutContainer}>
        <h1 className={styles.endText} dangerouslySetInnerHTML={{ __html: END_MESSAGE }} />
        <StartButton />
      </div>
    </section>
  );
};

export default EndSection;
