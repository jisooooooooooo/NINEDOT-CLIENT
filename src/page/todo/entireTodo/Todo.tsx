import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FULL_TEXT, TYPING_DURATION } from './constant/typing';
import * as styles from './Todo.css';

import GradientBackground from '@/common/component/Background/GradientBackground';
import GoButton from '@/common/component/GoButton/GoButton';
import Loading from '@/common/component/Loading/Loading';
import { MandalartTextField } from '@/common/component/TextField/mandalart';
import useTypingEffect from '@/common/hook/useTypingEffect';
import { useCreateEntireTodo } from '@/api/domain/entireTodo/hook';
import { PATH } from '@/route';

const Todo = () => {
  const [inputText, setInputText] = useState('');
  const trimmed = inputText.trim();
  const isValid = trimmed.length > 0;
  const displayedText = useTypingEffect(FULL_TEXT, TYPING_DURATION);
  const formRef = useRef<HTMLFormElement>(null);

  const { mutateAsync, isPending } = useCreateEntireTodo();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || isPending) {
      return;
    }

    const title = trimmed;
    try {
      const data = await mutateAsync({ title });
      if (typeof window !== 'undefined') {
        localStorage.setItem('mandalartId', String(data.id));
      }
      navigate(PATH.TODO_UPPER);
    } catch {
      alert('목표 생성에 실패했습니다.');
    }
  };

  if (isPending) {
    return <Loading type="entireTodo" />;
  }

  return (
    <main className={styles.todoContainer}>
      <GradientBackground />
      <h1 className={styles.todoTitle}>{displayedText}</h1>
      <form className={styles.todoInputContainer} onSubmit={handleSubmit} ref={formRef}>
        <MandalartTextField
          variant="bigGoal"
          value={inputText}
          onChange={setInputText}
          disabled={isPending}
          maxLength={20}
          onCommit={(_, reason) => {
            if (reason === 'enter') {
              formRef.current?.requestSubmit();
            }
          }}
        />
        <GoButton disabled={isPending} isActive={isValid && !isPending} type="submit" />
      </form>
    </main>
  );
};

export default Todo;
