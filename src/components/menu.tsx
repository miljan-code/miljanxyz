import { homepageConfig } from '@/config/homepage';
import Button from '@/components/ui/button';
import NavLink from '@/components/ui/nav-link';

const Menu = () => {
  return (
    <div className="hidden items-center gap-6 md:flex">
      <nav className="flex items-center gap-6">
        {homepageConfig.mainNav.map((item, i) => (
          <NavLink key={item.label} href={item.href} index={i + 1}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a href="/store/resume.pdf" target="_blank">
        <Button variant="outlined">Resume</Button>
      </a>
    </div>
  );
};

export default Menu;
