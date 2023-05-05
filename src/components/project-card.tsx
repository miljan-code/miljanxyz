import Image from 'next/image';
import Link from 'next/link';
import slugify from 'slugify';
import { Tag } from '@/components/ui/tag';
import { Icons } from '@/components/ui/icons';

interface ProjectCardProps {
  content: ProjectContent;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  const { title, coverUrl, description, techStack, demoUrl, githubUrl } =
    content;

  const slug = `/project/${slugify(title, { lower: true })}`;

  return (
    <div className="flex flex-col gap-3 md:grid md:grid-cols-7 md:items-center md:gap-6">
      <div className="group relative col-span-3 overflow-hidden rounded-md border border-dark/10">
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
          className="absolute inset-0 flex w-full cursor-pointer items-center justify-center transition duration-300 group-hover:bg-dark/25"
        >
          <Icons.ExternalLink
            size={96}
            className="text-white opacity-0 transition duration-300 group-hover:opacity-100"
          />
        </a>
      </div>
      <div className="col-span-4 flex flex-col gap-4">
        <Link
          href={slug}
          className="text-center text-3xl font-semibold md:w-fit md:text-left"
        >
          {title}
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-1 md:flex-nowrap md:justify-start">
          {techStack.map(item => (
            <Tag key={item.name} className="cursor-auto">
              <Tag.Icon src={item.logo} />
              <Tag.Label>{item.name}</Tag.Label>
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
          <Link href={slug}>
            <Icons.Info />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
