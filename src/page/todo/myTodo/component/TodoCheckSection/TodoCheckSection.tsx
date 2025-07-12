import * as styles from '../../MyTodo.css';

import { CycleChip } from '@/page/todo/myTodo/component/CycleChip';
import { TodoBox } from '@/page/todo/myTodo/component/TodoBox';
import type { CycleType } from '@/page/todo/myTodo/component/CycleChip';
import type { TodoItemTypes } from '@/page/todo/myTodo/component/TodoBox/TodoBox.types';
import Mandalart from '@/common/component/Mandalart/Mandalart';

interface MandalartData {
  mainGoal: string;
  subGoals: Array<{
    title: string;
    position: number;
    cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
  }>;
}

interface TodoCheckSectionProps {
  selectedCycle: CycleType;
  todos: TodoItemTypes[];
  mandalartData: MandalartData;
  onCycleClick: (cycle: CycleType) => void;
  onTodoClick: (item: TodoItemTypes) => void;
  onMandalartClick: () => void;
}

const CYCLE_LIST: CycleType[] = ['매일', '매주', '한 번'];

const CHECK_MESSAGES = {
  TITLE: '작은 성취를 체크하여 오늘을 완성해요',
  SUBTITLE: '만다라트를 클릭해서 목표별 할 일을 확인해보세요.',
};

const TodoCheckSection = ({
  selectedCycle,
  todos,
  mandalartData,
  onCycleClick,
  onTodoClick,
  onMandalartClick,
}: TodoCheckSectionProps) => (
  <div className={styles.checkSection}>
    <div className={styles.checkTextWrapper}>
      <div className={styles.checkTitle}>{CHECK_MESSAGES.TITLE}</div>
      <div className={styles.checkSubtitle}>{CHECK_MESSAGES.SUBTITLE}</div>
    </div>

    <div className={styles.checkMainContainer}>
      <div className={styles.mainContentSection}>
        <div className={styles.mandalartWithTodoSection}>
          <Mandalart
            type="TODO_MAIN"
            mainGoal={mandalartData.mainGoal}
            subGoals={mandalartData.subGoals}
            onGoalClick={onMandalartClick}
          />

          <div className={styles.todoCheckArea}>
            <div className={styles.selectorChipsContainer}>
              {CYCLE_LIST.map((cycle) => {
                const isSelected = selectedCycle === cycle;
                return (
                  <CycleChip
                    key={cycle}
                    type="selector"
                    value={cycle}
                    selected={isSelected}
                    onClick={onCycleClick}
                  />
                );
              })}
            </div>

            <div className={styles.todoCheckContainer}>
              {todos.map((todo) => (
                <div key={todo.id} className={styles.todoCheckLine}>
                  <CycleChip type="display" value={selectedCycle} />
                  <TodoBox type="todo" items={[todo]} onItemClick={onTodoClick} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.customScrollbarContainer}>
          <div className={styles.customScrollbarTrack}>
            <div className={styles.customScrollbarThumb} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { TodoCheckSection };
