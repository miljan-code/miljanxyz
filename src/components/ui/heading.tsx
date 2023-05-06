import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Heading({ className, ...props }: HeadingProps) {
  return (
    <div
      className={cn('flex flex-col pb-12 text-center sm:pb-16', className)}
      {...props}
    />
  );
}

interface HeadingSublabelProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

Heading.Sublabel = function HeadingSublabel({
  className,
  ...props
}: HeadingSublabelProps) {
  return (
    <p
      className={cn('uppercase tracking-wider text-primary', className)}
      {...props}
    />
  );
};

interface HeadingLabelProps extends React.HTMLAttributes<HTMLHeadingElement> {}

Heading.Label = function HeadingLabel({
  className,
  ...props
}: HeadingLabelProps) {
  return (
    <h1
      className={cn('text-4xl font-semibold sm:text-6xl', className)}
      {...props}
    />
  );
};
