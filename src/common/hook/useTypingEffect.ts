import { useEffect, useState } from 'react';

const useTypingEffect = (fullText: string, duration: number) => {
  const [displayedText, setDisplayedText] = useState('');

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
      const progress = Math.min(elapsed / duration, 1);
      const charsToShow = Math.floor(progress * totalChars);

      setDisplayedText(charArray.slice(0, charsToShow).join(''));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const rafId = requestAnimationFrame(step);

    return () => {
      isMounted = false;
      cancelAnimationFrame(rafId);
    };
  }, [fullText, duration]);

  return displayedText;
};

export default useTypingEffect;
