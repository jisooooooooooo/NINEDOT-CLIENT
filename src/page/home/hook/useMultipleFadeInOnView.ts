import { useFadeInOnView } from '@/page/home/hook/useFadeInOnView';

export const useMultipleFadeInOnView = (count: number) => {
  return Array.from({ length: count }, () => useFadeInOnView<HTMLDivElement>());
};
