import { useState, useEffect, useRef, useCallback } from 'react';

export default function useTypingAnimation(text, { speed = 40, chunkSize = 3, autoStart = true } = {}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  const skipToEnd = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setDisplayedText(text);
    setIsTyping(false);
    indexRef.current = text.length;
  }, [text]);

  useEffect(() => {
    if (!autoStart || !text) return;

    indexRef.current = 0;
    setDisplayedText('');
    setIsTyping(true);

    timerRef.current = setInterval(() => {
      indexRef.current = Math.min(indexRef.current + chunkSize, text.length);
      setDisplayedText(text.slice(0, indexRef.current));

      if (indexRef.current >= text.length) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setIsTyping(false);
      }
    }, speed);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [text, speed, chunkSize, autoStart]);

  return { displayedText, isTyping, skipToEnd };
}
