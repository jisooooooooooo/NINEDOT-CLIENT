import { useReducer, useRef, useState, useEffect, useCallback } from 'react';

import type { SignupTextFieldProps } from './SignupTextField.types';
import * as styles from './SignupTextField.css';

import IcSmallTextdelete from '@/assets/svg/IcSmallTextdelete';
import IcLock from '@/assets/svg/IcLock';

const NAME_MAX_LENGTH = 10;
const BIRTH_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const ERROR_MESSAGES = {
  name: '한글/영문 10자 이하로 입력해주세요',
  birth: '정확한 생년월일을 입력해주세요',
} as const;

const INPUT_VARIANTS_WITH_CONTENT = ['locked'] as const;

const getFieldState = (
  isFocused: boolean,
  hasValue: boolean,
  isHovered: boolean,
  error: boolean,
  isLocked: boolean,
): keyof typeof styles.fieldVariants => {
  if (isLocked) {
    return 'locked';
  }
  if (error) {
    return 'error';
  }
  if (isFocused && hasValue) {
    return 'typing';
  }
  if (isFocused && !hasValue) {
    return 'clicked';
  }
  if (!isFocused && hasValue) {
    return 'completed';
  }
  if (isHovered) {
    return 'clicked';
  }
  return 'default';
};

interface State {
  isFocused: boolean;
  isHovered: boolean;
  isComposing: boolean;
}

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

const validateField = (type: SignupTextFieldProps['type'], value: string): string | undefined => {
  if (type === 'name' && value.length > NAME_MAX_LENGTH) {
    return ERROR_MESSAGES.name;
  }
  if (type === 'birth' && !BIRTH_REGEX.test(value)) {
    return ERROR_MESSAGES.birth;
  }
  return undefined;
};

const createInputProps = (
  inputRef: React.RefObject<HTMLInputElement | null>,
  value: string,
  onChange: (value: string) => void,
  placeholder: string | undefined,
  maxLength: number | undefined,
  isLocked: boolean,
  dispatch: React.Dispatch<Action>,
  onFocus: (() => void) | undefined,
  onBlur: (() => void) | undefined,
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
) => ({
  ref: inputRef,
  type: 'text' as const,
  value,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isLocked) {
      onChange(e.target.value);
    }
  },
  onFocus: () => {
    dispatch({ type: 'FOCUS' });
    onFocus?.();
  },
  onBlur: () => {
    dispatch({ type: 'BLUR' });
    onBlur?.();
  },
  onKeyDown: handleKeyDown,
  onCompositionStart: () => dispatch({ type: 'COMPOSE_START' }),
  onCompositionEnd: () => dispatch({ type: 'COMPOSE_END' }),
  placeholder,
  maxLength,
  disabled: isLocked,
  className: [styles.inputBase, styles.inputStyle].join(' '),
});

export default function SignupTextField({
  type,
  value,
  onChange,
  placeholder,
  error: externalError,
  onBlur,
  onFocus,
  maxLength,
}: SignupTextFieldProps) {
  const [state, dispatch] = useReducer(reducer, {
    isFocused: false,
    isHovered: false,
    isComposing: false,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [shouldFocus, setShouldFocus] = useState(false);

  const isLocked = type === 'email';
  const error = externalError || validateField(type, value);
  const hasValue = Boolean(value);
  const fieldState = getFieldState(state.isFocused, hasValue, state.isHovered, !!error, isLocked);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !state.isComposing) {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.blur();
      }
    },
    [state.isComposing],
  );

  const handleClearClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onChange('');
      setTimeout(() => inputRef.current?.focus(), 0);
    },
    [onChange],
  );

  const handleWrapperClick = useCallback(() => {
    if (!isLocked && fieldState === 'completed') {
      dispatch({ type: 'FOCUS' });
      inputRef.current?.focus();
      const len = inputRef.current?.value.length ?? 0;
      inputRef.current?.setSelectionRange(len, len);
    } else if (!isLocked) {
      inputRef.current?.focus();
      const len = inputRef.current?.value.length ?? 0;
      inputRef.current?.setSelectionRange(len, len);
    }
  }, [isLocked, fieldState]);

  const handleWrapperKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isLocked && e.key === 'Enter') {
        e.preventDefault();
        handleWrapperClick();
      }
    },
    [isLocked, fieldState],
  );

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
      const len = inputRef.current.value.length;
      inputRef.current.setSelectionRange(len, len);
      setShouldFocus(false);
    }
  }, [shouldFocus]);

  const wrapperProps = isLocked
    ? { tabIndex: -1 as const }
    : {
        role: 'button' as const,
        tabIndex: 0 as const,
        onClick: handleWrapperClick,
        onKeyDown: handleWrapperKeyDown,
        onMouseEnter: () => dispatch({ type: 'HOVER_ENTER' }),
        onMouseLeave: () => dispatch({ type: 'HOVER_LEAVE' }),
      };

  const inputProps = createInputProps(
    inputRef,
    value,
    onChange,
    placeholder,
    maxLength,
    isLocked,
    dispatch,
    onFocus,
    onBlur,
    handleKeyDown,
  );

  const needsInputContent = INPUT_VARIANTS_WITH_CONTENT.includes(
    fieldState as (typeof INPUT_VARIANTS_WITH_CONTENT)[number],
  );

  return (
    <div className={error ? styles.errorMessageWrapper : undefined}>
      <div
        className={[styles.baseClass, styles.fieldVariants[fieldState]].join(' ')}
        {...wrapperProps}
      >
        {(fieldState === 'typing' || fieldState === 'error') ? (
          <>
            <input {...inputProps} />
            {value && !isLocked && (
              <button
                type="button"
                onClick={handleClearClick}
                onMouseDown={(e) => e.preventDefault()}
                tabIndex={-1}
                className={styles.clearButton}
                aria-label="입력값 삭제"
              >
                <IcSmallTextdelete className={styles.iconClass} />
              </button>
            )}
          </>
        ) : needsInputContent ? (
          <div className={styles.inputContent}>
            <input {...inputProps} />
            {fieldState === 'locked' && <IcLock className={styles.lockIconClass} />}
          </div>
        ) : (
          <input {...inputProps} />
        )}
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}
