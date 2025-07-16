export interface SubGoal {
  id: number;
  title: string;
  position: number;
  cycle?: 'DAILY' | 'WEEKLY' | 'ONCE';
}

export interface CoreGoal {
  id: number;
  title: string;
  position: number;
  subGoals: SubGoal[];
}

export interface MainGoal {
  title: string;
  subGoals: (CoreGoal & { subGoals: SubGoal[] })[];
}

export interface MandalartResponse {
  code: number;
  message: string;
  data: {
    title: string;
    coreGoals: CoreGoal[];
  };
}

export interface MandalartData {
  title: string;
  coreGoals: CoreGoal[];
}
