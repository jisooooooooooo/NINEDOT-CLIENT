import { useEffect, useRef, useState } from 'react';

const useTypingEffect = (fullText: string, duration: number) => {
  const [displayedText, setDisplayedText] = useState('');
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const charArray = Array.from(fullText);
    const totalChars = charArray.length;

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = duration <= 0 ? 1 : Math.min(elapsed / duration, 1);
      const charsToShow = Math.round(progress * totalChars);

      setDisplayedText(charArray.slice(0, charsToShow).join(''));

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(step);
      }
    };

    rafIdRef.current = requestAnimationFrame(step);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [fullText, duration]);

  return displayedText;
};

export default useTypingEffect;
