import Image from 'next/image';
import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx';
import { Heading } from '@/components/ui/heading';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/divider';
import { Icons } from '@/components/ui/icons';

interface ProjectsPageProps {
  params: { slug: string };
}

const getProjectFromSlug = async (slug: string) => {
  const project = allProjects.find(project => project.slug === slug);

  if (!project) return null;

  return project;
};

export const generateStaticParams = async () => {
  return allProjects.map(project => ({
    slug: project.slug,
  }));
};

const ProjectPage = async ({ params }: ProjectsPageProps) => {
  const project = await getProjectFromSlug(params.slug);

  if (!project) return notFound();

  const { title, coverUrl, description, demoUrl, githubUrl, techStack } =
    project;

  return (
    <section className="bg-dark pt-28 text-light">
      <div className="mt-4 flex items-center justify-center">
        <Heading className="pb-4 sm:pb-6">
          <Heading.Label className="text-3xl sm:text-5xl">
            {project.title}
          </Heading.Label>
        </Heading>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-10 xl:px-0">
        <Card className="flex items-center justify-center">
          <Image
            src={coverUrl}
            alt={title}
            width={970}
            height={570}
            quality={100}
            className="mx-auto h-fit w-2/3"
          />
        </Card>
        <div className="rounded-md border border-l-4 border-primary/25 p-4">
          <p>{description}</p>
        </div>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center justify-center gap-6">
            <a
              href={githubUrl}
              target="_blank"
              className="flex items-center gap-1"
            >
              <Icons.Github />
              <span>GitHub</span>
            </a>
            <a
              href={demoUrl}
              target="_blank"
              className="flex items-center gap-1"
            >
              <Icons.Link />
              <span>Demo</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            {techStack.map(item => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <Divider />
        <Mdx code={project.body.code} />
      </div>
      <div className="mt-24 h-0.5 w-full bg-gray-700/50" />
    </section>
  );
};

export default ProjectPage;
