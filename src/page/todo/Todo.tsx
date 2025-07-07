import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Todo.css';

import GoButton from '@/common/component/GoButton/GoButton';

const TYPING_DURATION = 4000;
const FULL_TEXT = '66일 간 달성할 목표를 입력하고\n만다르트를 시작해보세요!';
const CHARARRAY = Array.from(FULL_TEXT);

const Todo = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [inputText, setInputText] = useState('');
  const indexRef = useRef(0);
  const textRef = useRef('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

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
    <main className={styles.todoContainer}>
      <div className={styles.gradientCircle.topRight} />
      <div className={styles.gradientCircle.bottomLeft1} />
      <div className={styles.gradientCircle.bottomLeft2} />
      <h2 className={styles.todoTitle}>{renderTextWithLineBreaks()}</h2>
      <section className={styles.todoInputContainer}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="이루고 싶은 목표를 작성하세요."
        />
        <Link to="/todo/upper">
          <GoButton isActive={inputText.length > 0} />
        </Link>
      </section>
    </main>
  );
};

export default Todo;
