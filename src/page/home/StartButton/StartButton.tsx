import { startButton } from '@/page/home/StartButton/StartButton.css';
import type { buttonHandlerType } from '@/page/home/type/buttonHandlerType';

const StartButton = ({ onClick }: buttonHandlerType) => {
  return (
    <button onClick={onClick} className={startButton}>
      시작하기
    </button>
  );
};

export default StartButton;
