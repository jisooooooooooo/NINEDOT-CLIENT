import Lottie from 'lottie-react';

import loadingAnimation from '@/assets/lottie/loading.json';
import * as styles from '@/common/component/Loading/Loading.css';

type LoadingProps = {
  type: 'goal' | 'todo' | 'history';
};

const Loading = ({ type }: LoadingProps) => {
  let message = '';

  switch (type) {
    case 'goal':
      message = 'AI가 목표를 추천해주고 있어요';
      break;
    case 'todo':
      message = 'AI가 할 일을 추천해주고 있어요';
      break;
    case 'history':
      message = '내가 한 일을 불러오고 있어요';
      break;
  }

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContainer}>
        <Lottie className={styles.loadingLottie} animationData={loadingAnimation} />
        <p className={styles.loadingText}>{message}</p>
      </div>
    </div>
  );
};

export default Loading;
