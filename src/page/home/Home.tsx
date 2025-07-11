import { useState } from 'react';
import { DatePicker } from '../todo/myTodo/component/DatePicker';

const MIN_DATE = new Date(2025, 6, 10); // 2025-07-10
const MAX_DATE = new Date(2025, 6, 20); // 2025-07-20

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 15));

  // 이전/다음 일자 가능 여부 계산
  const hasPrev = currentDate > MIN_DATE;
  const hasNext = currentDate < MAX_DATE;

  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  return (
    <div>
      <h1>홈</h1>
      <div style={{ padding: '2rem' }}>
        <h2>DatePicker 테스트</h2>
        <DatePicker
          currentDate={currentDate}
          onDateChange={handleDateChange}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
        <p style={{ marginTop: '1rem', fontSize: '1.4rem' }}>
          현재 선택된 날짜: {currentDate.toLocaleDateString('ko-KR')}
        </p>
        <p>
          <b>hasPrev:</b> {String(hasPrev)} / <b>hasNext:</b> {String(hasNext)}
        </p>
      </div>
    </div>
  );
};

export default Home;
