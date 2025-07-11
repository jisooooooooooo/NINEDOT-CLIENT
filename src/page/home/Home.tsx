import { useState } from 'react';

import { DatePicker } from '../todo/myTodo/component/DatePicker';

// month는 0부터 시작해서 6 = 7월입니다 !!
const MIN_DATE = new Date(2025, 6, 10);
const MAX_DATE = new Date(2025, 6, 20);

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 15));

  const hasPrev = currentDate > MIN_DATE;
  const hasNext = currentDate < MAX_DATE;

  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  return (
    <div>
      <h1>홈</h1>
      <div style={{ padding: '2rem' }}>
        <DatePicker
          currentDate={currentDate}
          onDateChange={handleDateChange}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      </div>
    </div>
  );
};

export default Home;
