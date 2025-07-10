import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Todo.css';
import { FULL_TEXT, TYPING_DURATION } from './constant/constants';

import useTypingEffect from '@/common/hook/useTypingEffect';
import { GradientCircle } from '@/common/component/GradientCircle/GradientCircle';
import GoButton from '@/common/component/GoButton/GoButton';
import { PATH } from '@/route';
import TextField from '@/common/component/MandalartTextField/MandalartTextField';

const Todo = () => {
  const [inputText, setInputText] = useState('');
  const displayedText = useTypingEffect(FULL_TEXT, TYPING_DURATION);

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
        <TextField
          variant="bigGoal"
          value={inputText}
          onChange={setInputText}
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
