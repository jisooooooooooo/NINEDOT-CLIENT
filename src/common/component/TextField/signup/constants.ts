export type SignupVariant = 'name' | 'email' | 'birth' | 'job';

export const DEFAULT_PLACEHOLDER = {
  name: '이름을 입력해주세요',
  email: '',
  birth: '생년월일 8자를 입력해주세요',
  job: '직업을 입력해주세요',
} as const;

export const ERROR_MESSAGES = {
  name: '한글/영문 10자 이하로 입력해주세요',
  birth: '정확한 생년월일 8자를 입력해주세요',
  job: '한글/영문 15자 이하로 입력해주세요',
} as const;
