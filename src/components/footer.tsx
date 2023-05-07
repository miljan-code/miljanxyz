import { CtaButton } from '@/components/cta-button';
import { SectionTitle } from '@/components/section-title';
import { Decor } from '@/components/ui/decor';
import { Icons } from './ui/icons';
import { author } from '@/config/author';

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark text-light">
      <div className="mx-auto flex max-w-4xl flex-col px-10 py-20 sm:flex-row sm:justify-between md:px-0">
        <div className="flex flex-col items-center sm:items-start">
          {/* prettier-ignore */}
          <SectionTitle className="w-fit text-white">
            Get in touch
          </SectionTitle>
          <p className="mb-8 flex flex-col gap-2 text-center sm:text-left sm:text-xl">
            <span>I&apos;m currenty looking for new opportunities.</span>
            <span>Love to hear from you 👋</span>
          </p>
          <CtaButton
            href={`mailto:${author.email}`}
            className="mb-6 w-fit sm:mb-0"
          >
            Say Hello
          </CtaButton>
        </div>
        <div className="flex flex-col items-center justify-between sm:items-start">
          <Decor.PaperPlane />
          <div className="flex items-center gap-2">
            <a href={author.github} target="_blank">
              <Icons.Github />
            </a>
            <a href={author.linkedin} target="_blank">
              <Icons.Linkedin />
            </a>
            <a href={`mailto:${author.email}`} target="_blank">
              <Icons.Mail />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-10">
        <span className="text-xs font-semibold">developed by Miljan.</span>
      </div>
    </footer>
  );
};
