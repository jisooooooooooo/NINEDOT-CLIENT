import type { RefObject } from 'react';

import * as styles from '@/page/home/EndSection/EndSection.css';
import StartButton from '@/page/home/StartButton/StartButton';
import { END_MESSAGE } from '@/page/home/constant/endSection';
import { fadeSlide } from '@/page/home/style/fadeTransition.css';

type EndSectionProps = {
  fadeInRef: RefObject<HTMLDivElement | null>;
  visible: boolean;
};

const EndSection = ({ fadeInRef, visible }: EndSectionProps) => {
  const fadeState = visible ? 'in' : 'out';

  return (
    <section className={styles.endContainer}>
      <div className={styles.gradientBackground} />
      <div ref={fadeInRef} className={`${styles.fadeContainer} ${fadeSlide({ state: fadeState })}`}>
        <div className={styles.layoutContainer}>
          <h1 className={styles.endText} dangerouslySetInnerHTML={{ __html: END_MESSAGE }} />
          <StartButton />
        </div>
      </div>
    </section>
  );
};

export default EndSection;
