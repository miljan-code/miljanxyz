import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Icons } from '@/components/ui/icons';
import { UnderlinedLink } from '@/components/underlined-link';
import { Divider } from '@/components/divider';
import Link from 'next/link';

const BlogPage = () => {
  const article = allPosts.find(post => post.featured);

  return (
    <section className="bg-dark pt-28 text-light">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-10 xl:px-0">
        <Heading>
          <Heading.Sublabel>My Blog</Heading.Sublabel>
          <Heading.Label>
            Insights on topics
            <br /> I&apos;m excited for.
          </Heading.Label>
        </Heading>
        {article && (
          <Card color="light">
            <Card.Content>
              <Heading.Sublabel className="flex items-center gap-2">
                <span className="text-white">Featured Article</span>{' '}
                <Icons.Medal />
              </Heading.Sublabel>
              <Card.Title href={`/blog/${article.slug}`}>
                {article.title}
              </Card.Title>
              <Card.Description>{article.summary}</Card.Description>
              <UnderlinedLink
                href={`/blog/${article.slug}`}
                className="-mt-1 mb-2"
                color="light"
              >
                Read more
              </UnderlinedLink>
            </Card.Content>
            <div className="relative m-6 flex flex-1 items-center justify-center">
              <Link href={`/blog/${article.slug}`}>
                <Image
                  src={article.coverUrl}
                  alt={article.title}
                  fill
                  className="rounded-md object-cover"
                />
              </Link>
            </div>
          </Card>
        )}
        <Divider className="my-9" />
      </div>
      <div className="mt-24 h-0.5 w-full bg-gray-700/50" />
    </section>
  );
};

export default BlogPage;
