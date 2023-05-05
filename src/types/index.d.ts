interface EduContent {
  label: string;
  title: string;
  timePeriod: string;
  achievedSkills: string[];
}

interface ProjectContent {
  title: string;
  coverUrl: string;
  description: string;
  techStack: TechStack[];
  githubUrl: string;
  demoUrl: string;
}

interface TechStack {
  name: string;
  logo: string;
}
