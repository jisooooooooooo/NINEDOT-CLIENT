import { IcBigNext } from '@/assets/svg';
import { goButtonContainer } from '@/common/component/GoButton/GoButton.css';

type GoButtonProps = {
  isActive: boolean;
};

const GoButton = ({ isActive = true }: GoButtonProps) => {
  return (
    isActive && (
      <button className={goButtonContainer}>
        <IcBigNext />
      </button>
    )
  );
};

export default GoButton;
