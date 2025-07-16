export interface SubGoalId {
  id: number;
  position: number;
}

export interface GetSubGoalIdsRequest {
  coreGoalId: number;
}

export interface GetSubGoalIdsResponse {
  subgoalIds: SubGoalId[];
}
