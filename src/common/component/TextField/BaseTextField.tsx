import type { ReactNode, Ref } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

type CommitReason = 'enter' | 'blur';

export interface BaseTextFieldProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  onCommit?: (value: string, reason: CommitReason) => void;
  onClear?: () => void;
  maxLength?: number;
  locked?: boolean;
  invalid?: boolean;
  ref?: Ref<HTMLInputElement>;
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
  locked,
  invalid,
  ref: externalRef,
  children,
}: BaseTextFieldProps) => {
  const [isComposing, setIsComposing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const lastCommittedRef = useRef<string | null>(null);
  const skipBlurOnceRef = useRef(false);
  const localRef = useRef<HTMLInputElement>(null);

  const isLocked = !!locked;
  const trimToMaxLength = (v: string, max?: number) =>
    typeof max === 'number' && v.length > max ? v.slice(0, max) : v;

  const hasValue = Boolean(value);
  const length = value.length;
  const remainingLength =
    typeof maxLength === 'number' ? Math.max(0, maxLength - length) : undefined;

  const commit = useCallback(
    (reason: CommitReason) => {
      if (lastCommittedRef.current === value) return;
      onCommit?.(value, reason);
      lastCommittedRef.current = value;
    },
    [onCommit, value],
  );

  const clear = useCallback(() => {
    onChange('');
    if (onClear) onClear();
  }, [onChange, onClear]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isLocked) return;
      const raw = e.target.value;
      const next = isComposing ? raw : trimToMaxLength(raw, maxLength);
      onChange(next);
    },
    [isLocked, isComposing, maxLength, onChange],
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
    if (typeof maxLength === 'number') {
      const current = localRef.current?.value ?? '';
      const trimmed = trimToMaxLength(current, maxLength);
      if (trimmed !== current) {
        onChange(trimmed);
      }
    }
  }, [maxLength, onChange]);

  const inputProps = useMemo(() => {
    const assignRef = (node: HTMLInputElement | null) => {
      localRef.current = node;
      if (typeof externalRef === 'function') externalRef(node);
      else if (externalRef && typeof externalRef === 'object') {
        (externalRef as { current: HTMLInputElement | null }).current = node;
      }
    };

    const base: React.ComponentPropsWithRef<'input'> = {
      ref: assignRef,
      id,
      value,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onCompositionStart: handleCompositionStart,
      onCompositionEnd: handleCompositionEnd,
      readOnly: isLocked,
      'aria-readonly': isLocked,
      'aria-disabled': undefined,
      'aria-invalid': invalid || undefined,
    };
    return base;
  }, [
    externalRef,
    id,
    value,
    isLocked,
    invalid,
    handleChange,
    handleKeyDown,
    handleFocus,
    handleBlur,
    handleCompositionStart,
    handleCompositionEnd,
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
