import * as styles from './MyTodo.css';
import { RecommendSection } from './component/RecommendSection/RecommendSection';
import { TodoCheckSection } from './component/TodoCheckSection/TodoCheckSection';
import { useMyTodo } from './hook/useMyTodo';

import { DatePicker } from '@/page/todo/myTodo/component/DatePicker';
import type { TodoItemTypes } from '@/page/todo/myTodo/component/TodoBox/TodoBox.types';

interface MandalartData {
  mainGoal: string;
  subGoals: Array<{
    title: string;
    position: number;
    cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
  }>;
}

interface MyTodoProps {
  userName?: string;
  mandalartData?: MandalartData;
  selectedDate?: Date;
  initialRecommendTodos?: TodoItemTypes[];
  initialMyTodos?: TodoItemTypes[];
}

const DEFAULT_MANDALART_DATA: MandalartData = {
  mainGoal: '나인도트 1등',
  subGoals: [
    { title: '세부 목표 작성완료', position: 0, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 1, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 2, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 3, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 4, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 5, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 6, cycle: 'DAILY' },
    { title: '세부 목표 작성완료', position: 7, cycle: 'DAILY' },
  ],
};

const MyTodo = ({
  userName = '만다르트',
  mandalartData,
  selectedDate,
  initialRecommendTodos,
  initialMyTodos,
}: MyTodoProps) => {
  const {
    currentDate,
    selectedCycle,
    todos,
    recommendTodos,
    hasPreviousDate,
    hasNextDate,
    handleDateChange,
    handleCycleClick,
    handleRecommendTodoClick,
    handleMyTodoClick,
    handleMandalartClick,
  } = useMyTodo({
    initialDate: selectedDate,
    initialRecommendTodos,
    initialMyTodos,
  });

  return (
    <main className={styles.myTodoContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.datePickerSection}>
          <DatePicker
            currentDate={currentDate}
            onDateChange={handleDateChange}
            hasPrev={hasPreviousDate}
            hasNext={hasNextDate}
          />
        </section>

        <section className={styles.mainContentWrapper}>
          <RecommendSection
            userName={userName}
            recommendTodos={recommendTodos}
            onTodoClick={handleRecommendTodoClick}
          />

          <TodoCheckSection
            selectedCycle={selectedCycle}
            todos={todos}
            mandalartData={mandalartData || DEFAULT_MANDALART_DATA}
            onCycleClick={handleCycleClick}
            onTodoClick={handleMyTodoClick}
            onMandalartClick={handleMandalartClick}
          />
        </section>
      </div>
    </main>
  );
};

export default MyTodo;
