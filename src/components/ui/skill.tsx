import Image from 'next/image';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const skillVariants = cva('flex w-fit cursor-pointer items-center rounded-sm', {
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

interface SkillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skillVariants> {}

export function Skill({
  className,
  variant,
  animation,
  size,
  ...props
}: SkillProps) {
  return (
    <div
      className={cn(skillVariants({ variant, size, animation, className }))}
      {...props}
    />
  );
}

interface SkillIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

Skill.Icon = function SkillIcon({ className, src }: SkillIconProps) {
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

interface SkillLabelProps extends React.HTMLAttributes<HTMLSpanElement> {}

Skill.Label = function SkillLabel({ className, ...props }: SkillLabelProps) {
  return <span className="text-xs xs:text-sm sm:text-base" {...props} />;
};
