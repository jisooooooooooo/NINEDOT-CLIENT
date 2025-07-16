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

  const renderTitle = content.title.split('<br/>').map((line, index) => (
    <span key={index}>
      {line}
      {index !== content.title.split('<br/>').length - 1 && <br />}
    </span>
  ));

  return (
    <main className={styles.introContainer}>
      <h1 className={styles.introText}>{renderTitle}</h1>
      <button className={styles.buttonContainer} onClick={handleNavigateToTodo}>
        {content.button}
      </button>
    </main>
  );
};

export default Intro;
