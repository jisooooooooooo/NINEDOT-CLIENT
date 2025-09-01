import { useEffect, useRef, useState } from 'react';

const useTypingEffect = (fullText: string, duration: number) => {
  const [displayedText, setDisplayedText] = useState('');
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const charArray = Array.from(fullText);
    const totalChars = charArray.length;
    let isMounted = true;

    const step = (timestamp: number) => {
      if (!isMounted) {
        return;
      }
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(duration === 0 ? 1 : elapsed / duration, 1);
      const charsToShow = Math.floor(progress * totalChars);

      setDisplayedText(charArray.slice(0, charsToShow).join(''));

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(step);
      }
    };

    rafIdRef.current = requestAnimationFrame(step);

    return () => {
      isMounted = false;
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [fullText, duration]);

  return displayedText;
};

export default useTypingEffect;
