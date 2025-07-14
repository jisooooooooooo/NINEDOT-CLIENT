import * as styles from './Button.css';

type MandalButtonProps = {
  text: string;
};

const MandalButton = ({ text }: MandalButtonProps) => {
  return <button className={styles.buttonContainer}>{text}</button>;
};

export default MandalButton;
