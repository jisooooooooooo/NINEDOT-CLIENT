import React, { useRef } from 'react';
import type { ReactNode } from 'react';
import { overlay } from 'overlay-kit';

import Modal from '@/common/component/Modal/Modal';

export const useOverlayModal = () => {
  const lastIdRef = useRef<string | null>(null);

  const openModal = (node: ReactNode) => {
    const id = overlay.open(({ unmount }) => {
      const handleClose = () => unmount();
      const content = React.isValidElement(node)
        ? React.cloneElement(node as any, { onClose: handleClose })
        : node;
      return <Modal onClose={handleClose}>{content}</Modal>;
    });
    lastIdRef.current = id;
  };

  const closeModal = () => {
    if (lastIdRef.current) {
      overlay.unmount(lastIdRef.current);
      lastIdRef.current = null;
    }
  };

  return { openModal, closeModal };
};
