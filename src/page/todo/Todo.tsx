import { useEffect, useState, useRef } from 'react';

import * as styles from './Todo.css';

import GoButton from '@/common/component/GoButton/GoButton';

const TYPING_DURATION = 4000;
const FULL_TEXT = '66일 간 달성할 목표를 입력하고\n만다르트를 시작해보세요!';
const CHARARRAY = Array.from(FULL_TEXT);

const Todo = () => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);
  const textRef = useRef('');

  useEffect(() => {
    const intervalTime = TYPING_DURATION / CHARARRAY.length;

    const interval = setInterval(() => {
      if (indexRef.current < CHARARRAY.length) {
        textRef.current += CHARARRAY[indexRef.current];
        setDisplayedText(textRef.current);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const renderTextWithLineBreaks = () =>
    displayedText.split('\n').map((line, idx) => (
      <span key={idx}>
        {line}
        <br />
      </span>
    ));

  return (
    <div className={styles.todoContainer}>
      <div className={styles.gradientCircleTopRight} />
      <div className={styles.gradientCircleBottomLeft1} />
      <div className={styles.gradientCircleBottomLeft2} />
      <h1 className={styles.todoTitle}>{renderTextWithLineBreaks()}</h1>
      <div className={styles.todoInputContainer}>
        <div>여기 텍스트 필드</div>
        <GoButton isActive={false} />
      </div>
    </div>
  );
};

export default Todo;
