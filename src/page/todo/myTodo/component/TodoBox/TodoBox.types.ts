export type TodoModeTypes = 'recommend' | 'todo';

export interface TodoItemTypes {
  id: string;
  content: string;
  completed?: boolean;
  isRecommended?: boolean;
}

export interface TodoBoxProps {
  type: 'recommend' | 'todo';
  items: TodoItemTypes[];
  onItemClick?: (item: TodoItemTypes) => void;
  className?: string;
}

export interface TodoItemProps {
  item: TodoItemTypes;
  type: TodoModeTypes;
  onItemClick?: (item: TodoItemTypes) => void;
}
