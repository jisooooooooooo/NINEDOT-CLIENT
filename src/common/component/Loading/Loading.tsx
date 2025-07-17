import Lottie from 'lottie-react';

import loadingAnimation from '@/assets/lottie/loading.json';
import * as styles from '@/common/component/Loading/Loading.css';

type LoadingProps = {
  type: 'goal' | 'todo';
};

const Loading = ({ type }: LoadingProps) => {
  const typeText = type === 'goal' ? '목표' : '할 일';

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContainer}>
        <Lottie className={styles.loadingLottie} animationData={loadingAnimation} />
        <p className={styles.loadingText}>AI가 {typeText}을 추천해주고 있어요</p>
      </div>
    </div>
  );
};

export default Loading;
