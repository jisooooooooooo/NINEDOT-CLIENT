import { listContainer, listItem, listText } from '@/page/signup/component/JobDropDown/JobList.css';
import type { JobType, JobValue } from '@/page/signup/component/JobDropDown/constants/job';

type JobProps = {
  jobList: JobType[];
  selectedJob: JobValue;
  onSelect: (type: JobType) => void;
};

const JobList = ({ jobList, selectedJob, onSelect }: JobProps) => {
  return (
    <div className={listContainer}>
      {jobList.map((job: JobType) => {
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
