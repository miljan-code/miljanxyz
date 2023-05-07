import Image from 'next/image';
import { allAbouts } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Decor } from '@/components/ui/decor';

const AboutPage = () => {
  const [about] = allAbouts;

  return (
    <section className="bg-dark pt-28 text-light">
      <div className="relative z-10 mx-auto max-w-5xl px-10 xl:px-0">
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
        <div className="mb-6 space-y-3">
          <Mdx code={about.body.code} />
        </div>
        <div className="flex items-center justify-between">
          <a href="/store/resume.pdf" target="_blank">
            <Button>Resume</Button>
          </a>
          <Decor.ReactIcon />
        </div>
      </div>
      <div className="mt-24 h-0.5 w-full bg-gray-700/50" />
    </section>
  );
};

export default AboutPage;
