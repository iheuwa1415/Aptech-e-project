import { useState, useEffect } from 'react';

const BREAKPOINT = 768;

export const useDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...windowSize, isMobile: windowSize.width < BREAKPOINT };
};
