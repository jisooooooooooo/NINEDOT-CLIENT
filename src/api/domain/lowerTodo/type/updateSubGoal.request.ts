export interface UpdateSubGoalRequest {
  title: string;
  cycle: 'DAILY' | 'WEEKLY' | 'ONCE';
}
