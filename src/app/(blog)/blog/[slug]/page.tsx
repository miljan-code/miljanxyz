import Image from 'next/image';
import { notFound } from 'next/navigation';
import { allAuthors, allPosts } from 'contentlayer/generated';
import { formatDate } from '@/lib/utils';
import { Mdx } from '@/components/mdx';
import { Heading } from '@/components/ui/heading';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/divider';
import { Callout } from '@/components/ui/callout';
import '@/styles/mdx.css';

interface PostPageProps {
  params: { slug: string };
}

export const generateStaticParams = async () => {
  return allPosts.map(post => ({
    slug: post.slug,
  }));
};

const getPostAndAuthorFromSlug = async (slug: string) => {
  const article = allPosts.find(post => post.slug === slug);

  if (!article) return notFound();

  let author = allAuthors.find(author => author.username === article.author);

  return { article, author };
};

const PostPage = async ({ params }: PostPageProps) => {
  const { article, author } = await getPostAndAuthorFromSlug(params.slug);

  return (
    <section className="bg-dark pt-28 text-light">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-10 xl:px-0">
        <Heading className="mt-4 pb-4 sm:pb-6">
          <Heading.Label className="text-3xl sm:text-5xl">
            {article.title}
          </Heading.Label>
        </Heading>
        <div className="flex items-center justify-between">
          <p className="text-sm">Published on {formatDate(article.date)}</p>
          {author && (
            <div className="flex items-center gap-2">
              <span>{author.username}</span>
              <Image
                src={author.avatar}
                alt={author.username}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          )}
        </div>
        <Card className="flex items-center justify-center">
          <Image
            src={article.coverUrl}
            alt={article.title}
            fill
            quality={100}
            className="object-cover"
          />
        </Card>
        <Callout>
          <p>{article.summary}</p>
        </Callout>
        <Divider />
        <Mdx code={article.body.code} />
      </div>
      <div className="mt-24 h-0.5 w-full bg-gray-700/50" />
    </section>
  );
};

export default PostPage;
