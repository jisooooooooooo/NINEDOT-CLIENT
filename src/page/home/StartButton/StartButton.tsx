import type { buttonHandlerType } from '@/page/home/type/buttonHandlerType';
import { startButton } from '@/page/home/StartButton/StartButton.css';

const StartButton = ({ onClick }: buttonHandlerType) => {
  return (
    <button onClick={onClick} className={startButton}>
      시작하기
    </button>
  );
};

export default StartButton;
