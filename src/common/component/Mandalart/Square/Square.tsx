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
  position?: number;
  goalId?: number;
}

const MAX_CONTENT_LENGTH = 23;

const getTruncatedContent = (text: string) =>
  text.length > MAX_CONTENT_LENGTH ? `${text.slice(0, MAX_CONTENT_LENGTH)}...` : text;

export const Root = ({ children }: SquareProps) => {
  return <div className={styles.squareContainer}>{children}</div>;
};

export const Main = ({ content, type }: CellProps) => {
  const displayContent = getTruncatedContent(content);

  return (
    <div className={styles.squareContainer}>
      <div className={styles.mainCell[type]}>{displayContent}</div>
    </div>
  );
};

export const Sub = ({
  content,
  isCompleted,
  onClick,
  type,
  disableInteraction,
  position,
  goalId,
}: SubCellProps) => {
  const displayContent = getTruncatedContent(content);

  return (
    <div className={styles.squareContainer}>
      <div
        className={styles.subCell[type]}
        data-completed={!disableInteraction && isCompleted}
        data-disabled={disableInteraction}
        data-position={position}
        data-goal-id={goalId}
        onClick={!disableInteraction ? onClick : undefined}
      >
        {displayContent}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const Square = {
  Main,
  Sub,
};
