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

    const isExistingUser = userData.exists;

    if (isExistingUser) {
      navigate(PATH.INTRO, {
        state: { isWritten: userData.onboardingCompleted },
      });
    } else {
      navigate(PATH.SIGNUP, {
        state: { userData },
      });
    }
  }, [userData, navigate]);

  return null;
};

export default GoogleCallback;
