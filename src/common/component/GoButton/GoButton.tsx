import { IcBigNext } from '@/assets/svg';
import { goButtonContainer, goIcon } from '@/common/component/GoButton/GoButton.css';

type GoButtonProps = {
  isActive: boolean;
};

const GoButton = ({ isActive = true }: GoButtonProps) => {
  const state = isActive ? 'active' : 'disabled';

  return (
    <button className={goButtonContainer({ state })}>
      <IcBigNext className={goIcon({ state })} />
    </button>
  );
};

export default GoButton;
