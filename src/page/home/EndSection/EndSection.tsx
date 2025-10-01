import type { RefObject } from 'react';

import * as styles from '@/page/home/EndSection/EndSection.css';
import StartButton from '@/page/home/StartButton/StartButton';
import { END_MESSAGE } from '@/page/home/constant/messageConstants';
import { fadeSlide } from '@/page/home/style/fadeTransition.css';
import type { buttonHandlerType } from '@/page/home/type/buttonHandlerType';

type EndSectionProps = {
  fadeInRef: RefObject<HTMLDivElement | null>;
  visible: boolean;
} & buttonHandlerType;

const EndSection = ({ fadeInRef, visible, onClick }: EndSectionProps) => {
  const fadeState = visible ? 'in' : 'out';

  return (
    <section className={styles.endContainer}>
      <div className={styles.gradientBackground} />
      <div ref={fadeInRef} className={`${styles.fadeContainer} ${fadeSlide({ state: fadeState })}`}>
        <div className={styles.layoutContainer}>
          <h1 className={styles.endText}>{END_MESSAGE}</h1>
          <StartButton onClick={onClick} />
        </div>
      </div>
    </section>
  );
};

export default EndSection;
