import Image from 'next/image';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const tagVariants = cva('flex w-fit cursor-pointer items-center rounded-sm', {
  variants: {
    variant: {
      default: 'bg-dark text-light',
      white: 'bg-light text-dark',
    },
    animation: {
      default: '',
      upOnHover: 'transition duration-300 ease-out hover:-translate-y-0.5',
    },
    size: {
      default: 'px-3 py-1 sm:px-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    animation: 'default',
    size: 'default',
  },
});

interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

export function Tag({
  className,
  variant,
  animation,
  size,
  ...props
}: TagProps) {
  return (
    <div
      className={cn(tagVariants({ variant, size, animation, className }))}
      {...props}
    />
  );
}

interface TagIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

Tag.Icon = function TagIcon({ className, src }: TagIconProps) {
  return (
    <Image
      src={src || ''}
      alt="icon"
      width={64}
      height={64}
      className={cn('-ml-1 mr-2 h-4 w-4', className)}
    />
  );
};

interface TagLabelProps extends React.HTMLAttributes<HTMLSpanElement> {}

Tag.Label = function TagLabel({ className, ...props }: TagLabelProps) {
  return <span className="text-xs xs:text-sm sm:text-base" {...props} />;
};
