import type { CycleType } from '../../constant/mock';

export type TodoModeTypes = 'recommend' | 'todo';

export interface TodoItemTypes {
  id: string | number;
  content: string;
  completed?: boolean;
  isRecommended?: boolean;
  cycle: CycleType;
  parentId?: number;
  order?: number;
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
