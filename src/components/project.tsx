import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UnderlinedLink } from '@/components/underlined-link';
import type { Project as ProjectType } from 'contentlayer/generated';

interface ProjectProps {
  context: ProjectType;
  color?: 'primary' | 'light' | 'dark';
  index?: number;
}

export const Project: React.FC<ProjectProps> = ({
  context,
  color = 'primary',
  index = 0,
}) => {
  const { title, coverUrl, description, techStack, githubUrl, demoUrl, slug } =
    context;

  return (
    <Card color={color} direction={index % 2 === 0 ? 'left' : 'right'}>
      <Card.Content>
        <Card.Title href={`/projects/${slug}`}>{title}</Card.Title>
        <div className="flex flex-wrap items-center gap-3">
          {techStack.map(item => (
            <p key={item} className="text-primary">
              {item}
            </p>
          ))}
        </div>
        <Card.Description>{description}</Card.Description>
        <UnderlinedLink
          href={`/projects/${slug}`}
          color={color}
          className="-mt-1 mb-2"
        >
          Read more
        </UnderlinedLink>
        <div className="flex items-center gap-2">
          <a href={demoUrl} target="_blank">
            <Button
              variant={index % 2 !== 0 ? 'light' : 'default'}
              rounded="full"
              className="w-fit"
            >
              Visit page
            </Button>
          </a>
          <a href={githubUrl} target="_blank">
            <Button
              variant={index % 2 !== 0 ? 'light' : 'default'}
              rounded="full"
              className="w-fit"
            >
              Source code
            </Button>
          </a>
        </div>
      </Card.Content>
      <Card.Image src={coverUrl} alt={title} className="pb-6" />
    </Card>
  );
};
