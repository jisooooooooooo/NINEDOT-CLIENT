import axiosInstance from '@/api/axiosInstance';
import { END_POINT } from '@/api/constant/endPoint';
import type { MandalartData, CoreGoal, SubGoal } from '@/page/mandal/types/mandal';

interface ApiResponse {
  code: number;
  message: string;
  data: MandalartData;
}

const processSubGoals = (subGoals: SubGoal[]): SubGoal[] => {
  const result: SubGoal[] = [];

  for (let position = 1; position <= 8; position++) {
    const positionSubGoals = subGoals.filter((sg) => sg.position === position);
    if (positionSubGoals.length > 0) {
      const latest = positionSubGoals.reduce((max, current) =>
        current.id > max.id ? current : max,
      );
      result.push(latest);
    } else {
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

  const processedData = {
    ...response.data.data,
    coreGoals: processCoreGoals(response.data.data.coreGoals),
  };

  return processedData;
};
