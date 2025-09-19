import { useEffect, useState } from 'react';

const readMandalartId = () => {
  if (typeof window === 'undefined') {
    return 0;
  }
  const value = localStorage.getItem('mandalartId');
  return value ? Number(value) : 0;
};

export const useMandalartId = () => {
  const [mandalartId, setMandalartId] = useState(0);

  useEffect(() => {
    const syncMandalartId = () => setMandalartId(readMandalartId());

    syncMandalartId();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'mandalartId') {
        syncMandalartId();
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return mandalartId;
};
