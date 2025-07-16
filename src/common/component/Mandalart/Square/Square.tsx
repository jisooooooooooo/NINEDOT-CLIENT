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
  disableInteraction?: boolean;
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

export const Sub = ({ content, isCompleted, onClick, type, disableInteraction }: SubCellProps) => {
  return (
    <div className={styles.squareContainer}>
      <div
        className={styles.subCell[type]}
        data-completed={!disableInteraction && isCompleted}
        data-disabled={disableInteraction}
        onClick={!disableInteraction ? onClick : undefined}
      >
        {content}
      </div>
    </div>
  );
};
