import { useState } from 'react';

import SignupTextField from '@/common/component/SignupTextField';
import JobDropDown from '@/common/component/JobDropDown/JobDropDown';
import * as styles from '@/page/signup/BasicInfoSection/BasicInfoSection.css';
import { IcEssentialDot } from '@/assets/svg';
import { essentialIcon } from '@/page/signup/SignUp.css';

const BasicInfoSection = () => {
  const initialName = '새봄';
  const initialEmail = 'spring180@naver.com';
  const initialBirth = '2002-02-14';

  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [birth, setBirth] = useState(initialBirth);

  return (
    <div className={styles.TextFieldContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="name-input" className={styles.labelContainer}>
          이름
          <IcEssentialDot className={essentialIcon} />
        </label>
        <SignupTextField
          type="name"
          value={name}
          onChange={setName}
          placeholder="이름을 입력해주세요"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="name-input" className={styles.labelContainer}>
          이메일
          <IcEssentialDot className={essentialIcon} />
        </label>
        <SignupTextField type="email" value={email} onChange={setEmail} disabled />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="name-input" className={styles.labelContainer}>
          생년월일
          <IcEssentialDot className={essentialIcon} />
        </label>
        <SignupTextField
          type="birth"
          value={birth}
          onChange={setBirth}
          placeholder="생년월일을 입력해주세요"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="name-input" className={styles.labelContainer}>
          직업
          <IcEssentialDot className={essentialIcon} />
        </label>
        <JobDropDown />
      </div>
    </div>
  );
};

export default BasicInfoSection;
