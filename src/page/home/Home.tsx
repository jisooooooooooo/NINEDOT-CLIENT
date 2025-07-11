import { useState } from 'react';

import ModifyTextField from '@/common/component/ModifyTextField';

const Home = () => {
  const [todoValue, setTodoValue] = useState('');
  const [subGoalValue, setSubGoalValue] = useState('');

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
      }}
    >
      <h1>ModifyTextField 테스트</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <h3>할 일 입력 필드</h3>
        <ModifyTextField
          variant="todo"
          value={todoValue}
          onChange={setTodoValue}
          placeholder="할 일을 입력해주세요"
        />
        <p>입력된 값: {todoValue}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <h3>하위 목표 입력 필드</h3>
        <ModifyTextField
          variant="subGoal"
          value={subGoalValue}
          onChange={setSubGoalValue}
          placeholder="세부 목표를 입력해주세요"
        />
        <p>입력된 값: {subGoalValue}</p>
      </div>
    </div>
  );
};

export default Home;
