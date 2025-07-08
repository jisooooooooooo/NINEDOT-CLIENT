import * as styles from './Square.css.ts';

export interface SquareProps {
  children: React.ReactNode;
}

export interface CellProps {
  content?: string;
  onClick?: () => void;
  isCompleted?: boolean;
}

export const Root = ({ children }: SquareProps) => {
  return <div className={styles.squareContainer}>{children}</div>;
};

export const Main = ({ content }: CellProps) => {
  return <div className={styles.mainCell}>{content}</div>;
};

export const Sub = ({ content, onClick, isCompleted }: CellProps) => {
  return (
    <div className={styles.subCell} onClick={onClick} data-completed={isCompleted}>
      {content}
    </div>
  );
};
