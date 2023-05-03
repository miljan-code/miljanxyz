import Button from '@/components/ui/button';

const Menu = () => {
  return (
    <div className="hidden items-center gap-6 md:flex">
      <nav className="flex items-center gap-6"></nav>
      <a href="/store/resume.pdf" target="_blank">
        <Button variant="outlined">Resume</Button>
      </a>
    </div>
  );
};

export default Menu;
