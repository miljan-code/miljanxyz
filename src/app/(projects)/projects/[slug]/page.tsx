import { notFound } from 'next/navigation';
import { allProjects } from 'contentlayer/generated';
import { Heading } from '@/components/ui/heading';

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

  return (
    <section className="bg-dark pt-28 text-light">
      <div className="mt-4 flex items-center justify-center">
        <Heading>
          <Heading.Label>{project.title}</Heading.Label>
        </Heading>
      </div>
      <div className="mx-auto max-w-4xl px-10 xl:px-0">
        <p>Hello World</p>
      </div>
      <div className="mt-24 h-0.5 w-full bg-gray-700/50" />
    </section>
  );
};

export default ProjectPage;
