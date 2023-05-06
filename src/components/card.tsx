import Image from 'next/image';
import Link from 'next/link';
import slugify from 'slugify';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { UnderlinedLink } from '@/components/underlined-link';

interface CardProps {
  content: ProjectContent;
  primary?: boolean;
}

const Card: React.FC<CardProps> = ({ primary = true, content }) => {
  const { title, coverUrl, description, demoUrl, techStack, githubUrl } =
    content;

  const slug = `/project/${slugify(title, { lower: true })}`;

  return (
    <div
      className={cn(
        'h-96 overflow-hidden rounded-2xl border border-gray-700/50 ',
        {
          'bg-gradient-to-b from-dark to-primary/10': primary,
          'bg-gradient-to-b from-dark to-slate-200/10': !primary,
        }
      )}
    >
      <div
        className={cn('h-[1px] w-full', {
          'bg-gradient-to-r from-transparent via-primary to-transparent':
            primary,
          'bg-gradient-to-r from-transparent via-slate-200 to-transparent':
            !primary,
        })}
      />
      <div
        className={cn('flex h-full gap-2', {
          'flex-row-reverse': primary,
          'flex-row': !primary,
        })}
      >
        <div className="flex flex-1 flex-col justify-end gap-4 p-6">
          <Link href={slug} className="w-fit">
            <h3 className="text-3xl font-bold">{title}</h3>
          </Link>
          <div className="flex items-center gap-3">
            {techStack.map(item => (
              <p key={item.name} className="text-primary">
                {item.name}
              </p>
            ))}
          </div>
          <p className="text-white/70">{description}</p>
          <UnderlinedLink
            href={slug}
            color={primary ? 'primary' : 'light'}
            className="-mt-1 mb-2"
          >
            Read more
          </UnderlinedLink>
          <div className="flex items-center gap-2">
            <a href={demoUrl} target="_blank">
              <Button
                variant={primary ? 'light' : 'default'}
                rounded="full"
                className="w-fit"
              >
                Visit page
              </Button>
            </a>
            <a href={githubUrl} target="_blank">
              <Button
                variant={primary ? 'light' : 'default'}
                rounded="full"
                className="w-fit"
              >
                Source code
              </Button>
            </a>
          </div>
        </div>
        <div className="flex flex-1 items-end pb-6">
          <Image
            src={coverUrl}
            alt={title}
            width={970}
            height={570}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
