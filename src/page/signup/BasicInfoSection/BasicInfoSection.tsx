import SignupTextField from '@/common/component/SignupTextField';
import JobDropDown from '@/page/signup/component/JobDropDown/JobDropDown';
import * as styles from '@/page/signup/BasicInfoSection/BasicInfoSection.css';
import type { JobValue } from '@/page/signup/component/JobDropDown/constants/job';
import LabeledField from '@/page/signup/component/LabelField/LabelField';

type BasicInfoProps = {
  name: string;
  email: string;
  birth: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setBirth: (value: string) => void;
  selectedJob: JobValue;
  inputJob: string;
  setSelectedJob: (job: JobValue) => void;
  setInputJob: (value: string) => void;
};

const BasicInfoSection = ({
  name,
  email,
  birth,
  setName,
  setEmail,
  setBirth,
  selectedJob,
  inputJob,
  setSelectedJob,
  setInputJob,
}: BasicInfoProps) => {
  return (
    <div className={styles.TextFieldContainer}>
      <LabeledField id="name-input" label="이름">
        <SignupTextField
          id="name-input"
          type="name"
          value={name}
          onChange={setName}
          placeholder="이름을 입력해주세요"
        />
      </LabeledField>

      <LabeledField id="email-input" label="이메일">
        <SignupTextField id="email-input" type="email" value={email} onChange={setEmail} disabled />
      </LabeledField>

      <LabeledField id="birth-input" label="생년월일">
        <SignupTextField
          id="birth-input"
          type="birth"
          value={birth}
          onChange={setBirth}
          placeholder="생년월일을 입력해주세요"
        />
      </LabeledField>

      <LabeledField id="job-button" label="직업">
        <JobDropDown
          id="job-button"
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          inputJob={inputJob}
          setInputJob={setInputJob}
        />
      </LabeledField>
    </div>
  );
};

export default BasicInfoSection;
