import { useState } from 'react';

import { IcDropdown } from '@/assets/svg';
import JobList from '@/common/component/JobDropDown/JobList';
import {
  jobContainer,
  jobText,
  dropdownIcon,
  textContainer,
} from '@/common/component/JobDropDown/JobDropDown.css';
import { PLACE_HOLDER, JOB_LIST } from '@/common/component/JobDropDown/constants/job';
import type { JobType, JobValue } from '@/common/component/JobDropDown/constants/job';

const JobDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobValue>(PLACE_HOLDER);

  const isPlaceHolder = typeof selectedJob === 'string';

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleJob = (job: JobType) => {
    setSelectedJob(job);
    setIsOpen(false);
  };

  const state = isOpen ? 'clicked' : 'default';
  const isTextOpen = !isPlaceHolder && selectedJob.id === JOB_LIST[JOB_LIST.length - 1].id;

  return (
    <>
      <button className={jobContainer} onClick={toggleDropdown}>
        <span className={jobText({ state })}>{isPlaceHolder ? selectedJob : selectedJob.job}</span>
        <IcDropdown className={dropdownIcon({ state })} />
      </button>

      {isOpen && <JobList jobList={JOB_LIST} selectedJob={selectedJob} onSelect={handleJob} />}
      {isTextOpen && <input placeholder="정보를 입력해주세요" className={textContainer} />}
    </>
  );
};

export default JobDropDown;
