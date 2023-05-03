import Link from 'next/link';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  index: number;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, index }) => {
  return (
    <Link href={href} className="space-x-0.5">
      <span className="text-xs text-primary">0{index}.</span>{' '}
      <span className="text-sm text-light transition-colors duration-300 ease-out hover:text-primary">
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
