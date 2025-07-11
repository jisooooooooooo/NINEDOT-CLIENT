import { useState } from 'react';

import { DatePicker } from '../todo/myTodo/component/DatePicker';

import { createDate } from '@/common/util/format';

const MIN_DATE = createDate(2025, 7, 10);
const MAX_DATE = createDate(2025, 7, 20);

const Home = () => {
  const [currentDate, setCurrentDate] = useState(createDate(2025, 7, 15));

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
