import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  index: number;
  size?: 'default' | 'large';
}

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  index,
  size = 'default',
  className,
}) => {
  return (
    <Link href={href} className={cn('space-x-0.5', className)}>
      <span
        className={cn('text-primary', {
          'text-xs': size === 'default',
          'text-xl': size === 'large',
        })}
      >
        0{index}.
      </span>{' '}
      <span
        className={cn(
          'text-light transition-colors duration-300 ease-out hover:text-primary',
          {
            'text-sm': size === 'default',
            'text-2xl': size === 'large',
          }
        )}
      >
        {children}
      </span>
    </Link>
  );
};
