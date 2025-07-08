import { useState, useRef, useCallback } from 'react';
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

type FieldState = 'default' | 'clicked' | 'typing' | 'filled' | 'hover';

const getFieldState = (isFocused: boolean, isHovered: boolean, hasValue: boolean): FieldState => {
  if (isFocused) return hasValue ? 'typing' : 'clicked';
  if (hasValue) return 'filled';
  if (isHovered) return 'hover';
  return 'default';
};

const getWrapperClass = (variant: TextFieldVariant, state: FieldState) => {
  const variantStyles: Record<TextFieldVariant, Record<FieldState, string>> = {
    bigGoal: styles.bigGoalVariants,
    subGoal: styles.subGoalVariants,
    todo: styles.todoVariants,
  };
  return variantStyles[variant][state];
};

const getInputFont = (variant: TextFieldVariant, state: FieldState) => {
  if (variant === 'bigGoal') return fonts.title01;
  const baseFont = fonts.subtitle03;
  return state === 'filled' ? { ...baseFont, fontWeight: fonts.subtitle02.fontWeight } : baseFont;
};

const getTextColor = (state: FieldState) =>
  state === 'filled' || state === 'typing' ? colors.grey10 : colors.grey6;

const getClearButtonClass = (variant: TextFieldVariant) =>
  variant === 'bigGoal' ? styles.clearButton : styles.clearButtonSmall;

const getMaxLength = (variant: TextFieldVariant, maxLength?: number) =>
  variant === 'bigGoal' ? maxLength ?? BIG_GOAL_MAX_LENGTH : undefined;

const getPlaceholder = (variant: TextFieldVariant, placeholder?: string) =>
  placeholder ?? DEFAULT_PLACEHOLDER[variant];

// rafce 패턴 적용, fragment 사용
const TextField = ({
  variant = 'bigGoal',
  value,
  onChange,
  placeholder,
  maxLength,
  disabled = false,
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasValue = Boolean(value);
  const fieldState = getFieldState(isFocused, isHovered, hasValue);

  const wrapperClass = getWrapperClass(variant, fieldState);
  const inputFont = getInputFont(variant, fieldState);
  const textColor = getTextColor(fieldState);
  const clearButtonClass = getClearButtonClass(variant);
  const effectiveMaxLength = getMaxLength(variant, maxLength);
  const effectivePlaceholder = getPlaceholder(variant, placeholder);

  // 이벤트 핸들러 네이밍 컨벤션 적용
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (effectiveMaxLength && newValue.length > effectiveMaxLength) return;
      onChange(newValue);
    },
    [onChange, effectiveMaxLength]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !isComposing) {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.blur();
      }
    },
    [isComposing]
  );

  const handleClearClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onChange('');
      setTimeout(() => inputRef.current?.focus(), 0);
    },
    [onChange]
  );

  const handleContainerClick = useCallback(() => {
    if (!disabled) inputRef.current?.focus();
  }, [disabled]);

  const handleWrapperKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleContainerClick();
      }
    },
    [handleContainerClick]
  );

  return (
    <>
      <div
        className={wrapperClass}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleContainerClick}
        onKeyDown={handleWrapperKeyDown}
        role="button"
        tabIndex={0}
      >
        <input
          ref={inputRef}
          className={styles.inputBase}
          value={value}
          onChange={handleInputChange}
          placeholder={effectivePlaceholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
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
    </>
  );
};

export default TextField;
