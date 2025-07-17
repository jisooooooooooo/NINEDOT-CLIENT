export type CompletedTodo = {
  id: number;
  title: string;
};

export type Streak = {
  streakDay: number;
  completedTodoCount: number;
  completedTodos: CompletedTodo[];
};
