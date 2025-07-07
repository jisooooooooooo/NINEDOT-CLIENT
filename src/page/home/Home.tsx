import { useState } from 'react';
import TextField from '@/common/component/TextField';

const SUBGOAL_COUNT = 8;

const Home = () => {
  const [bigGoal, setBigGoal] = useState('');
  const [subGoals, setSubGoals] = useState<string[]>(Array(SUBGOAL_COUNT).fill(''));
  const [todo, setTodo] = useState('');

  const handleSubGoalChange = (idx: number, value: string) => {
    setSubGoals(prev => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
  };

  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 32 }}>
      <h1>홈</h1>
      <div>
        <h2>상위목표(bigGoal)</h2>
        <TextField variant="bigGoal" value={bigGoal} onChange={setBigGoal} />
      </div>
      <div>
        <h2>세부목표(subGoal) 8개</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {subGoals.map((value, idx) => (
            <TextField
              key={idx}
              variant="subGoal"
              value={value}
              onChange={v => handleSubGoalChange(idx, v)}
              placeholder={`${idx + 1}번째 세부 목표를 입력해주세요`}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>할 일(todo)</h2>
        <TextField variant="todo" value={todo} onChange={setTodo} />
      </div>
    </div>
  );
};

export default Home;
