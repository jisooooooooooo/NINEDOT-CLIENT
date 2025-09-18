import { useCallback, useState } from 'react';

import IcLock from '@/assets/svg/IcLock';
import IcMediumTextdelete from '@/assets/svg/IcMediumTextdelete';

import BaseTextField from '../BaseTextField';
import { DEFAULT_PLACEHOLDER, type SignupVariant } from './constants';
import * as s from './SignupTextField.css';
import { formatBirthDate } from './format';
import { validateSignupField } from './validation';

type FieldState = 'default' | 'clicked' | 'typing' | 'filled' | 'hover' | 'disabled';

const pickPlaceholder = (variant: SignupVariant, placeholder?: string) =>
  placeholder ?? DEFAULT_PLACEHOLDER[variant];

const computeFieldState = (args: {
  hasValue: boolean;
  isFocused: boolean;
  isHovered: boolean;
  disabled: boolean;
}): FieldState => {
  const { hasValue, isFocused, isHovered, disabled } = args;
  if (disabled) {
    return 'disabled';
  }
  if (isFocused) {
    return hasValue ? 'typing' : 'clicked';
  }
  if (hasValue) {
    return 'filled';
  }
  return isHovered ? 'hover' : 'default';
};

export interface SignupTextFieldProps {
  id?: string;
  variant: SignupVariant;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const SignupTextField = ({
  id,
  variant,
  value,
  onChange,
  placeholder,
  disabled,
}: SignupTextFieldProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const effectivePlaceholder = pickPlaceholder(variant, placeholder);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleChange = useCallback(
    (nextValue: string) => {
      if (variant === 'birth') {
        onChange(formatBirthDate(nextValue));
        return;
      }
      onChange(nextValue);
    },
    [onChange, variant],
  );

  const signupType = variant === 'email' ? undefined : (variant as 'name' | 'birth' | 'job');
  let computedInvalid: boolean | undefined;
  let computedError: string | undefined;
  if (signupType) {
    const msg = validateSignupField(signupType, value);
    if (msg) {
      computedInvalid = true;
      computedError = msg;
    }
  }

  return (
    <BaseTextField id={id} value={value} onChange={handleChange} disabled={disabled}>
      {({ inputProps, hasValue, isFocused, clear }) => {
        const state = computeFieldState({ hasValue, isFocused, isHovered, disabled: !!disabled });
        const wrapperClass = s.fieldBox[state];
        const inputClass = s.inputState[state];

        return (
          <div
            className={computedInvalid ? s.errorContainer : undefined}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={wrapperClass}>
              <input
                className={`${s.inputFont} ${inputClass}`}
                {...inputProps}
                placeholder={effectivePlaceholder}
              />
              {state === 'typing' && variant !== 'email' && (
                <button
                  type="button"
                  onClick={clear}
                  onMouseDown={(e) => e.preventDefault()}
                  aria-label="입력값 삭제"
                  className={s.clearButton}
                >
                  <IcMediumTextdelete />
                </button>
              )}
              {state === 'disabled' && (
                <span className={s.lockIcon} aria-hidden>
                  <IcLock />
                </span>
              )}
            </div>
            {computedInvalid && (
              <p className={s.errorText} role="alert">
                {computedError || '유효하지 않은 입력입니다.'}
              </p>
            )}
          </div>
        );
      }}
    </BaseTextField>
  );
};

export default SignupTextField;
