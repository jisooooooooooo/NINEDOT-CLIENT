import type { ReactNode } from 'react';

import { signUpContainer } from '@/page/signup/component/SignUpButton/SignUpButton.css';

type SignUpProps = {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
};

const SignUpButton = ({ children, onClick, disabled }: SignUpProps) => {
  const state = disabled ? 'disabled' : 'active';
  return (
    <button
      className={signUpContainer({ state })}
      onClick={onClick}
      disabled={disabled}
      type="submit"
    >
      {children}
    </button>
  );
};

export default SignUpButton;
