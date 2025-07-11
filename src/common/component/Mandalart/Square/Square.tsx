import * as styles from './Square.css';
import type { MandalartType } from '../Mandalart';

export interface SquareProps {
  children: React.ReactNode;
}

export interface CellProps {
  content: string;
  type: MandalartType;
}

export interface SubCellProps extends CellProps {
  isCompleted: boolean;
  onClick: () => void;
}

export const Root = ({ children }: SquareProps) => {
  return <div className={styles.squareContainer}>{children}</div>;
};

export const Main = ({ content, type }: CellProps) => {
  return (
    <div className={styles.squareContainer}>
      <div className={styles.mainCell[type]}>{content}</div>
    </div>
  );
};

export const Sub = ({ content, isCompleted, onClick, type }: SubCellProps) => {
  return (
    <div className={styles.squareContainer}>
      <div className={styles.subCell[type]} data-completed={isCompleted} onClick={onClick}>
        {content}
      </div>
    </div>
  );
};

export const Square = {
  Main,
  Sub,
};
