import { useLocation, useNavigate } from 'react-router-dom';

import * as styles from '@/page/intro/Intro.css';
import { PATH } from '@/route';
import { useLoginModal } from '@/common/hook/useLoginModal';

type PageStateType = 'MANDALART' | 'CORE_GOAL' | 'SUB_GOAL';

const ROUTE_BY_STATE: Record<PageStateType, string> = {
  MANDALART: PATH.TODO,
  CORE_GOAL: PATH.TODO_UPPER,
  SUB_GOAL: PATH.TODO_LOWER,
};

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
  useLoginModal();

  const navigate = useNavigate();
  const location = useLocation();

  const pageState = (location.state as { pageState?: PageStateType })?.pageState;
  const isStart = pageState === 'MANDALART';

  const content = isStart ? MESSAGE.START : MESSAGE.CONTINUE;

  const handleGoTodo = () => {
    if (!pageState) {
      return;
    }
    navigate(ROUTE_BY_STATE[pageState]);
  };

  const renderTitle = content.title.split('<br/>').map((line, index) => (
    <span key={index}>
      {line}
      {index !== content.title.split('<br/>').length - 1 && <br />}
    </span>
  ));

  return (
    <main className={styles.introContainer}>
      <h1 className={styles.introText}>{renderTitle}</h1>
      <button className={styles.buttonContainer} onClick={handleGoTodo}>
        {content.button}
      </button>
    </main>
  );
};

export default Intro;
