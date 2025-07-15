import { startButton } from '@/page/home/StartButton/StartButton.css';
import type { ButtonClickType } from '@/page/home/type/ButtonClickType';

const StartButton = ({ onClick }: ButtonClickType) => {
  return (
    <button onClick={onClick} className={startButton}>
      시작하기
    </button>
  );
};

export default StartButton;
