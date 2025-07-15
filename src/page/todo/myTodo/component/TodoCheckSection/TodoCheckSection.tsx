import * as styles from '../../MyTodo.css';
import type { MandalartData } from '../../constant/mock';

import { CycleChip } from '@/page/todo/myTodo/component/CycleChip';
import { TodoBox } from '@/page/todo/myTodo/component/TodoBox';
import type { CycleType } from '@/page/todo/myTodo/component/CycleChip';
import type { TodoItemTypes } from '@/page/todo/myTodo/component/TodoBox/TodoBox.types';
import Mandalart from '@/common/component/Mandalart/Mandalart';

interface TodoCheckSectionProps {
  selectedCycle: CycleType | undefined;
  todos: TodoItemTypes[];
  mandalartData: MandalartData;
  onCycleClick: (cycle: CycleType) => void;
  onTodoClick: (item: TodoItemTypes) => void;
  onMandalartClick: (parentId: number | undefined) => void;
  selectedParentId: number | undefined;
}

const CYCLE_LIST: CycleType[] = ['DAILY', 'WEEKLY', 'ONCE'];

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
  selectedParentId,
}: TodoCheckSectionProps) => (
  <section className={styles.checkSection}>
    <header className={styles.checkTextWrapper}>
      <h2 className={styles.checkTitle}>{CHECK_MESSAGES.TITLE}</h2>
      <p className={styles.checkSubtitle}>{CHECK_MESSAGES.SUBTITLE}</p>
    </header>

    <section className={styles.checkMainContainer}>
      <div className={styles.mainContentSection}>
        <div className={styles.mandalartWithTodoSection}>
          <Mandalart
            type="TODO_MAIN"
            data={{
              id: 0,
              position: 0,
              title: mandalartData.mainGoal,
              subGoals: mandalartData.subGoals.map((sg) => ({ ...sg, id: sg.position })),
            }}
            onGoalClick={(position) => {
              const parentId = position + 1;
              onMandalartClick(selectedParentId === parentId ? undefined : parentId);
            }}
          />

          <div className={styles.todoCheckArea}>
            <div className={styles.selectorChipsContainer}>
              {CYCLE_LIST.map((cycle) => (
                <CycleChip
                  key={cycle}
                  type="selector"
                  value={cycle}
                  selected={selectedCycle === cycle}
                  onClick={onCycleClick}
                />
              ))}
            </div>

            <div
              className={
                todos.length === 0 ? styles.noScrollTodoCheckContainer : styles.todoCheckContainer
              }
            >
              {todos.length === 0 ? (
                <div className={styles.emptyTodoBox}>
                  <span className={styles.emptyTodoText}>해당하는 할 일이 없어요</span>
                </div>
              ) : (
                todos.map((todo) => (
                  <div key={todo.id} className={styles.todoCheckLine}>
                    <CycleChip type="display" value={todo.cycle} />
                    <TodoBox type="todo" items={[todo]} onItemClick={onTodoClick} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export { TodoCheckSection };
