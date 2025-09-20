import * as styles from '@/page/todo/myTodo/MyTodo.css';

import { TodoBox } from '@/page/todo/myTodo/component/TodoBox';
import type { TodoItemTypes } from '@/page/todo/myTodo/component/TodoBox/TodoBox.types';
import { useAuthStore } from '@/store/useAuthStore';

interface RecommendSectionProps {
  recommendTodos: TodoItemTypes[];
  onTodoClick: (item: TodoItemTypes) => void;
}

const RECOMMEND_MESSAGES = {
  TITLE: '님을 위한 오늘의 맞춤 추천이에요',
  SUBTITLE: '목표는 실천할 때 가까워져요. 지금 도전해보세요!',
};

const RecommendSection = ({ recommendTodos, onTodoClick }: RecommendSectionProps) => {
  const user = useAuthStore((state) => state.user);
  const displayedTodos = recommendTodos.slice(0, 3);

  return (
    <div className={styles.recommendSection}>
      <div className={styles.recommendTextWrapper}>
        <div className={styles.recommendTitle}>{`${user.name}${RECOMMEND_MESSAGES.TITLE}`}</div>
        <div className={styles.recommendSubtitle}>{RECOMMEND_MESSAGES.SUBTITLE}</div>
      </div>

      <div className={styles.recommendBoxWrapper}>
        {displayedTodos.map((todo) => (
          <TodoBox key={todo.id} type="recommend" items={[todo]} onItemClick={onTodoClick} />
        ))}
      </div>
    </div>
  );
};

export { RecommendSection };
