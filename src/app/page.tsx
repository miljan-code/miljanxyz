import { homepageConfig } from '@/config/homepage';
import Decor from '@/components/ui/decor';
import CtaButton from '@/components/ui/cta-button';

export default function Home() {
  return (
    <>
      <section className="flex h-screen items-center justify-center bg-dark py-32 text-white md:py-0">
        <Decor />
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
    </>
  );
}
