import React, { useRef } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { overlay } from 'overlay-kit';

import Modal from '@/common/component/Modal/Modal';

type Closeable = { onClose: () => void };
type OpenOptions = { withWrapper?: boolean };

const hasOnCloseProp = (props: unknown): props is { onClose: unknown } => {
  return (
    typeof props === 'object' && props !== null && 'onClose' in (props as Record<string, unknown>)
  );
};

const isCloseable = (element: ReactNode): element is ReactElement<Closeable> => {
  return (
    React.isValidElement(element) &&
    hasOnCloseProp(element.props) &&
    typeof element.props.onClose === 'function'
  );
};

export const useOverlayModal = () => {
  const lastIdRef = useRef<string | null>(null);

  const removeLastId = (id: string) => {
    if (lastIdRef.current === id) {
      lastIdRef.current = null;
    }
  };

  const openModal = (node: ReactNode, options: OpenOptions = {}) => {
    const { withWrapper = true } = options;

    const id = overlay.open(({ unmount }) => {
      const handleClose = () => {
        unmount();
        removeLastId(id);
      };
      const content = isCloseable(node) ? React.cloneElement(node, { onClose: handleClose }) : node;
      return withWrapper ? <Modal onClose={handleClose}>{content}</Modal> : <>{content}</>;
    });

    lastIdRef.current = id;
    return {
      id,
      close: () => {
        overlay.unmount(id);
        removeLastId(id);
      },
    };
  };

  const closeModal = () => {
    const id = lastIdRef.current;
    if (!id) {
      return;
    }
    overlay.unmount(id);
    removeLastId(id);
  };

  return { openModal, closeModal };
};
