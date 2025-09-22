import { useNavigate } from 'react-router-dom';

import * as styles from './NotFound.css';

import { PATH } from '@/route';

const TEXT = {
  title: ['찾으시는 페이지가 없어요', '홈으로 돌아가 볼까요?'],
  button: '홈으로 가기',
} as const;

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(PATH.ROOT);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        {TEXT.title.map((line, index) => (
          <span key={`${line}-${index}`}>
            {line}
            {index !== TEXT.title.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <button type="button" className={styles.button} onClick={handleGoHome}>
        {TEXT.button}
      </button>
    </main>
  );
};

export default NotFound;
