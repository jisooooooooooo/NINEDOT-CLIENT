import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FULL_TEXT, TYPING_DURATION, PLACEHOLDER_TEXT } from './constant/constants';
import * as styles from './Todo.css';

import useTypingEffect from '@/common/hook/useTypingEffect';
import GoButton from '@/common/component/GoButton/GoButton';
import GradientBackground from '@/common/component/Background/GradientBackground';
import TextField from '@/common/component/MandalartTextField/MandalartTextField';
import { PATH } from '@/route';
import type { ErrorResponse } from '@/type/api';
import { useCreateOverallTodo } from './hook/useCreateMandalart';

const Todo = () => {
  const [inputText, setInputText] = useState('');
  const displayedText = useTypingEffect(FULL_TEXT, TYPING_DURATION);
  const navigate = useNavigate();

  const { mutate } = useCreateOverallTodo();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleGoNext();
    }
  };

  const handleGoNext = () => {
    if (inputText.trim().length > 0) {
      mutate(
        { title: inputText.trim() },
        {
          onSuccess: () => {
            navigate(PATH.TODO_UPPER);
          },
          onError: (error: ErrorResponse) => {
            console.error('만다라트 생성 실패:', error);
          },
        },
      );
    }
  };

  const renderTextWithLineBreaks = () =>
    displayedText.split('\n').map((line, idx) => (
      <span key={idx}>
        {line}
        <br />
      </span>
    ));

  return (
    <main className={styles.todoContainer}>
      <GradientBackground />
      <h1 className={styles.todoTitle}>{renderTextWithLineBreaks()}</h1>
      <section className={styles.todoInputContainer}>
        <TextField
          variant="bigGoal"
          value={inputText}
          onChange={setInputText}
          onKeyDown={handleKeyDown}
          placeholder={PLACEHOLDER_TEXT}
        />
        <GoButton isActive={inputText.length > 0} onClick={handleGoNext} />
      </section>
    </main>
  );
};

export default Todo;
