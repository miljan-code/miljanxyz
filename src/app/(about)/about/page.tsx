import Image from 'next/image';
import { Manrope } from 'next/font/google';
import { cn } from '@/lib/utils';
import { allAbouts } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx';
import { Heading } from '@/components/ui/heading';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400'],
});

const AboutPage = () => {
  const [about] = allAbouts;

  return (
    <section className={cn('bg-dark pt-28 text-light', manrope.className)}>
      <div className="relative z-10 max-w-5xl px-10 xl:px-0">
        <Heading>
          <Heading.Sublabel>Hello</Heading.Sublabel>
          <Heading.Label>Here&apos;s my story.</Heading.Label>
        </Heading>
        <Image
          src="/images/author-2.jpg"
          alt="Miljan Gicic"
          height={1280}
          width={1131}
          className="float-left mr-6 mt-3 hidden h-1/4 w-1/4 rounded-lg md:block"
        />
        <div className="space-y-3">
          <Mdx code={about.body.code} />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
