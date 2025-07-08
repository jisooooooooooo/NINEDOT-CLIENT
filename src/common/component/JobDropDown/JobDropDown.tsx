import { useState } from 'react';

import { IcDropdown } from '@/assets/svg';
import JobList from '@/common/component/JobDropDown/JobList';
import {
  jobContainer,
  jobText,
  dropdownIcon,
} from '@/common/component/JobDropDown/JobDropDown.css';
import { PLACE_HOLDER } from '@/common/component/JobDropDown/constants/job';
import type { JobType, JobValue } from '@/common/component/JobDropDown/constants/job';

const JobDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobValue>(PLACE_HOLDER);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleJob = (type: JobType) => {
    setSelectedJob(type);
    setIsOpen(false);
  };

  const state = isOpen ? 'clicked' : 'default';

  return (
    <>
      <button className={jobContainer} onClick={toggleDropdown}>
        <span className={jobText({ state })}>{selectedJob}</span>
        <IcDropdown className={dropdownIcon({ state })} />
      </button>

      {isOpen && <JobList selectedJob={selectedJob} onSelect={handleJob} />}
    </>
  );
};

export default JobDropDown;
