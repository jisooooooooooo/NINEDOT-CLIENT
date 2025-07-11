import React from 'react';

import { IcMediumTextdelete } from '@/assets/svg';

import type { ModifyTextFieldProps, ModifyTextFieldVariant } from './ModifyTextField.types';
import * as styles from './ModifyTextField.css';
import { useModifyTextFieldState } from './useModifyTextFieldState';

// ====== 상수 정의 ======
const DEFAULT_PLACEHOLDER = {
  subGoal: '세부 목표를 입력해주세요',
  todo: '할 일을 입력해주세요',
} as const;

// ====== 타입 정의 ======
type FieldState = 'filled' | 'empty' | 'modify_empty' | 'modify_hover' | 'modify_clicked' | 'modify_typing' | 'modify_filled';

// ====== 상태 결정 함수들 ======
function getSubGoalFieldState(isFocused: boolean, hasValue: boolean): 'filled' | 'empty' {
  return hasValue ? 'filled' : 'empty';
}

function getTodoFieldState(isFocused: boolean, isHovered: boolean, hasValue: boolean): 'modify_empty' | 'modify_hover' | 'modify_clicked' | 'modify_typing' | 'modify_filled' {
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
function getWrapperClass(variant: ModifyTextFieldVariant, fieldState: FieldState) {
  if (variant === 'subGoal') {
    return styles.subGoalVariants[fieldState as 'filled' | 'empty'];
  }
  return styles.todoVariants[fieldState as 'modify_empty' | 'modify_hover' | 'modify_clicked' | 'modify_typing' | 'modify_filled'];
}

// ====== 플레이스홀더 결정 함수 ======
function getPlaceholder(variant: ModifyTextFieldVariant, placeholder?: string) {
  return placeholder ?? DEFAULT_PLACEHOLDER[variant];
}

// ====== 입력 필드 속성 생성 함수 ======
function createInputProps({
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
  dispatch: (action: any) => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  return {
    type: 'text' as const,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
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
    disabled,
    className: styles.inputBase,
  };
}

// ====== 래퍼 속성 생성 함수 ======
function createWrapperProps({
  disabled,
  handleWrapperClick,
  handleWrapperKeyDown,
  dispatch,
  isFocused,
}: {
  disabled?: boolean;
  handleWrapperClick: () => void;
  handleWrapperKeyDown: (e: React.KeyboardEvent) => void;
  dispatch: (action: any) => void;
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

// ====== 삭제 버튼 컴포넌트 ======
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



// ====== 메인 컴포넌트 ======
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
  
  // ====== 필드 상태 결정 ======
  const fieldState = variant === 'subGoal' 
    ? getSubGoalFieldState(state.isFocused, hasValue)
    : getTodoFieldState(state.isFocused, state.isHovered, hasValue);

  const wrapperClass = getWrapperClass(variant, fieldState);
  const effectivePlaceholder = getPlaceholder(variant, placeholder);
  
  const inputProps = createInputProps({
    value,
    onChange,
    onFocus,
    onBlur,
    handleKeyDown,
    dispatch,
    placeholder: effectivePlaceholder,
    disabled,
  });

  const wrapperProps = createWrapperProps({
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