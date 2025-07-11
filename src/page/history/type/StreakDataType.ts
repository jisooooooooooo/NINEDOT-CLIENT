export interface CompletedTodo {
  id: number;
  title: string;
}

export interface Streak {
  streakDay: number;
  completedTodoCount: number;
  completedTodos: CompletedTodo[];
}

export interface StreakData {
  streaks: Streak[];
}
