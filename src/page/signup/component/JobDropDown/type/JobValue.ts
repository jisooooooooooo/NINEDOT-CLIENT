import type { JobItem } from '@/page/signup/component/JobDropDown/type/JobItem';

export const PLACE_HOLDER = '직업을 선택하세요' as const;

export type JobValue = JobItem | typeof PLACE_HOLDER;
