import { useState } from 'react';
import MandalartTextField from '@/common/component/MandalartTextField';

const Home = () => {
  const [bigGoal, setBigGoal] = useState('');
  const [subGoal, setSubGoal] = useState('');
  const [todo, setTodo] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>상위목표(bigGoal)</div>
        <MandalartTextField
          variant="bigGoal"
          value={bigGoal}
          onChange={setBigGoal}
        />
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>하위목표(subGoal)</div>
        <MandalartTextField
          variant="subGoal"
          value={subGoal}
          onChange={setSubGoal}
        />
      </div>
      <div>
        <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>할 일(todo)</div>
        <MandalartTextField
          variant="todo"
          value={todo}
          onChange={setTodo}
        />
      </div>
    </div>
  );
};

export default Home;
