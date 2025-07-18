export type CycleType = 'DAILY' | 'WEEKLY' | 'ONCE';

export interface SubGoal {
  id: number;
  title: string;
  cycle: CycleType;
}

export interface GetSubGoalsRequest {
  mandalartId: number;
  coreGoalId?: number;
  cycle?: CycleType;
}

export interface GetSubGoalsResponse {
  subGoals: SubGoal[];
}
