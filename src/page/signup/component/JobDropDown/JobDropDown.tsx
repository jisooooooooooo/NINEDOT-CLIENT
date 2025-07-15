import { useEffect, useRef, useState } from 'react';

import { IcDropdown } from '@/assets/svg';
import * as styles from '@/page/signup/component/JobDropDown/JobDropDown.css';
import JobList from '@/page/signup/component/JobDropDown/JobList';
import { JOB_LIST } from '@/page/signup/component/JobDropDown/constants/job';
import type { JobType, JobValue } from '@/page/signup/component/JobDropDown/constants/job';
import SignupTextField from '@/common/component/SignupTextField';

type JobDropDownProps = {
  id: string;
  selectedJob: JobValue;
  inputJob: string;
  setSelectedJob: (job: JobValue) => void;
  setInputJob: (value: string) => void;
};

const JobDropDown = ({
  id,
  selectedJob,
  setSelectedJob,
  inputJob,
  setInputJob,
}: JobDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isPlaceHolder = typeof selectedJob === 'string';
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleJob = (job: JobType) => {
    setSelectedJob(job);
    setIsOpen(false);
  };

  const state = isOpen ? 'clicked' : 'default';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button id={id} className={styles.jobContainer} onClick={toggleDropdown}>
        <span className={styles.jobText({ state })}>
          {isPlaceHolder ? selectedJob : selectedJob.job}
        </span>
        <IcDropdown className={styles.dropdownIcon({ state })} />
      </button>

      {isOpen && <JobList jobList={JOB_LIST} selectedJob={selectedJob} onSelect={handleJob} />}

      {!isPlaceHolder && selectedJob.id === JOB_LIST[JOB_LIST.length - 1].id && (
        <div className={styles.etcContainer}>
          <SignupTextField
            type="job"
            value={inputJob}
            onChange={setInputJob}
            placeholder="직업을 입력해주세요"
          />
        </div>
      )}
    </div>
  );
};

export default JobDropDown;
