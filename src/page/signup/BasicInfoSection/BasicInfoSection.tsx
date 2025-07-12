import SignupTextField from '@/common/component/SignupTextField';
import JobDropDown from '@/page/signup/component/JobDropDown/JobDropDown';
import * as styles from '@/page/signup/BasicInfoSection/BasicInfoSection.css';
import { IcEssentialDot } from '@/assets/svg';
import { essentialIcon } from '@/page/signup/SignUp.css';
import type { JobValue } from '@/page/signup/component/JobDropDown/constants/job';

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
      <div className={styles.inputContainer}>
        <label htmlFor="name-input" className={styles.labelContainer}>
          이름
          <IcEssentialDot className={essentialIcon} />
        </label>
        <SignupTextField
          id="name-input"
          type="name"
          value={name}
          onChange={setName}
          placeholder="이름을 입력해주세요"
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email-input" className={styles.labelContainer}>
          이메일
          <IcEssentialDot className={essentialIcon} />
        </label>
        <SignupTextField id="email-input" type="email" value={email} onChange={setEmail} disabled />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="birth-input" className={styles.labelContainer}>
          생년월일
          <IcEssentialDot className={essentialIcon} />
        </label>
        <SignupTextField
          id="birth-input"
          type="birth"
          value={birth}
          onChange={setBirth}
          placeholder="생년월일을 입력해주세요"
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="job-button" className={styles.labelContainer}>
          직업
          <IcEssentialDot className={essentialIcon} />
        </label>
        <JobDropDown
          id="job-button"
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          inputJob={inputJob}
          setInputJob={setInputJob}
        />
      </div>
    </div>
  );
};

export default BasicInfoSection;
