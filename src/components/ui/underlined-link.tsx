import Link from 'next/link';
import { cn } from '@/lib/utils';

interface UnderlinedLinkProps {
  children: React.ReactNode;
  href: string;
  color: 'dark' | 'primary';
}

const UnderlinedLink: React.FC<UnderlinedLinkProps> = ({
  children,
  href,
  color,
}) => {
  let linkStyle: string, underlineStyle: string;

  if (color === 'dark') {
    linkStyle = 'text-dark';
    underlineStyle = 'border-dark';
  } else {
    linkStyle = 'text-primary';
    underlineStyle = 'border-primary';
  }

  return (
    <div className="leading-0 group relative h-full w-fit">
      <Link
        href={href}
        className={cn('z-1 relative text-sm font-semibold', linkStyle)}
      >
        {children}
      </Link>
      <div className="absolute -mt-0.5 h-0.5 w-full overflow-hidden">
        <div
          className={cn(
            '-translate-x-32 border-t-2 transition-transform duration-300 ease-out group-hover:-translate-x-0',
            underlineStyle
          )}
        />
      </div>
    </div>
  );
};

export default UnderlinedLink;
