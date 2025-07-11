import { useState } from 'react';

import { CycleChip } from '../todo/myTodo/component/CycleChip';
import type { CycleType } from '../todo/myTodo/component/CycleChip';

const CYCLE_LIST: CycleType[] = ['매일', '매주', '한번'];

const Home = () => {
  const [selectedCycle, setSelectedCycle] = useState<CycleType>('매일');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>홈</h1>
      <h2>CycleChip 테스트</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {CYCLE_LIST.map((cycle) => (
          <CycleChip
            key={cycle}
            type="selector"
            value={cycle}
            selected={selectedCycle === cycle}
            onClick={setSelectedCycle}
          />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <CycleChip type="display" value={selectedCycle} />
      </div>
    </div>
  );
};

export default Home;
