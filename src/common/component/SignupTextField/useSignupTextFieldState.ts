import { useReducer, useRef, useCallback } from 'react';

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

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FOCUS': {
      return { ...state, isFocused: true };
    }
    case 'BLUR': {
      return { ...state, isFocused: false };
    }
    case 'HOVER_ENTER': {
      return { ...state, isHovered: true };
    }
    case 'HOVER_LEAVE': {
      return { ...state, isHovered: false };
    }
    case 'COMPOSE_START': {
      return { ...state, isComposing: true };
    }
    case 'COMPOSE_END': {
      return { ...state, isComposing: false };
    }
    default: {
      return state;
    }
  }
}

export function useSignupTextFieldState({ onChange }: { onChange: (value: string) => void }) {
  const [state, dispatch] = useReducer(reducer, {
    isFocused: false,
    isHovered: false,
    isComposing: false,
  });
  const inputRef = useRef<HTMLInputElement>(null);

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
    if (inputRef.current) {
      inputRef.current.focus();
      const len = inputRef.current.value.length ?? 0;
      inputRef.current.setSelectionRange(len, len);
    }
  }, []);

  const handleWrapperKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleWrapperClick();
      }
    },
    [handleWrapperClick],
  );

  return {
    state,
    dispatch,
    inputRef,
    handleKeyDown,
    handleClearClick,
    handleWrapperClick,
    handleWrapperKeyDown,
  };
}
