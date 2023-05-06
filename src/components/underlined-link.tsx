import Link from 'next/link';
import { cn } from '@/lib/utils';

interface UnderlinedLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  href: string;
  color?: 'dark' | 'primary' | 'light';
}

export const UnderlinedLink: React.FC<UnderlinedLinkProps> = ({
  children,
  href,
  color = 'dark',
  className,
}) => {
  return (
    <div className={cn('leading-0 group relative w-fit', className)}>
      <Link
        href={href}
        className={cn('z-1 relative text-sm font-semibold', {
          'text-dark': color === 'dark',
          'text-primary': color === 'primary',
          'text-slate-100': color === 'light',
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
              'border-slate-100': color === 'light',
            }
          )}
        />
      </div>
    </div>
  );
};
