import * as styles from './Mandalart.css.ts';

interface MandalartProps {
  content?: string;
  onClick?: () => void;
}

const Mandalart = ({ content = '목표를 입력하세요', onClick }: MandalartProps) => {
  return (
    <div className={styles.cell} onClick={onClick} role="button" tabIndex={0}>
      {content}
    </div>
  );
};

export default Mandalart;
