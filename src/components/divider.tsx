import { cn } from '@/lib/utils';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div className={cn('relative mx-auto w-20 py-6', className)}>
      <div className="h-0.5 w-full bg-primary/50" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
        ★
      </span>
    </div>
  );
};
