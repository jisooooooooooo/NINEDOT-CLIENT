import { useFadeInOnView } from '@/page/home/hook/useFadeInOnView';

export const useMultipleFadeInOnView = () => {
  const refs = [
    useFadeInOnView<HTMLDivElement>(),
    useFadeInOnView<HTMLDivElement>(),
    useFadeInOnView<HTMLDivElement>(),
  ];
  return refs;
};
