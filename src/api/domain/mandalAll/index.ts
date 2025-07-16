import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { MandalartData, CoreGoal, SubGoal } from '@/page/mandal/types/mandal';

interface ApiResponse {
  code: number;
  message: string;
  data: MandalartData;
}

const processSubGoals = (subGoals: SubGoal[]): SubGoal[] => {
  // 1-8 position에 대해 각각 가장 최근의 subGoal만 선택
  const result: SubGoal[] = [];

  for (let position = 1; position <= 8; position++) {
    const positionSubGoals = subGoals.filter((sg) => sg.position === position);
    if (positionSubGoals.length > 0) {
      // id가 가장 큰 것을 선택
      const latest = positionSubGoals.reduce((max, current) =>
        current.id > max.id ? current : max,
      );
      result.push(latest);
    } else {
      // 해당 position의 subGoal이 없으면 빈 것을 추가
      result.push({
        id: 0,
        title: '',
        position,
      });
    }
  }

  return result;
};

const processCoreGoals = (coreGoals: CoreGoal[]): CoreGoal[] => {
  // 1-8 position에 대해 각각 가장 최근의 coreGoal만 선택
  const result: CoreGoal[] = [];

  for (let position = 1; position <= 8; position++) {
    const positionCoreGoals = coreGoals.filter((cg) => cg.position === position);
    if (positionCoreGoals.length > 0) {
      // id가 가장 큰 것을 선택하고 subGoals 처리
      const latest = positionCoreGoals.reduce((max, current) =>
        current.id > max.id ? current : max,
      );
      result.push({
        ...latest,
        subGoals: processSubGoals(latest.subGoals || []),
      });
    } else {
      // 해당 position의 coreGoal이 없으면 빈 것을 추가
      result.push({
        id: 0,
        title: '',
        position,
        subGoals: Array.from({ length: 8 }, (_, i) => ({
          id: 0,
          title: '',
          position: i + 1,
        })),
      });
    }
  }

  return result;
};

export const getMandalAll = async (mandalartId: number) => {
  const response = await axiosInstance.get<ApiResponse>(
    `${END_POINT.MANDALART}/${mandalartId}/board`,
  );

  // API 응답 가공
  const processedData = {
    ...response.data.data,
    coreGoals: processCoreGoals(response.data.data.coreGoals),
  };

  return processedData;
};
