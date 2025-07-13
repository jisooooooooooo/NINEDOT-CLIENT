import type { RefObject } from 'react';

import * as styles from '@/page/home/EndSection/EndSection.css';
import StartButton from '@/page/home/StartButton/StartButton';
import { END_MESSAGE } from '@/page/home/constant/endSection';
import { fadeInUp } from '@/page/home/style/fadeIn.css';

type EndSectionProps = {
  fadeInRef: RefObject<HTMLDivElement | null>;
  isVisible: boolean;
};

const EndSection = ({ fadeInRef, isVisible }: EndSectionProps) => {
  return (
    <section className={styles.endContainer}>
      <div className={styles.gradientBackground} />
      <div
        ref={fadeInRef}
        className={`${styles.fadeContainer} ${fadeInUp({ visible: isVisible })}`}
      >
        <div className={styles.layoutContainer}>
          <h1 className={styles.endText} dangerouslySetInnerHTML={{ __html: END_MESSAGE }} />
          <StartButton />
        </div>
      </div>
    </section>
  );
};

export default EndSection;
