import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createSubGoal } from '../index';
import type { CreateSubGoalRequest } from '../type/createSubGoal';

export const useCreateSubGoal = (coreGoalId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: CreateSubGoalRequest) => createSubGoal(coreGoalId, request),
    onSuccess: (data) => {
      console.log('하위 목표 생성 성공:', data.id);

      // 하위 목표 ID 리스트 캐시 갱신
      queryClient.invalidateQueries({
        queryKey: ['subGoalIds', coreGoalId],
        exact: true,
        refetchType: 'active',
      });

      // 하위 목표 전체 조회 캐시도 갱신
      queryClient.invalidateQueries({
        queryKey: ['subGoals'],
        refetchType: 'active',
      });
    },
    onError: (error) => {
      console.error('하위 목표 생성 실패:', error);
    },
  });
};
