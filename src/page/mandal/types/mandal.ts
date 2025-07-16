export interface SubGoal {
  id: number;
  title: string;
  position: number;
}

export interface CoreGoal {
  id: number;
  title: string;
  position: number;
  subGoals: SubGoal[];
}

export interface MandalartData {
  title: string;
  coreGoals: CoreGoal[];
}
