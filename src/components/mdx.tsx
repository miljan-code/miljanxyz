import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
  p: ({ ...props }) => (
    <p className="text-lg font-light leading-8 tracking-wide" {...props} />
  ),
};

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
