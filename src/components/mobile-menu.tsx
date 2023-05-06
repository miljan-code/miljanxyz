'use client';

import { useState } from 'react';
import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll';
import { useMounted } from '@/hooks/use-mounted';
import { cn } from '@/lib/utils';
import { homepageConfig } from '@/config/homepage';
import { Icons } from '@/components/ui/icons';
import { NavLink } from '@/components/nav-link';

interface MenuProps {
  onCloseMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ onCloseMenu }) => {
  const mounted = useMounted();
  useLockBodyScroll();

  return (
    <div
      className={cn(
        'fixed right-0 top-0 h-screen w-1/2 bg-dark/95 transition duration-300',
        {
          'translate-x-full': !mounted,
          'translate-x-0': mounted,
        }
      )}
    >
      <div className="mb-10 flex justify-end px-14 py-5">
        <Icons.Close size={36} onClick={onCloseMenu} />
      </div>
      <div className="flex flex-col gap-3 px-6">
        {homepageConfig.mainNav.map((item, i) => (
          <NavLink key={item.label} href={item.href} index={i + 1} size="large">
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(prev => !prev);

  return (
    <div className="md:hidden">
      {!showMenu && <Icons.Menu onClick={handleShowMenu} size={36} />}
      {showMenu && <Menu onCloseMenu={handleShowMenu} />}
    </div>
  );
};
