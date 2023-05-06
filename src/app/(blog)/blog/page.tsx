import { Heading } from '@/components/ui/heading';

const BlogPage = () => {
  return (
    <section className="bg-dark pt-28 text-light">
      <div className="mt-4 flex h-72 items-center justify-center">
        <Heading>
          <Heading.Label>Coming Soon</Heading.Label>
        </Heading>
      </div>
      <div className="mt-24 h-0.5 w-full bg-gray-700/50" />
    </section>
  );
};

export default BlogPage;
