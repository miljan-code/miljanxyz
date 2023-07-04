import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
  h1: ({ ...props }) => (
    <h1 className="text-4xl font-bold tracking-tight" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2
      className="pb-1 text-center text-3xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className="w-fit border-b border-slate-400 text-xl font-semibold"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p
      className="font-light leading-8 tracking-wide text-white/90"
      {...props}
    />
  ),
  a: ({ ...props }) => (
    <a className="text-primary underline underline-offset-2" {...props} />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className="relative rounded-sm border-l-4 border-slate-100/10 bg-slate-700/30 py-2 pl-4 after:absolute after:right-1 after:top-0 after:text-3xl after:opacity-20 after:content-['❞']"
      {...props}
    />
  ),
  strong: ({ ...props }) => <strong className="font-bold" {...props} />,
  code: ({ ...props }) => (
    <code
      className="relative rounded border px-2 py-1 font-mono text-sm"
      {...props}
    />
  ),
  ul: ({ ...props }) => <ul className="ml-6 list-disc" {...props} />,
};

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
