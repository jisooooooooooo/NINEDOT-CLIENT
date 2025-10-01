import { SignupTextField } from '@/common/component/TextField/signup';
import JobDropDown from '@/page/signup/component/JobDropDown/JobDropDown';
import * as styles from '@/page/signup/BasicInfoSection/BasicInfoSection.css';
import LabelField from '@/page/signup/component/LabelField/LabelField';
import type { JobValue } from '@/page/signup/component/JobDropDown/type/JobValue';

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
      <LabelField id="name-input" label="이름">
        <SignupTextField
          id="name-input"
          variant="name"
          value={name}
          onChange={setName}
          placeholder="이름을 입력해주세요"
        />
      </LabelField>

      <LabelField id="email-input" label="이메일">
        <SignupTextField
          id="email-input"
          variant="email"
          value={email}
          onChange={setEmail}
          disabled
        />
      </LabelField>

      <LabelField id="birth-input" label="생년월일">
        <SignupTextField id="birth-input" variant="birth" value={birth} onChange={setBirth} />
      </LabelField>

      <LabelField id="job-button" label="직업">
        <JobDropDown
          id="job-button"
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          inputJob={inputJob}
          setInputJob={setInputJob}
        />
      </LabelField>
    </div>
  );
};

export default BasicInfoSection;
