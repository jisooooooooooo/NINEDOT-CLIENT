import clsx from 'clsx';

import {
  todoBoxContainer,
  todoItemContainer,
  todoText,
  checkboxButton,
  checkboxIcon,
} from './TodoBox.css';

import { IcCheckboxChecked, IcCheckboxDefault } from '@/assets/svg';

interface TodoBoxProps {
  type: 'recommend' | 'todo';
  items: TodoItemProps[];
  onItemClick?: (item: TodoItemProps) => void;
  className?: string;
}

interface TodoItemProps {
  id: string;
  content: string;
  completed?: boolean;
}

const TodoBox = ({ type, items, onItemClick, className }: TodoBoxProps) => (
  <div className={clsx(todoBoxContainer[type], className)}>
    {items.map((item) => (
      <TodoItem key={item.id} item={item} type={type} onItemClick={onItemClick} />
    ))}
  </div>
);

const TodoItem = ({
  item,
  type,
  onItemClick,
}: {
  item: TodoItemProps;
  type: 'recommend' | 'todo';
  onItemClick?: (item: TodoItemProps) => void;
}) => {
  const handleClick = () => {
    onItemClick?.(item);
  };
  return (
    <div className={todoItemContainer[type]}>
      <span className={todoText[type]}>{item.content}</span>
      <button
        className={checkboxButton}
        onClick={handleClick}
        aria-label={item.completed ? '완료 취소하기' : '완료하기'}
      >
        {(() => {
          const CheckIcon = item.completed ? IcCheckboxChecked : IcCheckboxDefault;
          return <CheckIcon className={checkboxIcon} />;
        })()}
      </button>
    </div>
  );
};

export default TodoBox;
