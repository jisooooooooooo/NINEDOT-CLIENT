import { useState } from 'react';

import { JOB_LIST } from '@/page/signup/component/JobDropDown/constants/job';
import type { JobValue } from '@/page/signup/component/JobDropDown/constants/job';
import { userData } from '@/page/signup/userData';

const PLACE_HOLDER = '직업을 선택하세요';

export const useSignUpForm = () => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [birth, setBirth] = useState(userData.birthday);
  const [selectedJob, setSelectedJob] = useState<JobValue>(PLACE_HOLDER);
  const [inputJob, setInputJob] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const isPlaceholder = (job: JobValue): job is typeof PLACE_HOLDER => job === PLACE_HOLDER;

  const isOtherJob = (job: JobValue): boolean =>
    !isPlaceholder(job) && job.id === JOB_LIST[JOB_LIST.length - 1].id;

  const isOtherSelected = isOtherJob(selectedJob);

  const finalJob = isPlaceholder(selectedJob)
    ? ''
    : isOtherSelected
      ? inputJob.trim()
      : selectedJob.job;

  const isJobValid = isPlaceholder(selectedJob)
    ? false
    : !isOtherSelected || inputJob.trim().length > 0;

  const isValid =
    name.trim() !== '' && email.trim() !== '' && birth.trim() !== '' && isJobValid && isChecked;

  return {
    formState: { name, email, birth, selectedJob, inputJob, isChecked },
    actions: { setName, setEmail, setBirth, setSelectedJob, setInputJob, setIsChecked },
    computed: { finalJob, isValid },
  };
};
