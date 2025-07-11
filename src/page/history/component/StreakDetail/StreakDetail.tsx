import * as styles from '@/page/history/component/StreakDetail/StreakDetail.css';
import type { Streak } from '@/page/history/type/StreakDataType';

const DEFAULT_MESSAGE = '원하는 날의 점을 클릭하고 <br/> 그날 내가 한 일을 확인해보세요!';

type StreakDetailProps = {
  detailData?: Streak | null;
};

const StreakDetail = ({ detailData }: StreakDetailProps) => {
  const state = !detailData ? 'empty' : 'filled';

  if (!detailData) {
    return (
      <div className={styles.detailContainer({ state })}>
        <p className={styles.defaultText} dangerouslySetInnerHTML={{ __html: DEFAULT_MESSAGE }} />
      </div>
    );
  }

  return (
    <div className={styles.detailContainer({ state })}>
      <div>
        <strong className={styles.dayText}>{detailData.streakDay}일째</strong>
        <span className={styles.todoCount}>{detailData.completedTodoCount}개</span>
      </div>
      <ul className={styles.todoList}>
        {detailData.completedTodos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default StreakDetail;
