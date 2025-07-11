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

interface TodoItemProps {
  item: TodoItemTypes;
  type: 'recommend' | 'todo';
  onItemClick?: (item: TodoItemTypes) => void;
}

function TodoItem({ item, type, onItemClick }: TodoItemProps): React.JSX.Element {
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
}

function TodoBox({ type, items, onItemClick, className }: Props): React.JSX.Element {
  const containerClass = type === 'recommend' ? recommendContainer : todoContainer;
  return (
    <div className={`${containerClass} ${className || ''}`}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} type={type} onItemClick={onItemClick} />
      ))}
    </div>
  );
}

export default TodoBox;
