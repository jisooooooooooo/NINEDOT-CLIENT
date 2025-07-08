export const PLACE_HOLDER = '직업을 선택하세요' as const;

export const JOB_TYPE = [
  '의사',
  '변호사',
  '개발자',
  '학생',
  '백수',
  '사업가',
  '운동선수',
  '기타 (직접 작성)',
] as const;

export type JobType = (typeof JOB_TYPE)[number];
export type JobValue = JobType | typeof PLACE_HOLDER;
