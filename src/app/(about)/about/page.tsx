import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

const AboutPage = () => {
  return (
    <section className="bg-dark pt-28 text-light">
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
        {/* MDX */}
      </div>
    </section>
  );
};

export default AboutPage;
