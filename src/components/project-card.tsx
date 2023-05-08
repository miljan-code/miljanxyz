import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Tag } from '@/components/ui/tag';
import { Icons } from '@/components/ui/icons';
import type { Project } from 'contentlayer/generated';

interface ProjectCardProps {
  content: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ content, index }) => {
  const { title, coverUrl, description, techStack, demoUrl, githubUrl } =
    content;

  return (
    <div className="flex flex-col gap-3 md:grid md:grid-cols-7 md:items-center md:gap-6">
      <div
        className={cn('group relative overflow-hidden rounded-md', {
          'col-start-1 col-end-4': index % 2 === 0,
          'col-start-5 col-end-8 row-start-1': index % 2 !== 0,
        })}
      >
        <Image
          src={coverUrl}
          alt={title}
          width={750}
          height={750}
          className="h-auto w-full object-cover"
        />
        <a
          href={demoUrl}
          target="_blank"
          className="absolute inset-0 flex w-full cursor-pointer items-center justify-center transition duration-300"
        >
          <Icons.ExternalLink
            size={96}
            className="text-slate-800 opacity-0 transition duration-300 group-hover:opacity-100"
          />
        </a>
      </div>
      <div
        className={cn('flex flex-col gap-4', {
          'col-start-4 col-end-8': index % 2 === 0,
          'col-start-1 col-end-5 row-start-1': index % 2 !== 0,
        })}
      >
        <Link
          href={`/projects/${content.slug}`}
          className="text-center text-3xl font-semibold md:w-fit md:text-left"
        >
          {title}
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-1 md:justify-start">
          {techStack.map(item => (
            <Tag key={item} className="cursor-auto">
              <Tag.Icon src={`/icons/${item.toLowerCase()}.png`} />
              <Tag.Label>{item}</Tag.Label>
            </Tag>
          ))}
        </div>
        <p>{description}</p>
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <a href={githubUrl} target="_blank">
            <Icons.Github />
          </a>
          <a href={demoUrl} target="_blank">
            <Icons.Link />
          </a>
          <Link href={`/projects/${content.slug}`}>
            <Icons.Info />
          </Link>
        </div>
      </div>
    </div>
  );
};
