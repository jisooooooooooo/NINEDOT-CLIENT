import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Todo.css';

import { GradientCircle } from '@/common/component/GradientCircle/GradientCircle';
import GoButton from '@/common/component/GoButton/GoButton';
import { PATH } from '@/route';

const TYPING_DURATION = 3000;
const FULL_TEXT = '66일간 달성할 목표를 입력하고\n만다라트를 시작해보세요!';
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
    let startTime: number | null = null;
    const totalDuration = TYPING_DURATION;
    const totalChars = CHARARRAY.length;
    let isMounted = true;

    const step = (timestamp: number) => {
      if (!isMounted) {
        return;
      }
      if (startTime === null) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const charsToShow = Math.floor(progress * totalChars);

      if (charsToShow > indexRef.current) {
        textRef.current = CHARARRAY.slice(0, charsToShow).join('');
        setDisplayedText(textRef.current);
        indexRef.current = charsToShow;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const rafId = requestAnimationFrame(step);

    return () => {
      isMounted = false;
      cancelAnimationFrame(rafId);
    };
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
      <GradientCircle variant="topRight" />
      <GradientCircle variant="bottomLeft1" />
      <GradientCircle variant="bottomLeft2" />
      <h2 className={styles.todoTitle}>{renderTextWithLineBreaks()}</h2>
      <section className={styles.todoInputContainer}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="이루고 싶은 목표를 작성하세요."
        />
        <Link to={PATH.TODO_UPPER}>
          <GoButton isActive={inputText.length > 0} />
        </Link>
      </section>
    </main>
  );
};

export default Todo;
