import { useEffect, useState } from 'react';

export const useMandalartId = () => {
  const [mandalartId, setMandalartId] = useState(0);

  useEffect(() => {
    const read = () => {
      const value = typeof window !== 'undefined' ? localStorage.getItem('mandalartId') : null;
      setMandalartId(value ? Number(value) : 0);
    };

    read();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'mandalartId') {
        read();
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return mandalartId;
};
