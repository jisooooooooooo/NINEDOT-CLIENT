import React from 'react';

import type { TodoBoxProps, TodoItemTypes } from './TodoBox.types';
import {
  recommendContainer,
  recommendItem,
  recommendText,
  todoContainer,
  todoItem,
  todoText,
  checkboxButton,
  checkboxIcon,
} from './TodoBox.css';

import { IcCheckboxChecked, IcCheckboxDefault } from '@/assets/svg';

interface Props extends TodoBoxProps {
  type: 'recommend' | 'todo';
}

const TodoItem: React.FC<{
  item: TodoItemTypes;
  type: 'recommend' | 'todo';
  onItemClick?: (item: TodoItemTypes) => void;
}> = ({ item, type, onItemClick }) => {
  const handleClick = () => {
    onItemClick?.(item);
  };
  return (
    <div className={type === 'recommend' ? recommendItem : todoItem}>
      <span className={type === 'recommend' ? recommendText : todoText}>{item.content}</span>
      <button
        className={checkboxButton}
        onClick={handleClick}
        type="button"
        aria-label={item.completed ? '완료 취소하기' : '완료하기'}
      >
        {item.completed ? (
          <IcCheckboxChecked className={checkboxIcon} />
        ) : (
          <IcCheckboxDefault className={checkboxIcon} />
        )}
      </button>
    </div>
  );
};

const TodoBox: React.FC<Props> = ({ type, items, onItemClick, className }) => {
  const containerClass = type === 'recommend' ? recommendContainer : todoContainer;
  return (
    <div className={`${containerClass} ${className || ''}`}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} type={type} onItemClick={onItemClick} />
      ))}
    </div>
  );
};

export default TodoBox;
