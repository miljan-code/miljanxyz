import Image from 'next/image';
import { homepageConfig } from '@/config/homepage';
import { CtaButton } from '@/components/ui/cta-button';
import { SectionTitle } from '@/components/section-title';
import { Decor } from '@/components/ui/decor';
import { Skill } from '@/components/ui/skill';
import { Icons } from '@/components/ui/icons';
import { UnderlinedLink } from '@/components/ui/underlined-link';
import { Tabs } from '@/components/tabs';

export default function Home() {
  return (
    <>
      {/* HERO section */}
      <section className="flex h-screen items-center justify-center bg-dark py-32 text-white md:py-0">
        <Decor.Planets />
        <div className="relative z-10 space-y-4 px-6 text-center sm:px-10 lg:px-0 lg:text-left">
          <p className="text-lg font-normal text-primary">
            Hi there, my name is
          </p>
          <h1 className="text-6xl font-bold text-light sm:text-7xl">
            Miljan Gičić.
          </h1>
          <p className="pb-4 text-4xl font-semibold text-light/75 sm:text-7xl">
            I&apos;m a web developer.
          </p>
          <p className="w-full pb-4 lg:max-w-lg">{homepageConfig.heroText}</p>
          <CtaButton href="#projects">See My Work</CtaButton>
        </div>
      </section>

      {/* ABOUT ME Section */}
      <section className="mb-10 text-dark">
        <div className="relative z-10 mx-auto max-w-4xl px-10 py-20 xl:px-0">
          <div className="flex items-center justify-between">
            <SectionTitle>About me</SectionTitle>
            {/* Pic for small devices */}
            <Image
              src="/images/author-1.png"
              alt="Miljan Gicic"
              height={552}
              width={438}
              className="mb-10 h-32 w-auto rounded-sm lg:hidden"
            />
          </div>
          <div className="inline-flex items-center gap-10">
            {/* Pic for large devices */}
            <div className="hidden w-full lg:block">
              <Image
                src="/images/author-2.jpg"
                alt="Miljan Gicic"
                height={1280}
                width={1131}
                className="h-full w-full rounded-sm"
              />
            </div>
            <div>
              {/* List of skills */}
              <div className="relative z-10 mb-10 flex flex-wrap items-center gap-3 backface-hidden">
                {homepageConfig.skills.map(item => (
                  <Skill key={item} animation="upOnHover">
                    <Skill.Label>{item}</Skill.Label>
                  </Skill>
                ))}
              </div>
              {/* Summary */}
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-black">
                <span>I love learning new stuff</span>
                <Icons.Book />
              </h3>
              <p className="mb-6 leading-relaxed">{homepageConfig.summary}</p>
              <UnderlinedLink href="/about" color="primary">
                Keep reading my bio
              </UnderlinedLink>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION Section */}
      <section className="mb-10 text-dark" id="education">
        <div className="relative z-10 mx-auto max-w-4xl px-10 py-20 xl:px-0">
          <SectionTitle>Education</SectionTitle>
          <Decor.Graduate />
          <Tabs content={homepageConfig.eduTabs} />
        </div>
      </section>

      {/* PROJECTS Section */}
    </>
  );
}
