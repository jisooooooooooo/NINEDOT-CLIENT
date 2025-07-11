import { useState } from 'react';

import { JOB_LIST } from '@/page/signup/component/JobDropDown/constants/job';
import type { JobValue } from '@/page/signup/component/JobDropDown/constants/job';
import { userData } from '@/page/signup/userData';

export const useSignUpForm = () => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [birth, setBirth] = useState(userData.birthday);
  const [selectedJob, setSelectedJob] = useState<JobValue>('직업을 선택하세요');
  const [inputJob, setInputJob] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const isOtherSelected =
    typeof selectedJob !== 'string' && selectedJob.id === JOB_LIST[JOB_LIST.length - 1].id;

  const finalJob =
    typeof selectedJob === 'string' ? '' : isOtherSelected ? inputJob.trim() : selectedJob.job;

  const isJobValid =
    typeof selectedJob === 'string' ? false : !isOtherSelected || inputJob.trim().length > 0;

  const isValid =
    name.trim() !== '' && email.trim() !== '' && birth.trim() !== '' && isJobValid && isChecked;

  return {
    formState: { name, email, birth, selectedJob, inputJob, isChecked },
    actions: { setName, setEmail, setBirth, setSelectedJob, setInputJob, setIsChecked },
    computed: { finalJob, isValid },
  };
};
