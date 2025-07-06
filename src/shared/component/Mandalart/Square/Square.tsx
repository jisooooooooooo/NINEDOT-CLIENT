import { useState } from 'react';
import * as styles from './Square.css.ts';

interface SquareProps {
  children: React.ReactNode;
}

interface CellProps {
  content?: string;
  onClick?: () => void;
  isCompleted?: boolean;
}

const Main = ({ content = '목표를 입력하세요', onClick }: Omit<CellProps, 'isCompleted'>) => {
  return (
    <div className={styles.mainCell} onClick={onClick} role="button" tabIndex={0}>
      {content}
    </div>
  );
};

const Sub = ({ content = '세부 목표를 입력하세요', onClick }: Omit<CellProps, 'isCompleted'>) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsCompleted((prev) => !prev);
    onClick?.();
  };

  return (
    <div
      className={styles.subCell}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      data-completed={isCompleted}
    >
      {content}
    </div>
  );
};

const Root = ({ children }: SquareProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export const Square = {
  Root,
  Main,
  Sub,
};

export default Square;
