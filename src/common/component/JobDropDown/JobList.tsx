import { listContainer, listItem, listText } from '@/common/component/JobDropDown/JobList.css';
import { JOB_TYPE } from '@/common/component/JobDropDown/constants/job';
import type { JobType, JobValue } from '@/common/component/JobDropDown/constants/job';

type JobProps = {
  selectedJob: JobValue;
  onSelect: (type: JobType) => void;
};

const JobList = ({ selectedJob, onSelect }: JobProps) => {
  return (
    <div className={listContainer}>
      {JOB_TYPE.map((job: JobType) => {
        const state = selectedJob === job ? 'selected' : 'default';

        return (
          <button key={job} className={listItem} onClick={() => onSelect(job)}>
            <span className={listText({ state })}>{job}</span>
          </button>
        );
      })}
    </div>
  );
};

export default JobList;
