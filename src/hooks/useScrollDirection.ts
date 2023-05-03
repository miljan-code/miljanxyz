import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down';

export const useScrollDirection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setScrollDirection(scrollPosition > scrollY ? 'up' : 'down');
      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return scrollDirection;
};
