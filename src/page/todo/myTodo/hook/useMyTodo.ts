import { useState, useEffect } from 'react';

import type { CycleType } from '../constant/mock';

import type { TodoItemTypes } from '@/page/todo/myTodo/component/TodoBox/TodoBox.types';
import { createDate, formatDateDot } from '@/common/util/format';
import { useGetRecommendation } from '@/api/domain/myTodo/hook/useGetRecommendation';
import { usePostRecommendation } from '@/api/domain/myTodo/hook/usePostRecommendation';
import { useDeleteRecommendation } from '@/api/domain/myTodo/hook/useDeleteRecommendation';

const MANDALART_ID = 1;

const mockSubGoals = Array.from({ length: 8 * 8 }, (_, i) => {
  const parentId = Math.floor(i / 8) + 1;
  const order = (i % 8) + 1;
  const cycles: CycleType[] = ['DAILY', 'WEEKLY', 'ONCE'];
  const cycle = cycles[i % 3];
  return {
    id: parentId * 100 + order,
    title: `${parentId}-${order} 하위 목표`,
    content: `${parentId}-${order} 하위 목표`,
    cycle,
    parentId,
    order,
    completed: false,
  };
});

interface UseMyTodoProps {
  initialDate?: Date;
  initialRecommendTodos?: TodoItemTypes[];
  initialMyTodos?: TodoItemTypes[];
}

const MIN_DATE = createDate(2025, 1, 1);
const MAX_DATE = createDate(2025, 1, 31);

export const useMyTodo = ({ initialDate = createDate(2025, 7, 18) }: UseMyTodoProps = {}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedCycle, setSelectedCycle] = useState<CycleType>();
  const [selectedParentId, setSelectedParentId] = useState<number>();
  const [todos, setTodos] = useState<TodoItemTypes[]>([]);
  const [recommendTodos, setRecommendTodos] = useState<TodoItemTypes[]>([]);

  const formattedDate = formatDateDot(currentDate);
  const { data: recommendationData, refetch } = useGetRecommendation(MANDALART_ID, formattedDate);
  const { mutate: completeTodo } = usePostRecommendation();
  const { mutate: deleteTodo } = useDeleteRecommendation();

  useEffect(() => {
    if (recommendationData?.subGoals) {
      const formatted = recommendationData.subGoals.map((goal, index) => ({
        id: goal.id.toString(),
        content: goal.title,
        completed: goal.isCompleted,
        cycle: goal.cycle as CycleType,
        parentId: 0,
        order: index,
      }));
      setRecommendTodos(formatted);
    }
  }, [recommendationData]);

  useEffect(() => {
    setTodos(mockSubGoals);
  }, []);

  const hasPreviousDate = currentDate > MIN_DATE;
  const hasNextDate = currentDate < MAX_DATE;

  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  const handleCycleClick = (cycle: CycleType) => {
    setSelectedCycle(selectedCycle === cycle ? undefined : cycle);
  };

  const handleRecommendTodoClick = (item: TodoItemTypes) => {
    const isCompleted = item.completed;

    setRecommendTodos((prev) =>
      prev.map((todo) => (todo.id === item.id ? { ...todo, completed: !todo.completed } : todo)),
    );

    if (isCompleted) {
      deleteTodo(Number(item.id), {
        onSuccess: () => {
          refetch();
        },
      });
    } else {
      completeTodo(Number(item.id), {
        onSuccess: () => {
          refetch();
        },
      });
    }
  };

  const handleMyTodoClick = (item: TodoItemTypes) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === item.id ? { ...todo, completed: !todo.completed } : todo)),
    );
    // TODO: 할 일 완료 상태 API 호출 필요 시 추가
  };

  const handleMandalartClick = () => {
    // TODO: 만다라트 클릭 로직
  };

  const filteredTodos = todos
    .filter((todo) => !selectedCycle || todo.cycle === selectedCycle)
    .filter((todo) => !selectedParentId || todo.parentId === selectedParentId)
    .sort((a, b) => (a.parentId ?? 0) - (b.parentId ?? 0) || (a.order ?? 0) - (b.order ?? 0));

  return {
    currentDate,
    selectedCycle,
    selectedParentId,
    setSelectedParentId,
    todos: filteredTodos,
    recommendTodos,
    hasPreviousDate,
    hasNextDate,
    handleDateChange,
    handleCycleClick,
    handleRecommendTodoClick,
    handleMyTodoClick,
    handleMandalartClick,
  };
};
