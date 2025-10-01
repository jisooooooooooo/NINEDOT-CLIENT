import type { ReactNode } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

type CommitReason = 'enter' | 'blur';

export interface BaseTextFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onCommit?: (value: string, reason: CommitReason) => void;
  onClear?: () => void;
  maxLength?: number;
  disabled?: boolean;
  invalid?: boolean;
  children: (args: {
    inputProps: React.ComponentPropsWithRef<'input'>;
    hasValue: boolean;
    isFocused: boolean;
    isComposing: boolean;
    length: number;
    remainingLength?: number;
    clear: () => void;
    commit: (reason: CommitReason) => void;
  }) => ReactNode;
}

const BaseTextField = ({
  id,
  value,
  onChange,
  onCommit,
  onClear,
  maxLength,
  disabled,
  invalid,
  children,
}: BaseTextFieldProps) => {
  const [isComposing, setIsComposing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const lastCommittedRef = useRef<string | null>(null);
  const skipBlurOnceRef = useRef(false);

  const isDisabled = !!disabled;

  const hasValue = Boolean(value);
  const length = value.length;
  const remainingLength =
    typeof maxLength === 'number' ? Math.max(0, maxLength - length) : undefined;

  const commit = useCallback(
    (reason: CommitReason) => {
      if (lastCommittedRef.current === value) {
        return;
      }
      onCommit?.(value, reason);
      lastCommittedRef.current = value;
    },
    [onCommit, value],
  );

  const clear = useCallback(() => {
    onChange('');
    if (onClear) {
      onClear();
    }
  }, [onChange, onClear]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled) {
        return;
      }
      const raw = e.target.value;
      onChange(raw);
    },
    [isDisabled, onChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const nativeEvent = e.nativeEvent as unknown as { isComposing?: boolean };
      const nativeComposing = Boolean(nativeEvent?.isComposing);
      if (e.key === 'Enter' && !isComposing && !nativeComposing) {
        e.preventDefault();
        e.stopPropagation();
        skipBlurOnceRef.current = true;
        commit('enter');
        e.currentTarget.blur?.();
        return;
      }
    },
    [isComposing, commit],
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    if (isComposing || skipBlurOnceRef.current) {
      skipBlurOnceRef.current = false;
      return;
    }
    commit('blur');
  }, [isComposing, commit]);

  const handleCompositionStart = useCallback(() => {
    setIsComposing(true);
  }, []);

  const handleCompositionEnd = useCallback(() => {
    setIsComposing(false);
  }, []);

  const inputProps = useMemo(() => {
    const base: React.ComponentPropsWithRef<'input'> = {
      id,
      value,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onCompositionStart: handleCompositionStart,
      onCompositionEnd: handleCompositionEnd,
      maxLength: typeof maxLength === 'number' ? maxLength : undefined,
      readOnly: isDisabled,
      'aria-readonly': isDisabled,
      'aria-invalid': invalid || undefined,
    };
    return base;
  }, [
    id,
    value,
    isDisabled,
    invalid,
    handleChange,
    handleKeyDown,
    handleFocus,
    handleBlur,
    handleCompositionStart,
    handleCompositionEnd,
    maxLength,
  ]);

  return (
    <>
      {children({
        inputProps,
        hasValue,
        isFocused,
        isComposing,
        length,
        remainingLength,
        clear,
        commit,
      })}
    </>
  );
};

export default BaseTextField;
