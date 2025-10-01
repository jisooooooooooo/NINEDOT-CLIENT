import { useState } from 'react';

export type MandalViewType = 'onlygoal' | 'whole';

export const useMandalView = () => {
  const [viewType, setViewType] = useState<MandalViewType>('whole');

  const handleViewChange = (type: MandalViewType) => {
    setViewType(type);
  };

  return {
    viewType,
    handleViewChange,
  };
};
