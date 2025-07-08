import { useState, useRef } from 'react';

import type { TextFieldProps, TextFieldVariant } from './MandalartTextField.types';
import * as styles from './MandalartTextField.css';

import IcTextdelete from '@/assets/svg/IcTextdelete';

const DEFAULT_PLACEHOLDER = {
  bigGoal: '이루고 싶은 목표를 작성하세요',
  subGoal: '세부 목표를 입력해주세요',
  todo: '할 일을 입력해주세요',
} as const;

const BIG_GOAL_MAX_LENGTH = 30;
type FieldState = 'default' | 'clicked' | 'typing' | 'filled' | 'hover';

const getFieldState = (isFocused: boolean, isHovered: boolean, hasValue: boolean): FieldState => {
  if (isFocused) {
    return hasValue ? 'typing' : 'clicked';
  }
  if (hasValue) {
    return 'filled';
  }
  if (isHovered) {
    return 'hover';
  }
  return 'default';
};

const getWrapperClass = (variant: TextFieldVariant, state: FieldState) => {
  const variantStyles = {
    bigGoal: styles.bigGoalVariants,
    subGoal: styles.subGoalVariants,
    todo: styles.todoVariants,
  };
  return variantStyles[variant][state];
};

const getClearButtonClass = (variant: TextFieldVariant) =>
  variant === 'bigGoal' ? styles.clearButton : styles.clearButtonSmall;

const getMaxLength = (variant: TextFieldVariant, maxLength?: number) =>
  variant === 'bigGoal' ? (maxLength ?? BIG_GOAL_MAX_LENGTH) : undefined;

const getPlaceholder = (variant: TextFieldVariant, placeholder?: string) =>
  placeholder ?? DEFAULT_PLACEHOLDER[variant];

const TextField = ({
  variant = 'bigGoal',
  value,
  onChange,
  placeholder,
  maxLength,
  disabled = false,
}: TextFieldProps) => {
  const [state, setState] = useState({
    isFocused: false,
    isHovered: false,
    isComposing: false,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const hasValue = Boolean(value);
  const fieldState = getFieldState(state.isFocused, state.isHovered, hasValue);

  const wrapperClass = getWrapperClass(variant, fieldState);
  const clearButtonClass = getClearButtonClass(variant);
  const effectiveMaxLength = getMaxLength(variant, maxLength);
  const effectivePlaceholder = getPlaceholder(variant, placeholder);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (effectiveMaxLength && newValue.length > effectiveMaxLength) {
      return;
    }
    onChange(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !state.isComposing) {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.blur();
    }
  };

  const handleClearClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onChange('');
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleContainerClick = () => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  };

  const handleWrapperKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleContainerClick();
    }
  };

  return (
    <div
      className={wrapperClass}
      onMouseEnter={() => !disabled && setState({ ...state, isHovered: true })}
      onMouseLeave={() => setState({ ...state, isHovered: false })}
      onClick={handleContainerClick}
      onKeyDown={handleWrapperKeyDown}
      role="button"
      tabIndex={0}
    >
      <input
        ref={inputRef}
        className={[
          styles.inputBase,
          variant === 'bigGoal'
            ? styles.inputBigGoal
            : variant === 'subGoal'
              ? styles.inputSubGoal
              : styles.inputTodo,
        ].join(' ')}
        value={value}
        onChange={handleInputChange}
        placeholder={effectivePlaceholder}
        disabled={disabled}
        onFocus={() => setState({ ...state, isFocused: true })}
        onBlur={() => setState({ ...state, isFocused: false })}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setState({ ...state, isComposing: true })}
        onCompositionEnd={() => setState({ ...state, isComposing: false })}
        maxLength={effectiveMaxLength}
      />
      {fieldState === 'typing' && (
        <button
          type="button"
          onClick={handleClearClick}
          onMouseDown={(e) => e.preventDefault()}
          aria-label="입력값 삭제"
          className={clearButtonClass}
        >
          <IcTextdelete />
        </button>
      )}
    </div>
  );
};

export default TextField;
