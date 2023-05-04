interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="relative z-10 mb-14 inline-block">
      <h2 className="relative z-10 text-3xl font-semibold">{children}</h2>
      <div className="absolute bottom-0 left-1 inline-block h-3 w-full rounded-sm bg-primary" />
    </div>
  );
};
