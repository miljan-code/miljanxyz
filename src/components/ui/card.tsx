import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'light' | 'dark';
  direction?: 'left' | 'right';
}

export function Card({
  color = 'primary',
  direction = 'left',
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-gray-700/50 md:h-96 ',
        {
          'bg-gradient-to-b from-dark to-primary/10': color === 'primary',
          'bg-gradient-to-b from-dark to-slate-200/10': color === 'light',
          'border-slate-100 bg-gradient-to-b from-white to-dark/10':
            color === 'dark',
        }
      )}
    >
      <div
        className={cn('h-[1px] w-full', {
          'bg-gradient-to-r from-transparent via-primary to-transparent':
            color === 'primary',
          'bg-gradient-to-r from-transparent via-slate-200 to-transparent':
            color === 'light',
          'via-dark-200 bg-gradient-to-r from-transparent to-transparent':
            color === 'dark',
        })}
      />
      <div
        className={cn(
          'relative flex h-full gap-2',
          {
            'flex-row-reverse': direction === 'right',
            'flex-row': direction === 'left',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

Card.Content = function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className={cn('flex flex-1 flex-col justify-end gap-4 p-6', className)}
      {...props}
    />
  );
};

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

Card.Image = function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className="hidden flex-1 items-end pb-6 sm:flex">
      <Image
        src={src || ''}
        alt={alt || ''}
        width={970}
        height={570}
        className={cn('h-auto w-full object-cover', className)}
      />
    </div>
  );
};

interface CardTitleProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

Card.Title = function CardTitle({ href, className, ...props }: CardTitleProps) {
  return (
    <Link
      className={cn('w-fit text-2xl font-bold md:text-3xl', className)}
      href={href || ''}
      {...props}
    />
  );
};

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

Card.Description = function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={cn('text-sm text-white/70 md:text-base', className)}
      {...props}
    />
  );
};
