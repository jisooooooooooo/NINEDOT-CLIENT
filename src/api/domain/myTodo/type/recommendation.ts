export type RecommendationSubGoal = {
  id: number;
  title: string;
  cycle: string;
};

export type RecommendationResponse = {
  subGoals: RecommendationSubGoal[];
};
