import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FULL_TEXT, TYPING_DURATION } from './constant/constants';
import * as styles from './Todo.css';

import { useCreateOverallTodo } from '@/api/domain/entireTodo/hook/useCreateMandalart';
import useTypingEffect from '@/common/hook/useTypingEffect';
import GoButton from '@/common/component/GoButton/GoButton';
import GradientBackground from '@/common/component/Background/GradientBackground';
import { MandalartTextField } from '@/common/component/TextField/mandalart';
import { PATH } from '@/route';

const Todo = () => {
  const [inputText, setInputText] = useState('');
  const displayedText = useTypingEffect(FULL_TEXT, TYPING_DURATION);
  const navigate = useNavigate();

  const { mutate } = useCreateOverallTodo();

  const handleFieldCommit = (_value: string, reason: 'enter' | 'blur') => {
    if (reason === 'enter') {
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
          onError: () => {
            // 생성 실패 시 처리 로직
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
        <MandalartTextField
          variant="bigGoal"
          value={inputText}
          onChange={setInputText}
          onCommit={handleFieldCommit}
        />
        <GoButton isActive={inputText.length > 0} onClick={handleGoNext} />
      </section>
    </main>
  );
};

export default Todo;
