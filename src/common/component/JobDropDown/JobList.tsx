import { listContainer, listItem, listText } from '@/common/component/JobDropDown/JobList.css';
import { JOB_LIST } from '@/common/component/JobDropDown/constants/job';
import type { JobType, JobValue } from '@/common/component/JobDropDown/constants/job';

type JobProps = {
  selectedJob: JobValue;
  onSelect: (type: JobType) => void;
};

const JobList = ({ selectedJob, onSelect }: JobProps) => {
  return (
    <div className={listContainer}>
      {JOB_LIST.map((job: JobType) => {
        const state = selectedJob === job ? 'selected' : 'default';

        return (
          <button key={job.id} className={listItem} onClick={() => onSelect(job)}>
            <span className={listText({ state })}>{job.job}</span>
          </button>
        );
      })}
    </div>
  );
};

export default JobList;
