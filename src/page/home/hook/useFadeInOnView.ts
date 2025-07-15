import { useEffect, useRef, useState } from 'react';

type FadeInProps = {
  threshold?: number;
  rootMargin?: string;
};

export const useFadeInOnView = <T extends HTMLElement>({
  threshold = 0.3,
  rootMargin = '0px 0px -20% 0px',
}: FadeInProps = {}) => {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold,
      rootMargin,
    });

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, visible };
};
