import * as styles from './Button.css';

type MandalButtonProps = {
  text: string;
  onClick?: () => void;
};

const MandalButton = ({ text, onClick }: MandalButtonProps) => {
  return (
    <button className={styles.buttonContainer} onClick={onClick}>
      {text}
    </button>
  );
};

export default MandalButton;
