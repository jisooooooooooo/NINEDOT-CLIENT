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

    const { exists, onboardingPage } = userData;

    if (!exists) {
      navigate(PATH.SIGNUP, {
        state: { userData },
      });
      return;
    }

    if (onboardingPage === 'ONBOARDING_COMPLETED') {
      navigate(PATH.MANDAL);
    } else {
      navigate(PATH.INTRO, { state: { pageState: onboardingPage } });
    }
  }, [userData, navigate]);

  return null;
};

export default GoogleCallback;
