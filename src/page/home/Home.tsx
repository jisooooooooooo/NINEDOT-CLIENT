import React, { useState } from 'react';
import { TodoBox } from '../todo/myTodo/component';
import type { TodoItemTypes } from '../todo/myTodo/component/TodoBox.types';

const Home = () => {
  const [recommendItems, setRecommendItems] = useState<TodoItemTypes[]>([
    {
      id: '1',
      content: '오늘의 할 일 추천 내용',
      completed: false,
    },
  ]);

  const [todoItems, setTodoItems] = useState<TodoItemTypes[]>([
    {
      id: '1',
      content: '할 일 입력 완료 상태',
      completed: false,
    },
  ]);

  const handleRecommendClick = (item: TodoItemTypes) => {
    setRecommendItems(prevItems =>
      prevItems.map(prevItem =>
        prevItem.id === item.id
          ? { ...prevItem, completed: !prevItem.completed }
          : prevItem
      )
    );
  };

  const handleTodoClick = (item: TodoItemTypes) => {
    setTodoItems(prevItems =>
      prevItems.map(prevItem =>
        prevItem.id === item.id
          ? { ...prevItem, completed: !prevItem.completed }
          : prevItem
      )
    );
  };

  return (
    <div style={{ background: '#121212', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ marginBottom: '2.4rem' }}>
        <TodoBox
          type="recommend"
          items={recommendItems}
          onItemClick={handleRecommendClick}
        />
      </div>
      <div>
        <TodoBox
          type="todo"
          items={todoItems}
          onItemClick={handleTodoClick}
        />
      </div>
    </div>
  );
};

export default Home;
