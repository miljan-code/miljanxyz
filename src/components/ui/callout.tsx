import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const calloutVariants = cva('rounded-md border border-l-4 p-4', {
  variants: {
    variant: {
      default: 'border-slate-100/10',
      primary: 'border-primary/25',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {}

export const Callout: React.FC<CalloutProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <div className={cn(calloutVariants({ variant, className }))} {...props} />
  );
};
