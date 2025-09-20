import Lottie from 'lottie-react';

import * as styles from '@/page/home/ScrollSection/ScrollSection.css';

type ScrollProps = {
  title: string;
  content: string;
  index: number;
  animationData: object;
};

const ScrollSection = ({ title, content, index, animationData }: ScrollProps) => {
  const isOdd = index % 2 === 1;
  const direction = isOdd ? 'right' : 'left';

  return (
    <section className={styles.scrollContainer}>
      <div className={styles.layoutContainer({ direction })}>
        <div>
          <h1 className={styles.titleText}>{title}</h1>
          <p className={styles.contentText}>{content}</p>
        </div>
        <Lottie className={styles.LottieContainer} animationData={animationData} loop={true} />
      </div>
    </section>
  );
};

export default ScrollSection;
