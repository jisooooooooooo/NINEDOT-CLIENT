import { useState } from 'react';

import type { CycleType } from '@/page/todo/myTodo/component/CycleChip';
import type { TodoItemTypes } from '@/page/todo/myTodo/component/TodoBox/TodoBox.types';
import { createDate } from '@/common/util/format';

interface UseMyTodoProps {
  initialDate?: Date;
  initialRecommendTodos?: TodoItemTypes[];
  initialMyTodos?: TodoItemTypes[];
}

const DEFAULT_RECOMMEND_TODOS: TodoItemTypes[] = [
  { id: '1', content: '오늘의 할 일 추천 내용', completed: false },
  { id: '2', content: '오늘의 할 일 추천 내용', completed: false },
  { id: '3', content: '오늘의 할 일 추천 내용', completed: false },
];

const DEFAULT_MY_TODOS: TodoItemTypes[] = [
  { id: '4', content: '할 일 업무 완료 상태', completed: false },
  { id: '5', content: '할 일 업무 완료 상태', completed: true },
  { id: '6', content: '할 일 업무 완료 상태', completed: false },
  { id: '7', content: '할 일 업무 완료 상태', completed: false },
  { id: '8', content: '할 일 업무 완료 상태', completed: false },
  { id: '9', content: '할 일 업무 완료 상태', completed: false },
  { id: '10', content: '할 일 업무 완료 상태', completed: false },
  { id: '11', content: '할 일 업무 완료 상태', completed: false },
  { id: '12', content: '할 일 업무 완료 상태', completed: true },
  { id: '13', content: '할 일 업무 완료 상태', completed: false },
  { id: '14', content: '할 일 업무 완료 상태', completed: false },
  { id: '15', content: '할 일 업무 완료 상태', completed: false },
];

const MIN_DATE = createDate(2025, 1, 1);
const MAX_DATE = createDate(2025, 1, 31);

export const useMyTodo = ({
  initialDate = createDate(2025, 1, 15),
  initialRecommendTodos = DEFAULT_RECOMMEND_TODOS,
  initialMyTodos = DEFAULT_MY_TODOS,
}: UseMyTodoProps = {}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedCycle, setSelectedCycle] = useState<CycleType>('매일');
  const [todos, setTodos] = useState<TodoItemTypes[]>(initialMyTodos);
  const [recommendTodos, setRecommendTodos] = useState<TodoItemTypes[]>(initialRecommendTodos);

  const hasPreviousDate = currentDate > MIN_DATE;
  const hasNextDate = currentDate < MAX_DATE;

  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
    // API 호출하여 해당 날짜의 추천 할 일 가져오기
  };

  const handleCycleClick = (cycle: CycleType) => {
    setSelectedCycle(selectedCycle === cycle ? selectedCycle : cycle);
    // API 호출하여 해당 주기의 할 일 가져오기
  };

  const handleRecommendTodoClick = (item: TodoItemTypes) => {
    setRecommendTodos((prev) =>
      prev.map((todo) => (todo.id === item.id ? { ...todo, completed: !todo.completed } : todo)),
    );
    // API 호출하여 추천 할 일 완료 상태 업데이트
  };

  const handleMyTodoClick = (item: TodoItemTypes) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === item.id ? { ...todo, completed: !todo.completed } : todo)),
    );
    // API 호출하여 할 일 완료 상태 업데이트
  };

  const handleMandalartClick = () => {
    // 만다라트 칸 선택 로직 구현
  };

  return {
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
  };
};
