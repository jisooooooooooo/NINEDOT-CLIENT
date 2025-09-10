import { useMemo, useState } from 'react';
import clsx from 'clsx';

import BaseTextField from '../BaseTextField';
import IcTextdelete from '@/assets/svg/IcTextdelete';

import type { MandalartVariant } from './constants';
import { BIG_GOAL_MAX_LENGTH, DEFAULT_PLACEHOLDER } from './constants';
import * as s from './MandalartTextField.css';

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
  if (isFocused) return hasValue ? 'typing' : 'clicked';
  if (hasValue) return 'filled';
  return isHovered ? 'hover' : 'default';
};

const callBoth =
  <E,>(a?: (e: E) => void, b?: (e: E) => void) =>
  (e: E) => {
    a?.(e);
    b?.(e);
  };

export interface MandalartTextFieldProps {
  variant?: MandalartVariant;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onCompositionStart?: React.CompositionEventHandler<HTMLInputElement>;
  onCompositionEnd?: React.CompositionEventHandler<HTMLInputElement>;
}

const MandalartTextField = ({
  variant = 'bigGoal',
  value,
  onChange,
  placeholder,
  maxLength,
  disabled,
  onKeyDown,
  onBlur,
  onCompositionStart,
  onCompositionEnd,
}: MandalartTextFieldProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const effectiveMaxLength = pickMaxLength(variant, maxLength);
  const effectivePlaceholder = pickPlaceholder(variant, placeholder);

  const wrapperVariants = useMemo(() => {
    const map = {
      bigGoal: s.bigGoalVariants,
      subGoal: s.subGoalVariants,
      todo: s.todoVariants,
    } as const;
    return map[variant];
  }, [variant]);

  const clearButtonClass = variant === 'bigGoal' ? s.clearButton : s.clearButtonSmall;

  return (
    <BaseTextField
      value={value}
      onChange={onChange}
      maxLength={effectiveMaxLength}
      locked={disabled}
    >
      {({ inputProps, hasValue, isFocused, clear }) => {
        const state = computeFieldState({ hasValue, isFocused, isHovered });
        const stateStylesByVariant = s.inputStateVariants[variant] ?? s.inputStateVariants.bigGoal;
        const inputClass = clsx(s.inputFontVariants[variant], stateStylesByVariant[state]);
        const wrapperClass = wrapperVariants[state];

        return (
          <div
            className={wrapperClass}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <input
              className={inputClass}
              {...inputProps}
              placeholder={effectivePlaceholder}
              onKeyDown={callBoth(inputProps.onKeyDown, onKeyDown)}
              onBlur={callBoth(inputProps.onBlur, onBlur)}
              onCompositionStart={callBoth(inputProps.onCompositionStart, onCompositionStart)}
              onCompositionEnd={callBoth(inputProps.onCompositionEnd, onCompositionEnd)}
            />
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
