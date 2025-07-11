import { useNavigate } from 'react-router-dom';

import * as styles from '@/page/home/Home.css';
import UserModal from '@/common/component/UserModal/UserModal';

const START_MESSAGE = '목표를 이루는 66일의 여정 <br/> 함께 시작해볼까요?';
const CONTINUE_MESSAGE = '작성하던 만다라트가 있어요 <br/> 마저 목표를 세워볼까요?';

const START_BTN_MESSAGE = '만다라트 만들기';
const CONTINUE_BTN_MESSAGE = '이어서 작성하기';

const Home = () => {
  const isWritten = true;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/todo');
  };

  return (
    <main className={styles.homeWrapper}>
      <UserModal />
      <h1
        className={styles.homeText}
        dangerouslySetInnerHTML={{ __html: isWritten ? CONTINUE_MESSAGE : START_MESSAGE }}
      />
      <button className={styles.buttonContainer} onClick={handleClick}>
        {isWritten ? CONTINUE_BTN_MESSAGE : START_BTN_MESSAGE}
      </button>
    </main>
  );
};

export default Home;
