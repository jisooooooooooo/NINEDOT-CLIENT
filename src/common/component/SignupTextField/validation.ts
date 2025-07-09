import { ERROR_MESSAGES } from './constants';

export const NAME_MAX_LENGTH = 10;
export const JOB_MAX_LENGTH = 15;
export const BIRTH_REGEX = /^\d{4}-\d{2}-\d{2}$/;
export const NAME_REGEX = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\s]*$/;
export const JOB_REGEX = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\s]*$/;

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
    const [, , month] = value.split('-');
    const monthNum = parseInt(month, 10);
    if (monthNum < 1 || monthNum > 12) {
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
