import { allProjects } from 'contentlayer/generated';
import { Heading } from '@/components/ui/heading';
import { Project } from '@/components/project';

const ProjectsPage = () => {
  const projects = allProjects.sort((a, b) => a.order - b.order);

  return (
    <section className="bg-dark pt-28 text-light">
      <Heading className="mb-6">
        <Heading.Sublabel>I like building stuff</Heading.Sublabel>
        <Heading.Label>My work.</Heading.Label>
      </Heading>
      <div className="mx-auto flex max-w-5xl flex-col gap-20 px-10 pb-16 xl:px-0">
        {projects.map((item, i) => (
          <Project
            key={item._id}
            color={i % 2 !== 0 ? 'primary' : 'light'}
            context={item}
            index={i}
          />
        ))}
      </div>
      <div className="mt-24 h-0.5 w-full bg-gray-700/50" />
    </section>
  );
};

export default ProjectsPage;
