export type CreateSubGoalRequest = {
  title: string;
  position: number;
  cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
};

export type CreateSubGoalResponse = {
  id: number;
};
