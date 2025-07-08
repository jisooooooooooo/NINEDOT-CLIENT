export const JOB_LIST = [
  { id: 1, job: '의사' },
  { id: 2, job: '변호사' },
  { id: 3, job: '개발자' },
  { id: 4, job: '학생' },
  { id: 5, job: '백수' },
  { id: 6, job: '사업가' },
  { id: 7, job: '운동선수' },
  { id: 8, job: '기타 (직접 작성)' },
];

export const PLACE_HOLDER = '직업을 선택하세요' as const;

export type JobType = {
  id: number;
  job: string;
};
export type JobValue = JobType | typeof PLACE_HOLDER;
