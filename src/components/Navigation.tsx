'use client';

import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { Logo } from '@/components/logo';
import { Menu } from '@/components/menu';

export const Navigation = () => {
  const { scrollDirection, scrollPosition } = useScrollDirection();

  if (scrollDirection === 'down') {
    return null;
  }

  return (
    <header
      className={`
      ${scrollPosition === 0 ? 'shadow-none' : 'shadow-md'}
      fixed z-100 flex w-full items-center justify-between bg-dark/95 px-14 py-4 text-white backdrop-blur-xs
      `}
    >
      <Logo />
      <Menu />
    </header>
  );
};
