interface CtaButtonProps {
  children: React.ReactNode;
  href: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ href, children }) => {
  return (
    <div className="group relative inline-block">
      <a
        href={href}
        className="relative z-10 block rounded-sm border-2 border-primary bg-primary px-6 py-3 tracking-wide transition duration-300 ease-out hover:bg-primary/25 group-hover:translate-x-1 group-hover:translate-y-1"
      >
        {children}
      </a>
      <div className="absolute left-1 top-1 h-full w-full rounded-sm border-2 border-light" />
    </div>
  );
};
