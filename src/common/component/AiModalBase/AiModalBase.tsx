import clsx from 'clsx';
import type { ReactNode } from 'react';

import * as styles from './AiModalBase.css';

import { IcModalDelete } from '@/assets/svg';

interface AiModalBaseProps {
  onClose: () => void;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  titleId?: string;
  footer?: ReactNode;
}

const AiModalBase = ({
  onClose,
  title,
  description,
  children,
  titleClassName,
  descriptionClassName,
  titleId = 'ai-modal-title',
  footer,
}: AiModalBaseProps) => {
  return (
    <div className={styles.container} role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className={styles.iconWrapper}>
        <IcModalDelete className={styles.closeIcon} onClick={onClose} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <h2 id={titleId} className={clsx(styles.title, titleClassName)}>
            {title}
          </h2>
          {description ? (
            <p className={clsx(styles.description, descriptionClassName)}>{description}</p>
          ) : null}
        </div>
        {children}
        {footer ? <div className={styles.footerWrapper}>{footer}</div> : null}
      </div>
    </div>
  );
};

export default AiModalBase;
