'use client';

import { usePathname } from 'next/navigation';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { cn } from '@/lib/utils';
import { author } from '@/config/author';
import { Icons } from '@/components/ui/icons';
import type { Icon } from 'lucide-react';

interface SocialIconProps {
  icon: Icon;
  scrollPosition: number;
  breakPosition: number;
  href?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon: Icon,
  scrollPosition,
  breakPosition,
  href,
}) => {
  return (
    <a href={href} target="_blank">
      <Icon
        className={cn(
          'text-lg text-light transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-primary',
          {
            'text-dark': scrollPosition > breakPosition,
          }
        )}
      />
    </a>
  );
};

interface LineProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollPosition: number;
  breakPosition: number;
}

const Line: React.FC<LineProps> = ({
  scrollPosition,
  breakPosition,
  className,
}) => {
  return (
    <div
      className={cn(
        'mt-3 h-40 w-[1px] bg-light',
        {
          'bg-dark': scrollPosition > breakPosition,
        },
        className
      )}
    />
  );
};

export const Socials = () => {
  const pathname = usePathname();
  const { scrollPosition } = useScrollDirection();

  if (pathname !== '/') return null;

  return (
    <div className="fixed bottom-0 z-0 hidden w-full items-end justify-between px-14 xl:flex">
      <div className="flex flex-col items-center gap-4">
        <SocialIcon
          icon={Icons.Github}
          breakPosition={260}
          href={author.github}
          scrollPosition={scrollPosition}
        />
        <SocialIcon
          icon={Icons.Linkedin}
          breakPosition={230}
          href={author.linkedin}
          scrollPosition={scrollPosition}
        />
        <SocialIcon
          icon={Icons.Mail}
          breakPosition={200}
          href={`mailto:${author.email}`}
          scrollPosition={scrollPosition}
        />
        <Line scrollPosition={scrollPosition} breakPosition={170} />
      </div>
      <div className="flex flex-col items-center gap-4">
        <SocialIcon
          icon={Icons.Star}
          breakPosition={390}
          scrollPosition={scrollPosition}
        />
        <SocialIcon
          icon={Icons.Star}
          breakPosition={360}
          scrollPosition={scrollPosition}
        />
        <SocialIcon
          icon={Icons.Star}
          breakPosition={330}
          scrollPosition={scrollPosition}
        />
        <Line
          scrollPosition={scrollPosition}
          breakPosition={170}
          className="h-[300px]"
        />
      </div>
    </div>
  );
};
