import { useNavigate } from 'react-router-dom';

import { startButton } from '@/page/home/StartButton/StartButton.css';
import { PATH } from '@/route';

const StartButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(PATH.TODO)} className={startButton}>
      시작하기
    </button>
  );
};

export default StartButton;
