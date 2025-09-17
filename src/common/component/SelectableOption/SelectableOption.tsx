import clsx from 'clsx';

import * as styles from './SelectableOption.css';

import { IcCheckboxChecked, IcCheckboxDefault } from '@/assets/svg';

type SelectableOptionProps = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onToggle: () => void;
  className?: string;
};

const SelectableOption = ({
  label,
  checked,
  disabled,
  onToggle,
  className,
}: SelectableOptionProps) => {
  const CheckIcon = checked ? IcCheckboxChecked : IcCheckboxDefault;

  const handleActivate = () => {
    if (!disabled) {
      onToggle();
    }
  };

  return (
    <div
      className={clsx(styles.optionItem, disabled && styles.optionItemDisabled, className)}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={0}
      onClick={handleActivate}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <CheckIcon className={styles.checkboxIcon} />
      <span>{label}</span>
    </div>
  );
};

export default SelectableOption;
