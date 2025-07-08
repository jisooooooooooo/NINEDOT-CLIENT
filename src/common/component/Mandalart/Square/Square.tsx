import * as styles from './Square.css';
import type { MandalartSize } from '../Mandalart';

export interface SquareProps {
  children: React.ReactNode;
}

export interface CellProps {
  content: string;
  size?: MandalartSize;
}

export interface SubCellProps extends CellProps {
  isCompleted: boolean;
  onClick: () => void;
}

export const Root = ({ children }: SquareProps) => {
  return <div className={styles.squareContainer}>{children}</div>;
};

export const Main = ({ content, size = 'default' }: CellProps) => {
  return (
    <div className={styles.squareContainer}>
      <div className={size === 'small' ? styles.mainCellSmall : styles.mainCellDefault}>
        {content}
      </div>
    </div>
  );
};

export const Sub = ({ content, isCompleted, onClick, size = 'default' }: SubCellProps) => {
  return (
    <div className={styles.squareContainer}>
      <div
        className={size === 'small' ? styles.subCellSmall : styles.subCellDefault}
        data-completed={isCompleted}
        onClick={onClick}
      >
        {content}
      </div>
    </div>
  );
};

export const Square = {
  Main,
  Sub,
};
