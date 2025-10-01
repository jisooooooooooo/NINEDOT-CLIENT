import { IcBigNext } from '@/assets/svg';
import { goButtonContainer, goIcon } from '@/common/component/GoButton/GoButton.css';

type GoButtonProps = {
  isActive: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
};

const GoButton = ({
  isActive = true,
  disabled = false,
  onClick,
  type = 'button',
}: GoButtonProps) => {
  const state = isActive && !disabled ? 'active' : 'disabled';
  const isDisabled = disabled || !isActive;

  return (
    <button
      className={goButtonContainer({ state })}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
    >
      <IcBigNext className={goIcon({ state })} />
    </button>
  );
};

export default GoButton;
