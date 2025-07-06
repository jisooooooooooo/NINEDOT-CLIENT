import * as styles from './Mandalart.css.ts';

interface MandalartProps {
  children: React.ReactNode;
}

interface CellProps {
  content?: string;
  onClick?: () => void;
  isCompleted?: boolean;
}

const Main = ({ content = '목표를 입력하세요', onClick, isCompleted = false }: CellProps) => {
  return (
    <div
      className={styles.mainCell}
      onClick={onClick}
      role="button"
      tabIndex={0}
      data-completed={isCompleted}
    >
      {content}
    </div>
  );
};

const Sub = ({ content = '세부 목표를 입력하세요', onClick, isCompleted = false }: CellProps) => {
  return (
    <div
      className={styles.subCell}
      onClick={onClick}
      role="button"
      tabIndex={0}
      data-completed={isCompleted}
    >
      {content}
    </div>
  );
};

const Root = ({ children }: MandalartProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export const Mandalart = {
  Root,
  Main,
  Sub,
};

export default Mandalart;
