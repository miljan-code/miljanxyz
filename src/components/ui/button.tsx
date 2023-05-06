import { forwardRef } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('border-2 transition duration-300 ease-out', {
  variants: {
    variant: {
      default: 'bg-primary border-primary hover:bg-primary/25',
      outlined: 'bg-transparent border-primary hover:bg-primary/25',
      light: 'bg-slate-100 border-slate-100 hover:bg-slate-100/75 text-black',
    },
    size: {
      default: 'px-3 py-1 text-sm',
    },
    rounded: {
      default: 'rounded-sm',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    rounded: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
