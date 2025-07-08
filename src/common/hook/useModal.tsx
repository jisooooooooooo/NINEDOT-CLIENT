import { useCallback, useState } from 'react';

import Modal from '../component/Modal/Modal';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = useCallback((modalContent: React.ReactNode) => {
    setContent(modalContent);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  const ModalWrapper = isOpen ? <Modal onClose={closeModal}>{content}</Modal> : null;

  return { openModal, closeModal, ModalWrapper };
};
