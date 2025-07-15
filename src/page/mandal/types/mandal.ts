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

export interface MandalartResponse {
  title: string;
  coreGoals: CoreGoal[];
}

export interface MandalartData {
  code: number;
  message: string;
  data: MandalartResponse;
}
