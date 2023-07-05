'use client';

import { useScrollDirection } from '@/hooks/use-scroll-direction';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const { scrollDirection, scrollPosition } = useScrollDirection();

  if (scrollDirection === 'down') {
    return null;
  }

  return (
    <header
      className={`
      ${scrollPosition === 0 ? 'shadow-none' : 'shadow-md'}
      fixed z-100 flex w-full items-center justify-between bg-dark/95 px-10 py-4 text-white backdrop-blur-xs lg:px-14
      `}
    >
      {children}
    </header>
  );
};
