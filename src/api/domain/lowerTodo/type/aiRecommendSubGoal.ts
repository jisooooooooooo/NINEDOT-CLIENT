export interface AiRecommendSubGoalRequest {
  coreGoal: string;
  subGoal: { title: string }[];
}

export interface AiRecommendedItem {
  title: string;
  cycle: string;
}

export interface AiRecommendSubGoalResponse {
  aiRecommendedList: AiRecommendedItem[];
}
