import { Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import * as styles from './Todo.css';

const TYPING_DURATION = 4000;
const fullText = '66일 간 달성할 목표를 입력하고\n만다르트를 시작해보세요!';
const charArray = Array.from(fullText);

const Todo = () => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);
  const textRef = useRef('');

  useEffect(() => {
    const intervalTime = TYPING_DURATION / charArray.length;

    const interval = setInterval(() => {
      if (indexRef.current < charArray.length) {
        textRef.current += charArray[indexRef.current];
        setDisplayedText(textRef.current);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.todoTitle}>
        {displayedText.split('\n').map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </h1>
      <Outlet />
    </div>
  );
};

export default Todo;
