import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGoogleAuth } from '@/common/hook/useGoogleAuth';
import { PATH } from '@/route';

const GoogleCallback = () => {
  const userData = useGoogleAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate(PATH.SIGNUP);
    }
  }, [userData, navigate]);

  return null;
};

export default GoogleCallback;
