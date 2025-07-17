import { useMutation } from '@tanstack/react-query';

import { postAiRecommendSubGoal } from '../index';
import type {
  AiRecommendSubGoalRequest,
  AiRecommendSubGoalResponse,
} from '../type/aiRecommendSubGoal';

export function useAiRecommendSubGoal(coreGoalId: number) {
  return useMutation<AiRecommendSubGoalResponse, unknown, AiRecommendSubGoalRequest>({
    mutationFn: (body) => {
      if (!coreGoalId) {
        return Promise.reject(new Error('coreGoalId가 유효하지 않습니다'));
      }
      return postAiRecommendSubGoal(coreGoalId, body);
    },
  });
}
