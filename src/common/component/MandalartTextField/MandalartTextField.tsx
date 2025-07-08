import { useReducer, useRef } from 'react';

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

// 상태 타입 및 액션 타입 정의

type State = {
  isFocused: boolean;
  isHovered: boolean;
  isComposing: boolean;
};

type Action =
  | { type: 'FOCUS' }
  | { type: 'BLUR' }
  | { type: 'HOVER_ENTER' }
  | { type: 'HOVER_LEAVE' }
  | { type: 'COMPOSE_START' }
  | { type: 'COMPOSE_END' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FOCUS':
      return { ...state, isFocused: true };
    case 'BLUR':
      return { ...state, isFocused: false };
    case 'HOVER_ENTER':
      return { ...state, isHovered: true };
    case 'HOVER_LEAVE':
      return { ...state, isHovered: false };
    case 'COMPOSE_START':
      return { ...state, isComposing: true };
    case 'COMPOSE_END':
      return { ...state, isComposing: false };
    default:
      return state;
  }
};

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
  const [state, dispatch] = useReducer(reducer, {
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
      onMouseEnter={() => !disabled && dispatch({ type: 'HOVER_ENTER' })}
      onMouseLeave={() => dispatch({ type: 'HOVER_LEAVE' })}
      onClick={handleContainerClick}
      onKeyDown={handleWrapperKeyDown}
      role="button"
      tabIndex={0}
    >
      <input
        ref={inputRef}
        className={styles.inputVariants[variant]}
        value={value}
        onChange={handleInputChange}
        placeholder={effectivePlaceholder}
        disabled={disabled}
        onFocus={() => dispatch({ type: 'FOCUS' })}
        onBlur={() => dispatch({ type: 'BLUR' })}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => dispatch({ type: 'COMPOSE_START' })}
        onCompositionEnd={() => dispatch({ type: 'COMPOSE_END' })}
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
