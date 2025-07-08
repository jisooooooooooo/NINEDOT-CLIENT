import * as styles from './UpperTodo.css';

import { GradientCircle } from '@/common/component/GradientCircle/GradientCircle';

const UpperTodo = () => {
  return (
    <main className={styles.upperTodoContainer}>
      <GradientCircle variant="topRight" />
      <GradientCircle variant="bottomLeft1" />
      <GradientCircle variant="bottomLeft2" />
      <div className={styles.upperTodoBox} />
    </main>
  );
};

export default UpperTodo;
