export const NAME_MAX_LENGTH = 10;
export const JOB_MAX_LENGTH = 15;
export const BIRTH_REGEX = /^\d{4}-\d{2}-\d{2}$/;
export const NAME_REGEX = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\s]*$/;
export const JOB_REGEX = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\s]*$/;
export const ERROR_MESSAGES = {
  name: '한글/영문 10자 이하로 입력해주세요',
  birth: '정확한 생년월일을 입력해주세요',
  job: '한글/영문 15자 이하로 입력해주세요',
} as const;

export function validateField(type: 'name' | 'birth' | 'job', value: string): string | undefined {
  if (type === 'name') {
    if (!NAME_REGEX.test(value) || value.length > NAME_MAX_LENGTH) {
      return ERROR_MESSAGES.name;
    }
    return undefined;
  }
  if (type === 'birth') {
    if (!BIRTH_REGEX.test(value)) {
      return ERROR_MESSAGES.birth;
    }
    return undefined;
  }
  if (type === 'job') {
    if (!JOB_REGEX.test(value) || value.length > JOB_MAX_LENGTH) {
      return ERROR_MESSAGES.job;
    }
    return undefined;
  }
  return undefined;
}

export function formatBirthDate(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length < 5) {
    return digits;
  }
  if (digits.length < 7) {
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  }
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}`;
}
