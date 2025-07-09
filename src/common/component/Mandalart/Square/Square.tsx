import * as styles from './Square.css';
import type { MandalartSize } from '../Mandalart';

export interface SquareProps {
  children: React.ReactNode;
}

export interface CellProps {
  content: string;
  size: MandalartSize;
}

export interface SubCellProps extends CellProps {
  isCompleted: boolean;
  onClick: () => void;
}

export const Root = ({ children }: SquareProps) => {
  return <div className={styles.squareContainer}>{children}</div>;
};

export const Main = ({ content, size }: CellProps) => {
  return (
    <div className={styles.squareContainer}>
      <div className={styles.mainCell[size]}>{content}</div>
    </div>
  );
};

export const Sub = ({ content, isCompleted, onClick, size }: SubCellProps) => {
  return (
    <div className={styles.squareContainer}>
      <div className={styles.subCell[size]} data-completed={isCompleted} onClick={onClick}>
        {content}
      </div>
    </div>
  );
};

export const Square = {
  Main,
  Sub,
};
