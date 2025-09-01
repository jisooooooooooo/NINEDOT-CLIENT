import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FULL_TEXT, TYPING_DURATION, PLACEHOLDER_TEXT } from './constant/typing';
import * as styles from './Todo.css';

import GradientBackground from '@/common/component/Background/GradientBackground';
import GoButton from '@/common/component/GoButton/GoButton';
import Loading from '@/common/component/Loading/Loading';
import TextField from '@/common/component/MandalartTextField/MandalartTextField';
import useTypingEffect from '@/common/hook/useTypingEffect';
import { useCreateOverallTodo } from '@/api/domain/entireTodo/hook';
import { PATH } from '@/route';

const Todo = () => {
  const [inputText, setInputText] = useState('');
  const trimmed = inputText.trim();
  const isValid = trimmed.length > 0;
  const displayedText = useTypingEffect(FULL_TEXT, TYPING_DURATION);

  const { mutate, isPending } = useCreateOverallTodo();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || isPending) {
      return;
    }

    const title = trimmed;
    mutate(
      { title },
      {
        onSuccess: () => navigate(PATH.TODO_UPPER),
      },
    );
  };

  if (isPending) {
    return <Loading type="entireGoal" />;
  }

  return (
    <main className={styles.todoContainer}>
      <GradientBackground />
      <h1 className={styles.todoTitle}>{displayedText}</h1>
      <form className={styles.todoInputContainer} onSubmit={handleSubmit}>
        <TextField
          variant="bigGoal"
          value={inputText}
          onChange={setInputText}
          placeholder={PLACEHOLDER_TEXT}
          disabled={isPending}
          maxLength={20}
        />
        <GoButton disabled={isPending} isActive={isValid && !isPending} type="submit" />
      </form>
    </main>
  );
};

export default Todo;
