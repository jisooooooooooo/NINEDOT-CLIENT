import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGoogleAuth } from '@/common/hook/useGoogleAuth';
import { PATH } from '@/route';

const GoogleCallback = () => {
  const userData = useGoogleAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      return;
    }

    console.log('userData 있음:', userData);
    navigate(PATH.SIGNUP, {
      state: { userData },
    });
  }, [userData, navigate]);
};

export default GoogleCallback;
