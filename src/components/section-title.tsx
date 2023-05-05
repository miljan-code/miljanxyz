import { cn } from '@/lib/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('relative z-10 mb-14 inline-block', className)}
      {...props}
    >
      <h2 className="relative z-10 text-3xl font-semibold">{children}</h2>
      <div className="absolute bottom-0 left-1 inline-block h-3 w-full rounded-sm bg-primary" />
    </div>
  );
};
