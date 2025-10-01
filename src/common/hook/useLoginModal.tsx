import { useEffect } from 'react';

import { useOverlayModal } from '@/common/hook/useOverlayModal';
import { useAuthStore } from '@/store/useAuthStore';
import LoginModal from '@/common/component/LoginModal/LoginModal';

export const useLoginModal = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { openModal, closeModal } = useOverlayModal();

  useEffect(() => {
    if (!isLoggedIn) {
      openModal(<LoginModal onClose={closeModal} />);
    }
  }, [isLoggedIn, openModal, closeModal]);
};
