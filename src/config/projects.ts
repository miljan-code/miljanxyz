export const projectsConfig = {
  projects: [
    {
      title: 'GPT Writer',
      coverUrl: '/images/project-gpt-writer.png',
      description:
        "This project uses Open AI's GPT-3.5 to query prompts and transforms them into a bunch of useful services such as grammar checker, text summarizer, article writer, and paraphraser. Go to the landing page, click on Try now, and begin using the app.",
      techStack: [
        { name: 'NextJS', logo: '/icons/nextjs.png' },
        { name: 'Tailwind', logo: '/icons/tailwind.png' },
        { name: 'TypeScript', logo: '/icons/typescript.png' },
      ],
      githubUrl: 'https://github.com/miljan-code/gpt-writer-app',
      demoUrl: 'https://gpt-writer-ashy.vercel.app/',
    },
    {
      title: 'Buy&Sell',
      coverUrl: '/images/project-buy-sell.png',
      description:
        'This is a clone of very popular Serbian customer-to-customer e-commerce website kupujemprodajem.com. It provides services such as listing articles, sending messages to the sellers, seller ratings and much more.',
      techStack: [
        { name: 'Next', logo: '/icons/nextjs.png' },
        { name: 'TypeScript', logo: '/icons/typescript.png' },
        { name: 'Tailwind', logo: '/icons/tailwind.png' },
        { name: 'Prisma', logo: '/icons/prisma.png' },
        { name: 'MongoDB', logo: '/icons/mongodb.webp' },
      ],
      githubUrl: 'https://github.com/miljan-code/buy-sell',
      demoUrl: 'https://buy-sell-flame.vercel.app/',
    },
    {
      title: 'The Playlist',
      coverUrl: '/images/project-the-playlist.png',
      description:
        'The Playlist is music streaming application. This application allows you to listen to various artists, create playlist of your favourite songs, loop them, shuffle etc. Application also includes a customized audio player.',
      techStack: [
        { name: 'React', logo: '/icons/react.png' },
        { name: 'Redux', logo: '/icons/redux.png' },
        { name: 'TypeScript', logo: '/icons/typescript.png' },
      ],
      githubUrl: 'https://github.com/miljan-code/the-playlist',
      demoUrl: 'https://theplaylist.netlify.app/',
    },
  ],
};
