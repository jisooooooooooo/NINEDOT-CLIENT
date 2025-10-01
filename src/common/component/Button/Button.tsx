import * as styles from './Button.css';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.buttonContainer} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
