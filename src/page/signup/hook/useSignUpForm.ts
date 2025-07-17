import { useState } from 'react';

import { userData } from '@/page/signup/userData';
import { validateField } from '@/common/component/SignupTextField/validation';
import type { JobValue } from '@/page/signup/component/JobDropDown/type/JobValue';

const PLACE_HOLDER = '직업을 선택하세요';
const ETC_JOB_KEYWORD = '기타';

export const useSignUpForm = () => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [birth, setBirth] = useState('');
  const [selectedJob, setSelectedJob] = useState<JobValue>(PLACE_HOLDER);
  const [inputJob, setInputJob] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const isNameValid = validateField('name', name) === undefined;
  const isBirthValid = validateField('birth', birth) === undefined;

  const isPlaceholder = (job: JobValue): job is typeof PLACE_HOLDER => job === PLACE_HOLDER;

  const isOtherJob = (job: JobValue): boolean =>
    !isPlaceholder(job) && typeof job !== 'string' && job.job.includes(ETC_JOB_KEYWORD);

  const isOtherSelected = isOtherJob(selectedJob);

  const finalJob = isPlaceholder(selectedJob)
    ? ''
    : typeof selectedJob === 'string'
      ? ''
      : selectedJob.job;

  const isValid =
    name.trim() !== '' &&
    email.trim() !== '' &&
    birth.trim() !== '' &&
    isChecked &&
    isNameValid &&
    isBirthValid;

  return {
    formState: { name, email, birth, selectedJob, inputJob, isChecked },
    actions: { setName, setEmail, setBirth, setSelectedJob, setInputJob, setIsChecked },
    computed: { finalJob, isValid, isOtherSelected },
  };
};
