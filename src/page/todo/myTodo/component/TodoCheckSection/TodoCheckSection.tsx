import { useState, useEffect } from 'react';

import * as styles from '../../MyTodo.css';
import type { MandalartData } from '../../constant/mock';

import {
  useGetMandalCoreGoals,
  useGetMandalartSubGoals,
} from '@/api/domain/myTodo/hook/useMyMandal';
import { useCheckSubGoal, useUncheckSubGoal } from '@/api/domain/myTodo/hook/useMyMandal';
import { CycleChip } from '@/page/todo/myTodo/component/CycleChip';
import { TodoBox } from '@/page/todo/myTodo/component/TodoBox';
import type { CycleType } from '@/page/todo/myTodo/component/CycleChip';
import type { TodoItemTypes } from '@/page/todo/myTodo/component/TodoBox/TodoBox.types';
import Mandalart from '@/common/component/Mandalart/Mandalart';

interface TodoCheckSectionProps {
  selectedCycle: CycleType | undefined;
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
  mandalartData,
  onCycleClick,
  onMandalartClick,
  selectedParentId,
}: TodoCheckSectionProps) => {
  const mandalartId = 1;
  const { data: coreGoalsData } = useGetMandalCoreGoals(mandalartId);
  const { data: subGoalResponse } = useGetMandalartSubGoals(1, selectedParentId, selectedCycle);

  const [localSubGoals, setLocalSubGoals] = useState<TodoItemTypes[]>([]);

  useEffect(() => {
    const subGoals: TodoItemTypes[] = (subGoalResponse?.data?.subGoals ?? []).map((goal) => ({
      id: goal.id,
      title: goal.title,
      cycle: goal.cycle,
      isCompleted: goal.isCompleted,
      content: goal.title,
    }));
    setLocalSubGoals(subGoals);
  }, [subGoalResponse]);

  const checkSubGoalMutation = useCheckSubGoal();
  const uncheckSubGoalMutation = useUncheckSubGoal();

  const handleTodoClick = (item: TodoItemTypes) => {
    const today = new Date().toISOString().split('T')[0];
    const originalCompleted = item.isCompleted;

    setLocalSubGoals((prev) =>
      prev.map((goal) =>
        goal.id === item.id ? { ...goal, isCompleted: !goal.isCompleted } : goal,
      ),
    );

    if (originalCompleted === true) {
      uncheckSubGoalMutation.mutate(Number(item.id), {
        onError: () => {
          setLocalSubGoals((prev) =>
            prev.map((goal) =>
              goal.id === item.id ? { ...goal, isCompleted: originalCompleted } : goal,
            ),
          );
        },
      });
    } else {
      checkSubGoalMutation.mutate(
        {
          subGoalId: Number(item.id),
          date: today,
        },
        {
          onError: () => {
            setLocalSubGoals((prev) =>
              prev.map((goal) =>
                goal.id === item.id ? { ...goal, isCompleted: originalCompleted } : goal,
              ),
            );
          },
        },
      );
    }
  };

  return (
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
                position: 4,
                title: mandalartData.title || mandalartData.mainGoal,
                subGoals: Array.isArray(coreGoalsData?.data?.coreGoals)
                  ? coreGoalsData.data.coreGoals.map(
                      (
                        goal: { title: string; position: number; subGoals?: unknown[] },
                        idx: number,
                      ) => ({
                        id: idx < 4 ? idx : idx + 1,
                        title: goal.title,
                        position: goal.position,
                        subGoals: goal.subGoals ?? [],
                      }),
                    )
                  : [],
              }}
              onGoalClick={(position) => {
                const coreGoal = coreGoalsData?.data?.coreGoals.find(
                  (goal) => goal.position === position,
                );
                const parentId = coreGoal?.id;
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
                  localSubGoals.length === 0
                    ? styles.noScrollTodoCheckContainer
                    : styles.todoCheckContainer
                }
              >
                {localSubGoals.length === 0 ? (
                  <div className={styles.emptyTodoBox}>
                    <span className={styles.emptyTodoText}>해당하는 할 일이 없어요</span>
                  </div>
                ) : (
                  localSubGoals.map((todo) => (
                    <div key={todo.id} className={styles.todoCheckLine}>
                      <CycleChip type="display" value={todo.cycle as CycleType} />
                      <TodoBox type="todo" items={[todo]} onItemClick={handleTodoClick} />
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
};

export { TodoCheckSection };
