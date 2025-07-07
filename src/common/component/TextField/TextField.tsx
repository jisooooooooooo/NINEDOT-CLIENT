import { useState, useMemo, useRef } from 'react';

import type { TextFieldProps, TextFieldVariant } from './TextField.types';
import * as styles from './TextField.css';

import IcTextdelete from '@/assets/svg/IcTextdelete';
import { fonts } from '@/style/token/typography.css';
import { colors } from '@/style/token/color.css';

const DEFAULT_PLACEHOLDER = {
  bigGoal: '이루고 싶은 목표를 작성하세요.',
  subGoal: '세부 목표를 입력해주세요.',
  todo: '할 일을 입력해주세요.',
} as const;

const BIG_GOAL_MAX_LENGTH = 30;

export type FieldState = 'default' | 'clicked' | 'typing' | 'filled' | 'hover';

function determineTextFieldState({
  isFocused,
  isHovered,
  hasValue,
}: {
  isFocused: boolean;
  isHovered: boolean;
  hasValue: boolean;
}): FieldState {
  if (isFocused) {
    return hasValue ? 'typing' : 'clicked';
  }
  if (hasValue && !isFocused) {
    return 'filled';
  }
  if (isHovered) {
    return 'hover';
  }
  return 'default';
}

function getWrapperStyleClass(variant: TextFieldVariant, state: FieldState) {
  switch (variant) {
    case 'bigGoal':
      return styles.bigGoalVariants[state];
    case 'subGoal':
      return styles.subGoalVariants[state];
    case 'todo':
      return styles.todoVariants[state];
    default:
      return styles.bigGoalVariants[state];
  }
}

function getInputFontStyle(variant: TextFieldVariant, state: FieldState) {
  if (variant === 'bigGoal') {
    return fonts.title01;
  }
  if (variant === 'subGoal' || variant === 'todo') {
    if (state === 'filled') {
      return { ...fonts.subtitle03, fontWeight: fonts.subtitle02.fontWeight };
    }
    return fonts.subtitle03;
  }
  return {};
}

function getTextColor(state: FieldState) {
  return state === 'filled' || state === 'typing' ? colors.grey10 : colors.grey6;
}

function getEffectiveMaxLength(variant: TextFieldVariant, maxLength?: number) {
  return variant === 'bigGoal' ? (maxLength ?? BIG_GOAL_MAX_LENGTH) : undefined;
}

function getEffectivePlaceholder(variant: TextFieldVariant, placeholder?: string) {
  return placeholder ?? DEFAULT_PLACEHOLDER[variant];
}

function getClearButtonStyle(variant: TextFieldVariant) {
  return variant === 'bigGoal' ? styles.clearButton : styles.clearButtonSmall;
}

function createInputChangeHandler(onChange: (value: string) => void, maxLength?: number) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (maxLength && newValue.length > maxLength) {
      return;
    }
    onChange(newValue);
  };
}

function createEnterKeyHandler(isComposing: boolean) {
  return (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isComposing) {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.blur();
    }
  };
}

function createClearButtonHandler(
  onChange: (value: string) => void,
  inputRef: React.RefObject<HTMLInputElement | null>,
) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onChange('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
}

function createContainerClickHandler(
  disabled: boolean,
  inputRef: React.RefObject<HTMLInputElement | null>,
) {
  return () => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  };
}

// 메인 컴포넌트
const TextField = (props: TextFieldProps) => {
  const { variant = 'bigGoal', value, onChange, placeholder, maxLength, disabled = false } = props;

  // 상태 관리
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasValue = Boolean(value);
  const currentState = useMemo(
    () => determineTextFieldState({ isFocused, isHovered, hasValue }),
    [isFocused, isHovered, hasValue],
  );

  const wrapperClass = useMemo(
    () => getWrapperStyleClass(variant, currentState),
    [variant, currentState],
  );
  const inputFont = getInputFontStyle(variant, currentState);
  const textColor = getTextColor(currentState);
  const effectiveMaxLength = getEffectiveMaxLength(variant, maxLength);
  const effectivePlaceholder = getEffectivePlaceholder(variant, placeholder);
  const clearButtonClass = getClearButtonStyle(variant);

  const handleInputChange = createInputChangeHandler(onChange, effectiveMaxLength);
  const handleKeyDown = createEnterKeyHandler(isComposing);
  const handleClear = createClearButtonHandler(onChange, inputRef);
  const handleContainerClick = createContainerClickHandler(disabled, inputRef);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleCompositionStart = () => setIsComposing(true);
  const handleCompositionEnd = () => setIsComposing(false);

  const handleMouseEnter = () => !disabled && setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleWrapperKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleContainerClick();
    }
  };

  return (
    <div
      className={wrapperClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleContainerClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleWrapperKeyDown}
    >
      <input
        ref={inputRef}
        className={styles.inputBase}
        value={value}
        onChange={handleInputChange}
        placeholder={effectivePlaceholder}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        maxLength={effectiveMaxLength}
        style={{
          ...inputFont,
          color: textColor,
          textAlign: 'left',
          width: '100%',
          height: '100%',
          flex: 1,
          background: 'transparent',
          border: 'none',
          outline: 'none',
        }}
      />
      {currentState === 'typing' && (
        <button
          type="button"
          onClick={handleClear}
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
