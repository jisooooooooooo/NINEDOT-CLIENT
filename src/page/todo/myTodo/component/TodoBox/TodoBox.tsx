import clsx from 'clsx';

import {
  todoBoxContainer,
  todoItemContainer,
  todoText,
  checkboxButton,
  checkboxIcon,
} from './TodoBox.css';
import type { TodoBoxProps, TodoItemTypes } from './TodoBox.types';

import { IcFilledcheckCheck, IcFilledcheckDefault } from '@/assets/svg';

const TodoBox = ({ type, items, onItemClick, className }: TodoBoxProps) => (
  <div className={clsx(todoBoxContainer[type], className)}>
    {items.map((item) => (
      <TodoItem key={item.id} item={item} type={type} onItemClick={onItemClick} />
    ))}
  </div>
);

export type TodoItemProps = {
  item: TodoItemTypes;
  type: 'recommend' | 'todo';
  onItemClick?: (item: TodoItemTypes) => void;
};

const TodoItem = ({ item, type, onItemClick }: TodoItemProps) => {
  const handleClick = () => {
    onItemClick?.(item);
  };
  const CheckIcon = item.isCompleted ? IcFilledcheckCheck : IcFilledcheckDefault;
  return (
    <div className={todoItemContainer[type]}>
      <span className={todoText[type]}>{item.content}</span>
      <button
        className={checkboxButton}
        onClick={handleClick}
        aria-label={item.isCompleted ? '완료 취소하기' : '완료하기'}
      >
        <CheckIcon className={checkboxIcon} />
      </button>
    </div>
  );
};

export { TodoBox };
