import { useState, useEffect } from 'react';

import type { CycleType } from '../constant/mock';
import { DEFAULT_RECOMMEND_TODOS } from '../constant/mock';

import type { TodoItemTypes } from '@/page/todo/myTodo/component/TodoBox/TodoBox.types';
import { createDate } from '@/common/util/format';

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

export const useMyTodo = ({
  initialDate = createDate(2025, 1, 15),
  initialRecommendTodos = DEFAULT_RECOMMEND_TODOS,
}: UseMyTodoProps = {}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedCycle, setSelectedCycle] = useState<CycleType | undefined>(undefined);
  const [selectedParentId, setSelectedParentId] = useState<number | undefined>(undefined);
  const [todos, setTodos] = useState<TodoItemTypes[]>([]);
  const [recommendTodos, setRecommendTodos] = useState(initialRecommendTodos);

  useEffect(() => {
    setTodos(mockSubGoals);
  }, []);

  const hasPreviousDate = currentDate > MIN_DATE;
  const hasNextDate = currentDate < MAX_DATE;

  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
    // API 호출 -> 해당 날짜의 추천 할 일 가져오기
  };

  const handleCycleClick = (cycle: CycleType) => {
    setSelectedCycle(selectedCycle === cycle ? undefined : cycle);
  };

  const handleRecommendTodoClick = (item: TodoItemTypes) => {
    setRecommendTodos((prev) =>
      prev.map((todo) => (todo.id === item.id ? { ...todo, completed: !todo.completed } : todo)),
    );
    // API 호출 -> 추천 할 일 완료 상태 업데이트
  };

  const handleMyTodoClick = (item: TodoItemTypes) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === item.id ? { ...todo, completed: !todo.completed } : todo)),
    );
    // API 호출 -> 할 일 완료 상태 업데이트
  };

  const handleMandalartClick = () => {
    // 만다라트 칸 선택 로직 구현
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
