import { useCallback, useState } from 'react';

import IcTextdelete from '@/assets/svg/IcTextdelete';

import BaseTextField from '../BaseTextField';
import { type ModifyVariant, DEFAULT_PLACEHOLDER } from './constants.ts';
import * as s from './ModifyTextField.css.ts';

type FieldState = 'default' | 'hover' | 'clicked' | 'typing' | 'filled';

const pickPlaceholder = (variant: ModifyVariant, placeholder?: string) =>
  placeholder ?? DEFAULT_PLACEHOLDER[variant];

const computeFieldState = (args: {
  hasValue: boolean;
  isFocused: boolean;
  isHovered: boolean;
}): FieldState => {
  const { hasValue, isFocused, isHovered } = args;
  if (isFocused) {
    return hasValue ? 'typing' : 'clicked';
  }
  if (hasValue) {
    return 'filled';
  }
  return isHovered ? 'hover' : 'default';
};

export interface ModifyTextFieldProps {
  variant: ModifyVariant;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const ModifyTextField = ({
  variant,
  value,
  onChange,
  placeholder,
  disabled,
}: ModifyTextFieldProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const effectivePlaceholder = pickPlaceholder(variant, placeholder);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleChange = useCallback(
    (nextValue: string) => {
      onChange(nextValue);
    },
    [onChange],
  );

  const isTodo = variant === 'todo';

  return (
    <BaseTextField value={value} onChange={handleChange} disabled={disabled}>
      {({ inputProps, hasValue, isFocused, clear }) => {
        const state = computeFieldState({ hasValue, isFocused, isHovered });
        const wrapperClass = variant === 'subGoal' ? s.subGoalBox : s.todoBox[state];
        const inputClass = variant === 'subGoal' ? s.subGoalInput[state] : s.todoInput[state];

        return (
          <div
            className={wrapperClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <input className={inputClass} {...inputProps} placeholder={effectivePlaceholder} />
            {isTodo && state === 'typing' && (
              <button
                type="button"
                onClick={clear}
                onMouseDown={(e) => e.preventDefault()}
                aria-label="입력값 삭제"
                className={s.clearButton}
              >
                <IcTextdelete />
              </button>
            )}
          </div>
        );
      }}
    </BaseTextField>
  );
};

export default ModifyTextField;
