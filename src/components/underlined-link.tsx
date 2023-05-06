import Link from 'next/link';
import { cn } from '@/lib/utils';

interface UnderlinedLinkProps {
  children: React.ReactNode;
  href: string;
  color?: 'dark' | 'primary';
}

export const UnderlinedLink: React.FC<UnderlinedLinkProps> = ({
  children,
  href,
  color = 'dark',
}) => {
  return (
    <div className="leading-0 group relative h-full w-fit">
      <Link
        href={href}
        className={cn('z-1 relative text-sm font-semibold', {
          'text-dark': color === 'dark',
          'text-primary': color === 'primary',
        })}
      >
        {children}
      </Link>
      <div className="absolute -mt-0.5 h-0.5 w-full overflow-hidden">
        <div
          className={cn(
            '-translate-x-36 border-t-2 transition-transform duration-300 ease-out group-hover:-translate-x-0',
            {
              'border-dark': color === 'dark',
              'border-primary': color === 'primary',
            }
          )}
        />
      </div>
    </div>
  );
};