import { ERROR_MESSAGES } from './constants';

export const NAME_REGEX = /^[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ\s]{1,10}$/;
export const JOB_REGEX = /^[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ\s]{1,15}$/;
export const BIRTH_REGEX = /^\d{4}.\d{2}.\d{2}$/;

export function validateName(value: string): string | undefined {
  const v = (value ?? '').trim();
  if (!v) {
    return undefined;
  }
  if (!NAME_REGEX.test(v)) {
    return ERROR_MESSAGES.name;
  }
  return undefined;
}

export function validateBirth(value: string): string | undefined {
  const v = (value ?? '').trim();
  if (!v) {
    return undefined;
  }
  if (!BIRTH_REGEX.test(v)) {
    return ERROR_MESSAGES.birth;
  }

  const [yy, mm, dd] = v.split('.');
  const yearNum = parseInt(yy, 10);
  const monthNum = parseInt(mm, 10);
  const dayNum = parseInt(dd, 10);
  if (monthNum < 1 || monthNum > 12) {
    return ERROR_MESSAGES.birth;
  }
  if (dayNum < 1 || dayNum > 31) {
    return ERROR_MESSAGES.birth;
  }

  const exact = new Date(yearNum, monthNum - 1, dayNum);
  if (
    exact.getFullYear() !== yearNum ||
    exact.getMonth() !== monthNum - 1 ||
    exact.getDate() !== dayNum
  ) {
    return ERROR_MESSAGES.birth;
  }

  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const koreaNow = new Date(utc + 9 * 60 * 60 * 1000);
  const todayIso = koreaNow.toISOString().slice(0, 10);
  const [ty, tm, td] = todayIso.split('-');
  const today = new Date(`${ty}-${tm}-${td}`);
  const inputDate = new Date(`${yearNum}-${mm}-${dd}`);
  if (inputDate.getTime() > today.getTime()) {
    return ERROR_MESSAGES.birth;
  }

  return undefined;
}

export function validateJob(value: string): string | undefined {
  const v = (value ?? '').trim();
  if (!v) {
    return undefined;
  }
  if (!JOB_REGEX.test(v)) {
    return ERROR_MESSAGES.job;
  }
  return undefined;
}

export function validateSignupField(
  type: 'name' | 'birth' | 'job',
  value: string,
): string | undefined {
  if (type === 'name') {
    return validateName(value);
  }
  if (type === 'birth') {
    return validateBirth(value);
  }
  if (type === 'job') {
    return validateJob(value);
  }
  return undefined;
}
