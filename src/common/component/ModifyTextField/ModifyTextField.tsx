import type { ModifyTextFieldProps, ModifyTextFieldVariant } from './ModifyTextField.types';
import * as styles from './ModifyTextField.css';
import { useModifyTextFieldState, type Action } from './useModifyTextFieldState';

import { IcMediumTextdelete } from '@/assets/svg';

const DEFAULT_PLACEHOLDER: Record<ModifyTextFieldVariant, string> = {
  subGoal: '세부 목표를 입력해주세요',
  todo: '할 일을 입력해주세요',
};

// ====== 타입 정의 ======
type SubGoalFieldState = 'filled' | 'empty';
type TodoFieldState =
  | 'modify_empty'
  | 'modify_hover'
  | 'modify_clicked'
  | 'modify_typing'
  | 'modify_filled';

// ====== 상태 결정 함수 분리 ======
function getSubGoalFieldState(hasValue: boolean): SubGoalFieldState {
  return hasValue ? 'filled' : 'empty';
}

function getTodoFieldState(
  isFocused: boolean,
  isHovered: boolean,
  hasValue: boolean,
): TodoFieldState {
  if (isFocused) {
    return hasValue ? 'modify_typing' : 'modify_clicked';
  }
  if (hasValue) {
    return 'modify_filled';
  }
  if (isHovered) {
    return 'modify_hover';
  }
  return 'modify_empty';
}

// ====== 스타일 결정 함수 ======
function getWrapperClass(
  variant: ModifyTextFieldVariant,
  fieldState: SubGoalFieldState | TodoFieldState,
) {
  if (variant === 'subGoal') {
    return styles.subGoalVariants[fieldState as SubGoalFieldState];
  }
  return styles.todoVariants[fieldState as TodoFieldState];
}

function getPlaceholder(variant: ModifyTextFieldVariant, placeholder?: string) {
  return placeholder ?? DEFAULT_PLACEHOLDER[variant];
}

function getInputProps({
  value,
  onChange,
  onFocus,
  onBlur,
  handleKeyDown,
  dispatch,
  placeholder,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  dispatch: (action: Action) => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  return {
    type: 'text',
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
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
    disabled,
    className: styles.inputBase,
  };
}

function getWrapperProps({
  disabled,
  handleWrapperClick,
  handleWrapperKeyDown,
  dispatch,
  isFocused,
}: {
  disabled?: boolean;
  handleWrapperClick: () => void;
  handleWrapperKeyDown: (e: React.KeyboardEvent) => void;
  dispatch: (action: Action) => void;
  isFocused: boolean;
}) {
  return disabled
    ? { tabIndex: -1 as const }
    : {
        role: 'button' as const,
        tabIndex: 0 as const,
        onClick: isFocused ? undefined : handleWrapperClick,
        onKeyDown: handleWrapperKeyDown,
        onMouseEnter: () => dispatch({ type: 'HOVER_ENTER' }),
        onMouseLeave: () => dispatch({ type: 'HOVER_LEAVE' }),
      };
}

function ClearButton({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      aria-label="입력값 삭제"
      className={styles.clearButton}
    >
      <IcMediumTextdelete />
    </button>
  );
}

export default function ModifyTextField({
  variant = 'todo',
  value,
  onChange,
  placeholder,
  disabled = false,
  onBlur,
  onFocus,
}: ModifyTextFieldProps) {
  const {
    state,
    dispatch,
    inputRef,
    handleKeyDown,
    handleClearClick,
    handleWrapperClick,
    handleWrapperKeyDown,
  } = useModifyTextFieldState({ onChange });

  const hasValue = Boolean(value);
  const fieldState =
    variant === 'subGoal'
      ? getSubGoalFieldState(hasValue)
      : getTodoFieldState(state.isFocused, state.isHovered, hasValue);
  const wrapperClass = getWrapperClass(variant, fieldState);
  const effectivePlaceholder = getPlaceholder(variant, placeholder);
  const inputProps = getInputProps({
    value,
    onChange,
    onFocus,
    onBlur,
    handleKeyDown,
    dispatch,
    placeholder: effectivePlaceholder,
    disabled,
  });
  const wrapperProps = getWrapperProps({
    disabled,
    handleWrapperClick,
    handleWrapperKeyDown,
    dispatch,
    isFocused: state.isFocused,
  });
  const showClearButton = fieldState === 'modify_typing';

  return (
    <div className={wrapperClass} {...wrapperProps}>
      <div className={styles.inputContainer}>
        <input {...inputProps} ref={inputRef} />
        {showClearButton && <ClearButton onClick={handleClearClick} />}
      </div>
    </div>
  );
}
