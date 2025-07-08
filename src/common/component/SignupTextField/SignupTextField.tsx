import { useReducer, useRef, useState, useEffect } from 'react';
import type { SignupTextFieldProps } from './SignupTextField.types';
import * as styles from './SignupTextField.css';
import IcSmallTextdelete from '@/assets/svg/IcSmallTextdelete';
import IcLock from '@/assets/svg/IcLock';

const getFieldState = (
  isFocused: boolean,
  hasValue: boolean,
  isHovered: boolean,
  error: boolean,
  isLocked: boolean
) => {
  if (isLocked) return 'locked';
  if (error) return 'error';
  if (isFocused && hasValue) return 'typing';
  if (isFocused && !hasValue) return 'clicked';
  if (!isFocused && hasValue) return 'completed';
  if (isHovered) return 'clicked';
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

export default function SignupTextField({
  type,
  value,
  onChange,
  placeholder,
  error: externalError,
  disabled,
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

  let error: string | undefined = externalError;
  if (type === 'name') {
    if (value.length > 10) error = '한글/영문 10자 이하로 입력해주세요';
  }
  if (type === 'birth') {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) error = '정확한 생년월일을 입력해주세요';
  }

  const hasValue = Boolean(value);
  const fieldState = getFieldState(state.isFocused, hasValue, state.isHovered, !!error, isLocked);
  const variant: keyof typeof styles.fieldVariants = fieldState as any;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isLocked) onChange(e.target.value);
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
  const handleWrapperClick = () => {
    if (!isLocked && variant === 'completed') {
      dispatch({ type: 'FOCUS' });
      setShouldFocus(true);
    } else if (!isLocked) {
      inputRef.current?.focus();
      const len = inputRef.current?.value.length ?? 0;
      inputRef.current?.setSelectionRange(len, len);
    }
  };
  const handleWrapperKeyDown = (e: React.KeyboardEvent) => {
    if (!isLocked && e.key === 'Enter') {
      e.preventDefault();
      handleWrapperClick();
    }
  };

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

  return (
    <div className={error ? styles.errorMessageWrapper : undefined}>
      <div
        className={[styles.baseClass, styles.fieldVariants[variant]].join(' ')}
        {...wrapperProps}
      >
        {['typing', 'locked', 'error', 'completed'].includes(variant) ? (
          <div className={styles.inputContent}>
            <input
              ref={inputRef}
              type={type === 'birth' ? 'text' : 'text'}
              value={value}
              onChange={handleInputChange}
              onFocus={() => {
                dispatch({ type: 'FOCUS' });
                onFocus?.();
              }}
              onBlur={e => {
                dispatch({ type: 'BLUR' });
                onBlur?.();
              }}
              onKeyDown={handleKeyDown}
              onCompositionStart={() => dispatch({ type: 'COMPOSE_START' })}
              onCompositionEnd={() => dispatch({ type: 'COMPOSE_END' })}
              placeholder={placeholder}
              maxLength={maxLength}
              disabled={isLocked}
              className={[styles.inputBase, styles.inputStyle].join(' ')}
            />
            {variant === 'typing' && value && !isLocked && (
              <button
                type="button"
                onClick={handleClearClick}
                onMouseDown={e => e.preventDefault()}
                tabIndex={-1}
                className={styles.clearButton}
                aria-label="입력값 삭제"
              >
                <IcSmallTextdelete className={styles.iconClass} />
              </button>
            )}
            {variant === 'locked' && <IcLock className={styles.lockIconClass} />}
          </div>
        ) : (
          <input
            ref={inputRef}
            type={type === 'birth' ? 'text' : 'text'}
            value={value}
            onChange={handleInputChange}
            onFocus={() => {
              dispatch({ type: 'FOCUS' });
              onFocus?.();
            }}
            onBlur={e => {
              dispatch({ type: 'BLUR' });
              onBlur?.();
            }}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => dispatch({ type: 'COMPOSE_START' })}
            onCompositionEnd={() => dispatch({ type: 'COMPOSE_END' })}
            placeholder={placeholder}
            maxLength={maxLength}
            disabled={isLocked}
            className={[styles.inputBase, styles.inputStyle].join(' ')}
          />
        )}
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
} 