import { useState, useEffect } from 'react';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

interface returnType {
  isTablet: boolean | null;
  isMobile: boolean | null;
  width: number;
}

const useWindowSize = (): returnType => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return {
    isTablet: windowSize?.width ? windowSize.width <= 768 : null,
    isMobile: windowSize?.width ? windowSize.width <= 430 : null,
    width: windowSize?.width || 0,
  };
};

export default useWindowSize;
