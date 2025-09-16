import { useState } from 'react';

import IcTextdelete from '@/assets/svg/IcTextdelete';

import { type MandalartVariant, BIG_GOAL_MAX_LENGTH, DEFAULT_PLACEHOLDER } from './constants';
import * as s from './MandalartTextField.css';

import BaseTextField from '../BaseTextField';

type FieldState = 'default' | 'clicked' | 'typing' | 'filled' | 'hover';

const pickMaxLength = (variant: MandalartVariant, maxLength?: number) =>
  variant === 'bigGoal' ? (maxLength ?? BIG_GOAL_MAX_LENGTH) : (maxLength ?? undefined);

const pickPlaceholder = (variant: MandalartVariant, placeholder?: string) =>
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

export interface MandalartTextFieldProps {
  variant?: MandalartVariant;
  value: string;
  onChange: (value: string) => void;
  onCommit?: (value: string, reason: 'enter' | 'blur') => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
}

const MandalartTextField = ({
  variant = 'bigGoal',
  value,
  onChange,
  onCommit,
  placeholder,
  maxLength,
  disabled,
}: MandalartTextFieldProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const effectiveMaxLength = pickMaxLength(variant, maxLength);
  const effectivePlaceholder = pickPlaceholder(variant, placeholder);

  const wrapperVariants =
    variant === 'bigGoal'
      ? s.bigGoalVariants
      : variant === 'subGoal'
        ? s.subGoalVariants
        : s.todoVariants;

  const clearButtonClass = variant === 'bigGoal' ? s.clearButton : s.clearButtonSmall;

  return (
    <BaseTextField
      value={value}
      onChange={onChange}
      onCommit={onCommit}
      maxLength={effectiveMaxLength}
      locked={disabled}
    >
      {({ inputProps, hasValue, isFocused, clear }) => {
        const state = computeFieldState({ hasValue, isFocused, isHovered });
        const stateStylesByVariant = s.inputStateVariants[variant] ?? s.inputStateVariants.bigGoal;
        const inputClass = `${s.inputFontVariants[variant]} ${stateStylesByVariant[state]}`;
        const wrapperClass = wrapperVariants[state];

        return (
          <div
            className={wrapperClass}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <input className={inputClass} {...inputProps} placeholder={effectivePlaceholder} />
            {state === 'typing' && (
              <button
                type="button"
                onClick={clear}
                onMouseDown={(e) => e.preventDefault()}
                aria-label="입력값 삭제"
                className={clearButtonClass}
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

export default MandalartTextField;
