import { useNavigate } from 'react-router-dom';

import * as styles from '@/page/intro/Intro.css';

const MESSAGE = {
  START: {
    title: '목표를 이루는 66일의 여정 <br/> 함께 시작해볼까요?',
    button: '만다라트 만들기',
  },
  CONTINUE: {
    title: '작성하던 만다라트가 있어요 <br/> 마저 목표를 세워볼까요?',
    button: '이어서 작성하기',
  },
};

const Intro = () => {
  const isWritten = true;
  const navigate = useNavigate();

  const handleNavigateToTodo = () => {
    navigate('/todo');
  };

  const content = isWritten ? MESSAGE.CONTINUE : MESSAGE.START;

  return (
    <main className={styles.introContainer}>
      <h1 className={styles.introText} dangerouslySetInnerHTML={{ __html: content.title }} />
      <button className={styles.buttonContainer} onClick={handleNavigateToTodo}>
        {content.button}
      </button>
    </main>
  );
};

export default Intro;
