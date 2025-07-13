import type { ReactNode } from 'react';

import { IcEssentialDot } from '@/assets/svg';
import * as styles from '@/page/signup/component/LabelField/LabelField.css';
import { essentialIcon } from '@/page/signup/SignUp.css';

type LabeledFieldProps = {
  id: string;
  label: string;
  children: ReactNode;
};

const LabeledField = ({ id, label, children }: LabeledFieldProps) => (
  <div className={styles.inputContainer}>
    <label htmlFor={id} className={styles.labelContainer}>
      {label}
      {id !== 'job-button' && <IcEssentialDot className={essentialIcon} />}
    </label>
    {children}
  </div>
);

export default LabeledField;
