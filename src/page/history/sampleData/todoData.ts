import type { StreakData } from '@/page/history/type/StreakDataType';

export const todoData: StreakData = {
  streaks: [
    {
      streakDay: 1,
      completedTodoCount: 3,
      completedTodos: [
        { id: 1, title: '하위 목표1' },
        { id: 2, title: '하위 목표2' },
        { id: 3, title: '하위 목표3' },
      ],
    },
    {
      streakDay: 2,
      completedTodoCount: 0,
      completedTodos: [],
    },
  ],
};
