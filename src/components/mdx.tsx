import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
  h1: ({ ...props }) => (
    <h1 className="text-4xl font-bold tracking-tight" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2
      className="pb-1 text-center text-3xl font-semibold tracking-tight text-primary"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p className="font-light leading-8 tracking-wide" {...props} />
  ),
};

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
