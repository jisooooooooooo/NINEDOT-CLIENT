import { useState } from 'react';

import { IcDropdown } from '@/assets/svg';
import JobList from '@/common/component/JobDropDown/JobList';
import * as styles from '@/common/component/JobDropDown/JobDropDown.css';
import { PLACE_HOLDER, JOB_LIST } from '@/common/component/JobDropDown/constants/job';
import type { JobType, JobValue } from '@/common/component/JobDropDown/constants/job';
import SignupTextField from '@/common/component/SignupTextField';

const JobDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobValue>(PLACE_HOLDER);
  const [writedJob, setWritedJob] = useState('');
  const isPlaceHolder = typeof selectedJob === 'string';

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleJob = (job: JobType) => {
    setSelectedJob(job);
    setIsOpen(false);
  };

  const state = isOpen ? 'clicked' : 'default';

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.jobContainer} onClick={toggleDropdown}>
        <span className={styles.jobText({ state })}>
          {isPlaceHolder ? selectedJob : selectedJob.job}
        </span>
        <IcDropdown className={styles.dropdownIcon({ state })} />
      </button>

      {isOpen && <JobList jobList={JOB_LIST} selectedJob={selectedJob} onSelect={handleJob} />}

      {!isPlaceHolder && selectedJob.id === JOB_LIST[JOB_LIST.length - 1].id && (
        <SignupTextField
          type="job"
          value={writedJob}
          onChange={setWritedJob}
          placeholder="정보를 입력해주세요"
        />
      )}
    </div>
  );
};

export default JobDropDown;
