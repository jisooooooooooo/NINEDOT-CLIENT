import { IcBigNext } from '@/assets/svg';
import { goButtonContainer, goIcon } from '@/common/component/GoButton/GoButton.css';

type GoButtonProps = {
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const GoButton = ({ isActive = true, onClick }: GoButtonProps) => {
  const state = isActive ? 'active' : 'disabled';

  return (
    <button className={goButtonContainer({ state })} onClick={onClick}>
      <IcBigNext className={goIcon({ state })} />
    </button>
  );
};

export default GoButton;
