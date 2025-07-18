export interface CoreGoal {
  id: number;
  title: string;
  position: number;
  aiGeneratable: boolean;
}

export interface GetCoreGoalsResponse {
  coreGoals: CoreGoal[];
}
