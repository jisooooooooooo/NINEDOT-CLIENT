import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import type { LottieRefCurrentProps } from 'lottie-react';

import * as styles from '@/page/home/ScrollSection/ScrollSection.css';
import type { AnimationData, AnimationImporter } from '@/page/home/type/lottieType';
import { resolveAnimation } from '@/page/home/type/lottieType';

type ScrollProps = {
  title: string;
  content: string;
  visible: boolean;
  direction: 'left' | 'right';
  animationImporter: AnimationImporter;
};

const ScrollSection = ({ title, content, visible, direction, animationImporter }: ScrollProps) => {
  const [data, setData] = useState<AnimationData | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    let mounted = true;

    if (visible && !data) {
      animationImporter().then((mod) => {
        if (!mounted) {
          return;
        }
        setData(resolveAnimation(mod));
      });
    }

    if (!visible) {
      lottieRef.current?.pause();
    } else {
      lottieRef.current?.play();
    }

    return () => {
      mounted = false;
    };
  }, [visible, data, animationImporter]);

  return (
    <section className={styles.scrollContainer}>
      <div className={styles.layoutContainer({ direction })}>
        <div>
          <h1 className={styles.titleText}>{title}</h1>
          <p className={styles.contentText}>{content}</p>
        </div>

        {data ? (
          <Lottie
            className={styles.LottieContainer}
            lottieRef={lottieRef}
            animationData={data}
            loop
            autoplay={false}
            rendererSettings={{
              progressiveLoad: true,
              preserveAspectRatio: 'xMidYMid meet',
            }}
          />
        ) : (
          <div className={styles.lottieSkeleton} aria-hidden />
        )}
      </div>
    </section>
  );
};

export default ScrollSection;
