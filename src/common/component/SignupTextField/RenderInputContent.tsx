import React from 'react';

import IcSmallTextdelete from '@/assets/svg/IcSmallTextdelete';
import IcLock from '@/assets/svg/IcLock';

interface RenderInputContentProps {
  fieldState: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  value: string;
  isLocked: boolean;
  handleClearClick: (e: React.MouseEvent) => void;
  styles: typeof import('./SignupTextField.css');
}

export function RenderInputContent({
  fieldState,
  inputProps,
  value,
  isLocked,
  handleClearClick,
  styles,
}: RenderInputContentProps) {
  if (fieldState === 'typing' || fieldState === 'error') {
    return (
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
    );
  }
  if (fieldState === 'locked') {
    return (
      <div className={styles.inputContent}>
        <input {...inputProps} />
        <IcLock className={styles.lockIconClass} />
      </div>
    );
  }
  return <input {...inputProps} />;
}
