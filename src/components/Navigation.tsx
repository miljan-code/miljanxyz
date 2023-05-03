'use client';

import { useScrollDirection } from '@/hooks/useScrollDirection';

const Navigation = () => {
  const scrollDirection = useScrollDirection();

  if (scrollDirection === 'down') {
    return null;
  }

  return <header className="">Hello from header</header>;
};

export default Navigation;
