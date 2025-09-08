import React, { useRef } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { overlay } from 'overlay-kit';

import Modal from '@/common/component/Modal/Modal';

type Closeable = { onClose: () => void };
type OpenOptions = { withWrapper?: boolean };

export const useOverlayModal = () => {
  const idsRef = useRef<string[]>([]);

  const openModal = (node: ReactNode, options: OpenOptions = {}) => {
    const { withWrapper = true } = options;

    const id = overlay.open(({ unmount }) => {
      const handleClose = () => unmount();
      const content = React.isValidElement(node)
        ? React.cloneElement(node as ReactElement<Partial<Closeable>>, { onClose: handleClose })
        : node;
      return withWrapper ? <Modal onClose={handleClose}>{content}</Modal> : <>{content}</>;
    });

    idsRef.current.push(id);
    return { id, close: () => overlay.unmount(id) };
  };

  const closeModal = () => {
    const id = idsRef.current.pop();
    if (id) {
      overlay.unmount(id);
    }
  };

  const closeAll = () => {
    while (idsRef.current.length) {
      const id = idsRef.current.pop()!;
      overlay.unmount(id);
    }
  };

  return { openModal, closeModal, closeAll };
};
