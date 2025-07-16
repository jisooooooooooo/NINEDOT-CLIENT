import { listContainer, listItem, listText } from '@/page/signup/component/JobDropDown/JobList.css';
import type { JobItem } from '@/page/signup/component/JobDropDown/type/JobItem';
import type { JobValue } from '@/page/signup/component/JobDropDown/type/JobValue';

type JobProps = {
  jobList: JobItem[];
  selectedJob: JobValue;
  onSelect: (type: JobItem) => void;
};

const JobList = ({ jobList, selectedJob, onSelect }: JobProps) => {
  return (
    <div className={listContainer}>
      {jobList.map((job: JobItem) => {
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
