import { buttonContainer } from '@/common/component/MandalButton/MandalButton.css';

const BUTTON_TEXT = '내 만다라트에 넣기';

const MandalButton = () => {
  return <button className={buttonContainer}>{BUTTON_TEXT}</button>;
};

export default MandalButton;
