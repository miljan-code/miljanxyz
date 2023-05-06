import { projectsConfig } from '@/config/projects';
import { Heading } from '@/components/ui/heading';
import Card from '@/components/card';

const ProjectsPage = () => {
  return (
    <section className="bg-dark pt-28 text-light">
      <Heading className="mb-6">
        <Heading.Label>My work.</Heading.Label>
      </Heading>
      <div className="mx-auto flex max-w-5xl flex-col gap-20 px-10 pb-16 xl:px-0">
        {projectsConfig.projects.map((item, i) => (
          <Card
            key={item.title}
            color={i % 2 !== 0 ? 'primary' : 'light'}
            content={item}
            index={i}
          />
        ))}
      </div>
      <div className="mt-24 h-0.5 w-full bg-gray-700/50" />
    </section>
  );
};

export default ProjectsPage;
