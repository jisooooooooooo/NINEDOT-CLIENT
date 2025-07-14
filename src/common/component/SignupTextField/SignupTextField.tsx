import type { SignupTextFieldProps } from './SignupTextField.types';
import * as styles from './SignupTextField.css';
import { validateField } from './validation';
import { useSignupTextFieldState } from './useSignupTextFieldState';
import { RenderInputContent } from './RenderInputContent';

import { formatBirthDate } from '@/common/util/format';

function getFieldState(
  isFocused: boolean,
  hasValue: boolean,
  error: boolean,
  isLocked: boolean,
): keyof typeof styles.fieldVariants | 'typingError' {
  if (isLocked) {
    return 'locked';
  }
  if (isFocused && hasValue && error) {
    return 'typingError';
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
  return 'default';
}

export default function SignupTextField({
  id,
  type,
  value,
  onChange,
  placeholder,
  error: externalError,
  onBlur,
  onFocus,
}: SignupTextFieldProps) {
  const {
    state,
    dispatch,
    inputRef,
    handleKeyDown,
    handleClearClick,
    handleWrapperClick,
    handleWrapperKeyDown,
  } = useSignupTextFieldState({ onChange });

  const isLocked = type === 'email';
  const error =
    externalError ||
    (type === 'email' ? undefined : validateField(type as 'name' | 'birth' | 'job', value));
  const hasValue = Boolean(value);
  const fieldState = getFieldState(state.isFocused, hasValue, !!error, isLocked);

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

  function createInputProps() {
    return {
      id,
      ref: inputRef,
      type: 'text' as const,
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isLocked) {
          if (type === 'birth') {
            onChange(formatBirthDate(e.target.value));
          } else {
            onChange(e.target.value);
          }
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
      onCompositionEnd: (e: React.CompositionEvent<HTMLInputElement>) => {
        dispatch({ type: 'COMPOSE_END' });
        if (type === 'name' || type === 'job') {
          const filtered = e.currentTarget.value.replace(/[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, '');
          onChange(filtered);
        }
      },
      placeholder: placeholder ?? (type === 'job' ? '정보를 입력해주세요' : placeholder),
      disabled: isLocked,
      className: [styles.inputBase, styles.inputStyle].join(' '),
    };
  }

  const inputProps = createInputProps();

  return (
    <div className={error ? styles.errorMessageWrapper : undefined}>
      <div
        className={[
          styles.baseClass,
          styles.fieldVariants[fieldState === 'typingError' ? 'error' : fieldState],
        ].join(' ')}
        {...wrapperProps}
      >
        <RenderInputContent
          fieldState={fieldState}
          inputProps={inputProps}
          value={value}
          isLocked={isLocked}
          handleClearClick={handleClearClick}
          styles={styles}
        />
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}
